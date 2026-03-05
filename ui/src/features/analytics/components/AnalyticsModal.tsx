import {
	ArrowDownNarrowWide,
	ArrowUpNarrowWide,
	BarChart2,
	RefreshCw,
	Search,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import {
	type AnalyticsCategory,
	type AnalyticsCategoryItem,
	type AnalyticsSort,
	type AnalyticsSummary,
	fetchAnalyticsCategory,
	fetchAnalyticsSummary,
	refreshAnalytics,
} from "../api/analyticsApi";
import styles from "./AnalyticsModal.module.css";

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

interface AnalyticsModalProps {
	onClose: () => void;
	onSearchAndNavigate?: (query: string) => void;
}

export const AnalyticsModal: React.FC<AnalyticsModalProps> = ({ onClose, onSearchAndNavigate }) => {
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

	useEscapeToClose({
		onEscape: () => {
			if (expandedCategory) {
				setExpandedCategory(null);
			} else {
				onClose();
			}
		},
	});

	const loadSummary = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await fetchAnalyticsSummary();
			setSummary(data);
		} catch {
			setSummary(null);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		loadSummary();
	}, [loadSummary]);

	const loadFullList = useCallback(
		async (category: AnalyticsCategory, sort: AnalyticsSort, q: string) => {
			setFullLoading(true);
			try {
				const { data, total } = await fetchAnalyticsCategory(category, {
					limit: 500,
					offset: 0,
					sort,
					q: q.trim() || undefined,
				});
				setFullItems(data);
				setFullTotal(total);
			} catch {
				setFullItems([]);
				setFullTotal(0);
			} finally {
				setFullLoading(false);
			}
		},
		[],
	);

	useEffect(() => {
		if (!expandedCategory) return;
		const isQueryChange = prevFullQueryRef.current !== fullQuery;
		prevFullQueryRef.current = fullQuery;
		if (isQueryChange) {
			const t = setTimeout(() => loadFullList(expandedCategory, fullSort, fullQuery), 300);
			return () => clearTimeout(t);
		}
		loadFullList(expandedCategory, fullSort, fullQuery);
	}, [expandedCategory, fullSort, fullQuery, loadFullList]);

	const handleRefresh = useCallback(async () => {
		setIsRefreshing(true);
		try {
			await refreshAnalytics();
			await loadSummary();
			if (expandedCategory) {
				await loadFullList(expandedCategory, fullSort, fullQuery);
			}
		} finally {
			setIsRefreshing(false);
		}
	}, [loadSummary, loadFullList, expandedCategory, fullSort, fullQuery]);

	const handleItemClick = useCallback(
		(category: string, value: string) => {
			const query = buildSearchQuery(category, value);
			onSearchAndNavigate?.(query);
			onClose();
		},
		[onSearchAndNavigate, onClose],
	);

	const renderSection = (
		title: string,
		category: AnalyticsCategory,
		items: { name?: string; date?: string; resolution?: string; count: number }[],
	) => (
		<div key={category} className={styles.meldAnalytics__section}>
			<h3 className={styles.meldAnalytics__sectionTitle}>{title}</h3>
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
			<button
				type="button"
				className={styles.meldAnalytics__seeAllBtn}
				onClick={() => {
					setExpandedCategory(category);
					setFullQuery("");
					setFullSort("count_desc");
				}}
			>
				See all
			</button>
		</div>
	);

	return (
		<div
			className="meld-modal-overlay"
			onMouseDown={(e) => e.target === e.currentTarget && onClose()}
			onClick={(e) => e.target === e.currentTarget && onClose()}
			role="dialog"
			aria-modal="true"
			aria-labelledby="analytics-modal-title"
		>
			<div
				className={`meld-modal-content ${expandedCategory ? "meld-modal-content--medium" : ""}`}
				onMouseDown={(e) => e.stopPropagation()}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h2 id="analytics-modal-title" style={{ display: "flex", alignItems: "center", gap: 8 }}>
						<BarChart2 size={18} />
						Image Analytics
					</h2>
					<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
						<button type="button" className="meld-modal-close" onClick={onClose} title="Close">
							<X size={18} />
						</button>
					</div>
				</div>

				<div className="meld-modal-body">
					{expandedCategory ? (
						<div className={styles.meldAnalytics__fullView}>
							<div className={styles.meldAnalytics__fullViewToolbar}>
								<div
									style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, minWidth: 0 }}
								>
									<Search size={14} style={{ flexShrink: 0 }} />
									<input
										type="text"
										className={styles.meldAnalytics__searchInput}
										placeholder="Filter..."
										value={fullQuery}
										onChange={(e) => setFullQuery(e.target.value)}
									/>
								</div>
								<button
									type="button"
									className={styles.meldAnalytics__sortBtn}
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
									className={styles.meldAnalytics__closeFullBtn}
									onClick={() => setExpandedCategory(null)}
								>
									Close
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
							<div className={styles.meldAnalytics__section}>
								<h3 className={styles.meldAnalytics__sectionTitle}>Total Images</h3>
								<div style={{ fontSize: 18, fontWeight: 600 }}>
									{summary.total_images.toLocaleString()}
								</div>
							</div>
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
					) : (
						<div className="meld-gallery__empty">Failed to load analytics.</div>
					)}
				</div>
			</div>
		</div>
	);
};
