import {
	ArrowDownNarrowWide,
	ArrowRight,
	ArrowUpNarrowWide,
	BarChart2,
	RefreshCw,
	Search,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useGallery } from "../../../store/GalleryContext";
import {
	type AnalyticsCategory,
	type AnalyticsCategoryItem,
	type AnalyticsSort,
	type AnalyticsSummary,
	fetchAnalyticsCategory,
	fetchAnalyticsSummary,
	refreshAnalytics,
} from "../api/analyticsApi";
import styles from "./AnalyticsView.module.css";

const CATEGORY_PREFIX: Record<string, string> = {
	positive_prompts: "pos",
	negative_prompts: "neg",
	tags: "tag",
	models: "model",
	by_date: "date",
	by_resolution: "resolution",
};

function buildSearchQuery(category: string, value: string): string {
	const prefix = CATEGORY_PREFIX[category];
	if (!prefix) return value;
	const needsQuotes = /[\s"]/.test(value);
	return needsQuotes ? `${prefix}:"${value.replace(/"/g, '\\"')}"` : `${prefix}:${value}`;
}

function getItemDisplayValue(item: AnalyticsCategoryItem, _category: string): string {
	if (item.name !== undefined) return item.name;
	if (item.date !== undefined) return item.date;
	if (item.resolution !== undefined) return item.resolution;
	return "";
}

function getItemValue(item: AnalyticsCategoryItem, category: string): string {
	return getItemDisplayValue(item, category);
}

interface AnalyticsViewProps {
	onClose: () => void;
	onSearchAndNavigate?: (query: string) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ onClose, onSearchAndNavigate }) => {
	const { dispatch } = useGallery();
	const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [expandedCategory, setExpandedCategory] = useState<AnalyticsCategory | null>(null);
	const [fullItems, setFullItems] = useState<AnalyticsCategoryItem[]>([]);
	const [fullTotal, setFullTotal] = useState(0);
	const [fullLoading, setFullLoading] = useState(false);
	const [fullSort, setFullSort] = useState<AnalyticsSort>("count_desc");
	const [fullQuery, setFullQuery] = useState("");
	const prevFullQueryRef = useRef("");
	const refreshAbortRef = useRef<AbortController | null>(null);

	useEscapeToClose({
		onEscape: () => {
			if (expandedCategory) {
				setExpandedCategory(null);
			} else {
				onClose();
			}
		},
	});

	const loadSummary = useCallback(async (signal?: AbortSignal) => {
		setIsLoading(true);
		try {
			const data = await fetchAnalyticsSummary({ signal });
			if (signal?.aborted) return;
			setSummary(data);
		} catch {
			if (signal?.aborted) return;
			setSummary(null);
		} finally {
			if (!signal?.aborted) {
				setIsLoading(false);
			}
		}
	}, []);

	useEffect(() => {
		loadSummary();
	}, [loadSummary]);

	const loadFullList = useCallback(
		async (category: AnalyticsCategory, sort: AnalyticsSort, q: string, signal?: AbortSignal) => {
			setFullLoading(true);
			try {
				const { data, total } = await fetchAnalyticsCategory(category, {
					limit: 500,
					offset: 0,
					sort,
					q: q.trim() || undefined,
					signal,
				});
				if (signal?.aborted) return;
				setFullItems(data);
				setFullTotal(total);
			} catch {
				if (signal?.aborted) return;
				setFullItems([]);
				setFullTotal(0);
			} finally {
				if (!signal?.aborted) {
					setFullLoading(false);
				}
			}
		},
		[],
	);

	useEffect(() => {
		if (!expandedCategory) return;
		const isQueryChange = prevFullQueryRef.current !== fullQuery;
		prevFullQueryRef.current = fullQuery;
		const abortController = new AbortController();

		const run = () => {
			loadFullList(expandedCategory, fullSort, fullQuery, abortController.signal);
		};

		if (isQueryChange) {
			const t = setTimeout(run, 300);
			return () => {
				clearTimeout(t);
				abortController.abort();
			};
		}
		run();
		return () => abortController.abort();
	}, [expandedCategory, fullSort, fullQuery, loadFullList]);

	const handleRefresh = useCallback(async () => {
		refreshAbortRef.current?.abort();
		const controller = new AbortController();
		refreshAbortRef.current = controller;
		const signal = controller.signal;

		setIsRefreshing(true);
		try {
			await refreshAnalytics();
			if (signal.aborted) return;
			await loadSummary(signal);
			if (signal.aborted) return;
			if (expandedCategory) {
				await loadFullList(expandedCategory, fullSort, fullQuery, signal);
			}
			if (signal.aborted) return;
			dispatch({ type: "SHOW_TOAST", payload: "Analytics refreshed" });
		} finally {
			if (!signal.aborted) {
				setIsRefreshing(false);
			}
		}
	}, [loadSummary, loadFullList, expandedCategory, fullSort, fullQuery, dispatch]);

	useEffect(() => {
		return () => {
			refreshAbortRef.current?.abort();
		};
	}, []);

	const handleItemClick = useCallback(
		(category: string, value: string) => {
			const query = buildSearchQuery(category, value);
			if (onSearchAndNavigate) {
				onSearchAndNavigate(query);
			} else {
				onClose();
			}
		},
		[onSearchAndNavigate, onClose],
	);

	const renderSection = (
		title: string,
		category: AnalyticsCategory,
		items: { name?: string; date?: string; resolution?: string; count: number }[],
	) => (
		<div key={category} className={styles.meldAnalytics__section}>
			<div className={styles.meldAnalytics__sectionHeader}>
				<h3 className={styles.meldAnalytics__sectionTitle}>{title}</h3>
				<button
					type="button"
					className={styles.meldAnalytics__seeAllBtn}
					onClick={() => {
						setExpandedCategory(category);
						setFullQuery("");
						setFullSort("count_desc");
					}}
				>
					See all <ArrowRight size={14} />
				</button>
			</div>
			{items.map((item, idx) => {
				const val = getItemValue(item, category);
				return (
					<div
						key={`${val}-${idx}`}
						role="button"
						tabIndex={0}
						className={styles.meldAnalytics__item}
						onClick={() => handleItemClick(category, val)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								handleItemClick(category, val);
							}
						}}
					>
						<span className={styles.meldAnalytics__itemLabel}>{val}</span>
						<span className={styles.meldAnalytics__itemCount}>{item.count}</span>
					</div>
				);
			})}
		</div>
	);

	return (
		<div className="meld-analytics-view">
			<div className="meld-analytics-header">
				<div className={styles.meldAnalytics__headerRow}>
					<BarChart2 size={16} />
					<h3 className={styles.meldAnalytics__title}>Image Analytics</h3>
				</div>
				<div className={styles.meldAnalytics__controls}>
					<button
						type="button"
						className={styles.meldAnalytics__refreshBtn}
						onClick={handleRefresh}
						disabled={isRefreshing}
						title="Refresh analytics"
					>
						<RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
						Refresh
					</button>
					<button
						type="button"
						className="meld-analytics-close"
						onClick={onClose}
						title="Close and return to gallery"
					>
						<X size={16} />
					</button>
				</div>
			</div>

			<div className="meld-analytics-content">
				{expandedCategory ? (
					<div className={styles.meldAnalytics__fullView}>
						<div className={styles.meldAnalytics__fullViewToolbar}>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 8,
									flex: 1,
									minWidth: 0,
									background: "var(--comfy-input-bg)",
									padding: "6px 10px",
									borderRadius: "6px",
									border: "1px solid var(--meld-border-color)",
								}}
							>
								<Search size={14} style={{ flexShrink: 0, color: "var(--meld-text-secondary)" }} />
								<input
									type="text"
									className={styles.meldAnalytics__searchInput}
									style={{
										border: "none",
										background: "transparent",
										width: "100%",
									}}
									placeholder="Filter..."
									value={fullQuery}
									onChange={(e) => setFullQuery(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="meld-btn meld-btn--secondary"
								style={{ padding: "6px 12px", height: "auto" }}
								onClick={() =>
									setFullSort((s) => (s === "count_desc" ? "count_asc" : "count_desc"))
								}
								title={fullSort === "count_desc" ? "Sort ascending" : "Sort descending"}
							>
								{fullSort === "count_desc" ? (
									<ArrowDownNarrowWide size={14} />
								) : (
									<ArrowUpNarrowWide size={14} />
								)}
								{fullSort === "count_desc" ? "Desc" : "Asc"}
							</button>
							<button
								type="button"
								className="meld-btn meld-btn--secondary"
								style={{ padding: "6px 12px", height: "auto" }}
								onClick={() => setExpandedCategory(null)}
							>
								Back
							</button>
						</div>
						{fullLoading ? (
							<div className="meld-gallery__loading">Loading...</div>
						) : (
							<div className={styles.meldAnalytics__fullList}>
								{fullItems.map((item, idx) => {
									const val = getItemValue(item, expandedCategory);
									return (
										<div
											key={`${val}-${idx}`}
											role="button"
											tabIndex={0}
											className={styles.meldAnalytics__fullListItem}
											onClick={() => handleItemClick(expandedCategory, val)}
											onKeyDown={(e) => {
												if (e.key === "Enter" || e.key === " ") {
													e.preventDefault();
													handleItemClick(expandedCategory, val);
												}
											}}
										>
											<span className={styles.meldAnalytics__itemLabel}>
												{idx + 1}. {val}
											</span>
											<span className={styles.meldAnalytics__itemCount}>{item.count}</span>
										</div>
									);
								})}
								{fullItems.length === 0 && (
									<div className="meld-gallery__empty">No items found.</div>
								)}
							</div>
						)}
						<div style={{ fontSize: 12, color: "var(--meld-text-secondary)" }}>
							{fullTotal} total
						</div>
					</div>
				) : isLoading ? (
					<div className="meld-gallery__loading">Loading analytics...</div>
				) : summary ? (
					<div className={styles.meldAnalytics}>
						<div className={styles.meldAnalytics__totalCard}>
							<div className={styles.meldAnalytics__totalCardTitle}>Total Images</div>
							<div className={styles.meldAnalytics__totalCardValue}>
								{summary.total_images.toLocaleString()}
							</div>
						</div>
						<div className={styles.meldAnalytics__grid}>
							{renderSection(
								"Positive Prompt (top 5)",
								"positive_prompts",
								summary.positive_prompts,
							)}
							{renderSection(
								"Negative Prompt (top 5)",
								"negative_prompts",
								summary.negative_prompts,
							)}
							{renderSection("Tag (top 5)", "tags", summary.tags)}
							{renderSection("Model (top 5)", "models", summary.models)}
							{renderSection("Created Date (top 5)", "by_date", summary.by_date)}
							{renderSection("Resolution (top 5)", "by_resolution", summary.by_resolution)}
						</div>
					</div>
				) : (
					<div className="meld-gallery__empty">Failed to load analytics.</div>
				)}
			</div>
		</div>
	);
};
