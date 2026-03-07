import { Check, Copy } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { logger } from "../../../logger";
import type { GalleryAction, MeldImage, Settings } from "../../../types";

interface ViewerInfoPanelProps {
	image: MeldImage;
	isFullscreen: boolean;
	settings: Settings;
	showIcons: boolean;
	parentChain: { id: number | null; imgSrc: string | null }[];
	dispatch: React.Dispatch<GalleryAction>;
	onEditNotes?: () => void;
}

export const ViewerInfoPanel: React.FC<ViewerInfoPanelProps> = ({
	image,
	isFullscreen,
	settings,
	showIcons,
	parentChain,
	dispatch,
	onEditNotes,
}) => {
	const [saveStatus, setSaveStatus] = useState<"idle" | "saving">("idle");
	const [copiedField, setCopiedField] = useState<string | null>(null);
	const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleCopy = useCallback(async (text: string, fieldId: string) => {
		try {
			await navigator.clipboard.writeText(text);
			if (copyTimeoutRef.current) {
				clearTimeout(copyTimeoutRef.current);
				copyTimeoutRef.current = null;
			}
			setCopiedField(fieldId);
			copyTimeoutRef.current = setTimeout(() => {
				setCopiedField(null);
				copyTimeoutRef.current = null;
			}, 2000);
		} catch (_err) {
			// Clipboard API may fail in some contexts; ignore
		}
	}, []);

	// Reset local state on mount; cleanup timeout on unmount
	useEffect(() => {
		setSaveStatus("idle");
		setCopiedField(null);
		return () => {
			if (copyTimeoutRef.current) {
				clearTimeout(copyTimeoutRef.current);
				copyTimeoutRef.current = null;
			}
		};
	}, []);

	const showNotesSetting = isFullscreen
		? settings["fullscreen.details.show_user_notes"]
		: settings["viewer.details.show_user_notes"];
	const shouldShowNotes =
		showNotesSetting === "always" || (showNotesSetting === "if_present" && image.user_notes);

	const [corePrompts, setCorePrompts] = useState<{ name: string; count: number }[]>([]);
	const [isLoadingCorePrompts, setIsLoadingCorePrompts] = useState(false);

	const showCorePromptSetting = isFullscreen
		? settings["fullscreen.details.show_core_prompt"]
		: settings["viewer.details.show_core_prompt"];
	const corePromptCountSetting = isFullscreen
		? settings["fullscreen.details.core_prompt_count"]
		: settings["viewer.details.core_prompt_count"];

	useEffect(() => {
		if (!showCorePromptSetting) {
			setIsLoadingCorePrompts(false);
			setCorePrompts([]);
			return;
		}

		const positiveMsg = image.positive_prompt || image.positive || "";
		if (!positiveMsg.trim()) {
			setIsLoadingCorePrompts(false);
			setCorePrompts([]);
			return;
		}

		// Core Prompt selection: split positiveMsg by comma -> deduplicate -> fetch global
		// usage counts per keyword -> sort ascending by count (least-used = most distinctive)
		// -> take top corePromptCountSetting results.
		const keywords = Array.from(
			new Set(
				positiveMsg
					.split(",")
					.map((k) => k.trim())
					.filter((k) => k.length > 0),
			),
		);

		if (keywords.length === 0) {
			setIsLoadingCorePrompts(false);
			setCorePrompts([]);
			return;
		}

		const controller = new AbortController();
		const fetchCore = async () => {
			setIsLoadingCorePrompts(true);
			try {
				const { fetchAnalyticsCounts } = await import("../../analytics/api/analyticsApi");
				const counts = await fetchAnalyticsCounts("positive_prompts", keywords, {
					signal: controller.signal,
				});
				if (controller.signal.aborted) return;

				const sorted = keywords
					.map((name) => ({
						name,
						count: counts[name] ?? 0,
					}))
					.sort((a, b) => a.count - b.count);

				setCorePrompts(sorted.slice(0, corePromptCountSetting));
			} catch (err) {
				if (err instanceof Error && err.name === "AbortError") {
					setIsLoadingCorePrompts(false);
					setCorePrompts([]);
					return;
				}
				logger.error("Failed to fetch core prompt counts", err);
			} finally {
				if (!controller.signal.aborted) setIsLoadingCorePrompts(false);
			}
		};

		fetchCore();

		return () => {
			controller.abort();
			setIsLoadingCorePrompts(false);
			setCorePrompts([]);
		};
	}, [image.positive_prompt, image.positive, showCorePromptSetting, corePromptCountSetting]);

	return (
		<div
			className={`meld-viewer-details-overlay ${isFullscreen ? "meld-viewer-details-overlay--fullscreen" : ""} ${!showIcons ? "meld-viewer-details-overlay--no-icons" : ""}`}
		>
			{(isFullscreen
				? settings["fullscreen.details.show_filename"]
				: settings["viewer.details.show_filename"]) !== "none" && (
				<div className="meld-viewer-details-item">
					<div className="meld-viewer-details-item__header">
						<div className="meld-viewer-details-label">
							{(isFullscreen
								? settings["fullscreen.details.show_filename"]
								: settings["viewer.details.show_filename"]) === "filepath"
								? "Filepath"
								: "Filename"}
						</div>
						<button
							type="button"
							className="meld-viewer-details-copy-btn"
							title="Copy"
							aria-label={
								(isFullscreen
									? settings["fullscreen.details.show_filename"]
									: settings["viewer.details.show_filename"]) === "filepath"
									? "Copy filepath"
									: "Copy filename"
							}
							onClick={(e) => {
								e.stopPropagation();
								const text =
									(isFullscreen
										? settings["fullscreen.details.show_filename"]
										: settings["viewer.details.show_filename"]) === "filepath"
										? `${image.type !== "custom" ? `${image.type}/` : ""}${
												image.subfolder ? `${image.subfolder}/` : ""
											}${image.filename}`
										: image.filename;
								handleCopy(text, "filepath");
							}}
						>
							{copiedField === "filepath" ? <Check size={16} /> : <Copy size={16} />}
						</button>
					</div>
					<div className="meld-viewer-details-value">
						{(isFullscreen
							? settings["fullscreen.details.show_filename"]
							: settings["viewer.details.show_filename"]) === "filepath"
							? `${image.type !== "custom" ? `${image.type}/` : ""}${
									image.subfolder ? `${image.subfolder}/` : ""
								}${image.filename}`
							: image.filename}
					</div>
				</div>
			)}

			{(isFullscreen
				? settings["fullscreen.details.show_dimensions"]
				: settings["viewer.details.show_dimensions"]) &&
				image.width &&
				image.height && (
					<div className="meld-viewer-details-item">
						<div className="meld-viewer-details-item__header">
							<div className="meld-viewer-details-label">Dimensions</div>
							<button
								type="button"
								className="meld-viewer-details-copy-btn"
								title="Copy"
								aria-label="Copy dimensions"
								onClick={(e) => {
									e.stopPropagation();
									handleCopy(`${image.width} x ${image.height} px`, "dimensions");
								}}
							>
								{copiedField === "dimensions" ? <Check size={16} /> : <Copy size={16} />}
							</button>
						</div>
						<div className="meld-viewer-details-value">
							{image.width} x {image.height} px
						</div>
					</div>
				)}

			{(isFullscreen
				? settings["fullscreen.details.show_created_at"]
				: settings["viewer.details.show_created_at"]) && (
				<div className="meld-viewer-details-item">
					<div className="meld-viewer-details-item__header">
						<div className="meld-viewer-details-label">Created At</div>
						<button
							type="button"
							className="meld-viewer-details-copy-btn"
							title="Copy"
							aria-label="Copy created timestamp"
							onClick={(e) => {
								e.stopPropagation();
								handleCopy(new Date(image.created_at * 1000).toLocaleString(), "created_at");
							}}
						>
							{copiedField === "created_at" ? <Check size={16} /> : <Copy size={16} />}
						</button>
					</div>
					<div className="meld-viewer-details-value">
						{new Date(image.created_at * 1000).toLocaleString()}
					</div>
				</div>
			)}

			{image.deleted_at && (
				<div className="meld-viewer-details-item">
					<div className="meld-viewer-details-item__header">
						<div className="meld-viewer-details-label">Deleted At</div>
						<button
							type="button"
							className="meld-viewer-details-copy-btn"
							title="Copy"
							aria-label="Copy deleted timestamp"
							onClick={(e) => {
								e.stopPropagation();
								const deletedAt = image.deleted_at;
								if (deletedAt) {
									handleCopy(new Date(deletedAt * 1000).toLocaleString(), "deleted_at");
								}
							}}
						>
							{copiedField === "deleted_at" ? <Check size={16} /> : <Copy size={16} />}
						</button>
					</div>
					<div className="meld-viewer-details-value">
						{new Date(image.deleted_at * 1000).toLocaleString()}
					</div>
				</div>
			)}

			{(isFullscreen
				? settings["fullscreen.details.show_model_name"]
				: settings["viewer.details.show_model_name"]) &&
				image.model_name && (
					<div className="meld-viewer-details-item">
						<div className="meld-viewer-details-item__header">
							<div className="meld-viewer-details-label">Model</div>
							<button
								type="button"
								className="meld-viewer-details-copy-btn"
								title="Copy"
								aria-label="Copy model"
								onClick={(e) => {
									e.stopPropagation();
									const name = image.model_name;
									if (name) handleCopy(name, "model");
								}}
							>
								{copiedField === "model" ? <Check size={16} /> : <Copy size={16} />}
							</button>
						</div>
						<div className="meld-viewer-details-value">{image.model_name}</div>
					</div>
				)}

			{(isFullscreen
				? settings["fullscreen.details.show_source"]
				: settings["viewer.details.show_source"]) &&
				parentChain.length > 0 && (
					<div className="meld-viewer-details-item">
						<div className="meld-viewer-details-label">Source</div>
						<div className="meld-viewer-details-tags">
							<div className="meld-lineage-thumbs">
								{parentChain.map(
									(p, index) =>
										p.imgSrc && (
											<button
												key={p.id || index}
												type="button"
												className="meld-lineage-badge__parent-thumb meld-lineage-badge__parent-thumb-btn"
												style={{
													cursor: "pointer",
													padding: 0,
													border: "none",
													background: "none",
												}}
												onClick={(e) => {
													e.stopPropagation();
													dispatch({
														type: "OPEN_VIEWER",
														payload: {
															id: p.id || image.id,
															mode: "lineage",
														},
													});
												}}
												title={
													index === 0
														? "Source"
														: index === 1
															? "Grand-Source"
															: `Ancestor (S${index + 1})`
												}
												aria-label={
													index === 0
														? "View source image"
														: index === 1
															? "View grand-source image"
															: `View ancestor image (S${index + 1})`
												}
											>
												<img
													src={p.imgSrc}
													loading="lazy"
													alt=""
													style={{
														display: "block",
														width: "100%",
														height: "100%",
														objectFit: "cover",
													}}
												/>
											</button>
										),
								)}
							</div>
						</div>
					</div>
				)}

			{(isFullscreen
				? settings["fullscreen.details.show_positive_prompt"]
				: settings["viewer.details.show_positive_prompt"]) &&
				(image.positive_prompt || image.positive) && (
					<div className="meld-viewer-details-item">
						<div className="meld-viewer-details-item__header">
							<div className="meld-viewer-details-label">Positive</div>
							<button
								type="button"
								className="meld-viewer-details-copy-btn"
								title="Copy"
								aria-label="Copy positive prompt"
								onClick={(e) => {
									e.stopPropagation();
									handleCopy(image.positive_prompt || image.positive || "", "positive");
								}}
							>
								{copiedField === "positive" ? <Check size={16} /> : <Copy size={16} />}
							</button>
						</div>
						<div
							className="meld-viewer-details-value meld-viewer-details-value--prompt"
							style={
								{
									"--meld-prompt-max-lines": isFullscreen
										? settings["fullscreen.details.max_positive_prompt_lines"]
										: settings["viewer.details.max_positive_prompt_lines"],
								} as React.CSSProperties
							}
						>
							{image.positive_prompt || image.positive}
						</div>
					</div>
				)}

			{showCorePromptSetting && (isLoadingCorePrompts || corePrompts.length > 0) && (
				<div className="meld-viewer-details-item">
					<div className="meld-viewer-details-item__header">
						<div className="meld-viewer-details-label">
							Core Prompt
							{isLoadingCorePrompts && <span className="meld-notes__status">Loading...</span>}
						</div>
						{!isLoadingCorePrompts && corePrompts.length > 0 && (
							<button
								type="button"
								className="meld-viewer-details-copy-btn"
								title="Copy"
								aria-label="Copy core prompt"
								onClick={(e) => {
									e.stopPropagation();
									handleCopy(corePrompts.map((cp) => cp.name).join(", "), "core_prompt");
								}}
							>
								{copiedField === "core_prompt" ? <Check size={16} /> : <Copy size={16} />}
							</button>
						)}
					</div>
					<div className="meld-viewer-details-tags">
						{corePrompts.map((cp, idx) => (
							<span
								key={`${cp.name}-${idx}`}
								className="meld-viewer-details-tag"
								title={`Usage count: ${cp.count}`}
							>
								{cp.name} <span className="meld-viewer-details-tag-count">({cp.count})</span>
							</span>
						))}
					</div>
				</div>
			)}

			{(isFullscreen
				? settings["fullscreen.details.show_negative_prompt"]
				: settings["viewer.details.show_negative_prompt"]) &&
				(image.negative_prompt || image.negative) && (
					<div className="meld-viewer-details-item">
						<div className="meld-viewer-details-item__header">
							<div className="meld-viewer-details-label">Negative</div>
							<button
								type="button"
								className="meld-viewer-details-copy-btn"
								title="Copy"
								aria-label="Copy negative prompt"
								onClick={(e) => {
									e.stopPropagation();
									handleCopy(image.negative_prompt || image.negative || "", "negative");
								}}
							>
								{copiedField === "negative" ? <Check size={16} /> : <Copy size={16} />}
							</button>
						</div>
						<div
							className="meld-viewer-details-value meld-viewer-details-value--prompt"
							style={
								{
									"--meld-prompt-max-lines": isFullscreen
										? settings["fullscreen.details.max_negative_prompt_lines"]
										: settings["viewer.details.max_negative_prompt_lines"],
								} as React.CSSProperties
							}
						>
							{image.negative_prompt || image.negative}
						</div>
					</div>
				)}

			{(isFullscreen
				? settings["fullscreen.details.show_tags"]
				: settings["viewer.details.show_tags"]) &&
				image.tags &&
				image.tags.length > 0 && (
					<div className="meld-viewer-details-item">
						<div className="meld-viewer-details-item__header">
							<div className="meld-viewer-details-label">Tags</div>
							<button
								type="button"
								className="meld-viewer-details-copy-btn"
								title="Copy"
								aria-label="Copy tags"
								onClick={(e) => {
									e.stopPropagation();
									handleCopy(image.tags?.join(", ") ?? "", "tags");
								}}
							>
								{copiedField === "tags" ? <Check size={16} /> : <Copy size={16} />}
							</button>
						</div>
						<div className="meld-viewer-details-tags">
							{image.tags.map((tag) => (
								<span key={tag} className="meld-viewer-details-tag">
									{tag}
								</span>
							))}
						</div>
					</div>
				)}

			{shouldShowNotes && (
				<div className="meld-viewer-details-item meld-viewer-details-item--notes">
					<div className="meld-viewer-details-item__header">
						<div className="meld-viewer-details-label">
							Notes
							{saveStatus === "saving" && <span className="meld-notes__status">Saving...</span>}
						</div>
						<button
							type="button"
							className="meld-viewer-details-copy-btn"
							title="Copy"
							aria-label="Copy notes"
							onClick={(e) => {
								e.stopPropagation();
								handleCopy(image.user_notes || "", "notes");
							}}
						>
							{copiedField === "notes" ? <Check size={16} /> : <Copy size={16} />}
						</button>
					</div>
					<button
						type="button"
						className="meld-viewer-notes-preview"
						onClick={(e) => {
							e.stopPropagation();
							onEditNotes?.();
						}}
						aria-label={image.user_notes ? "Edit notes" : "Add notes"}
						style={{
							cursor: "pointer",
							minHeight: "40px",
							padding: "8px",
							backgroundColor: "var(--meld-input-bg)",
							borderRadius: "4px",
							fontSize: "0.9rem",
							whiteSpace: "pre-wrap",
							width: "100%",
							textAlign: "left",
							border: "none",
							color: "inherit",
							fontFamily: "inherit",
						}}
					>
						{image.user_notes || (
							<span style={{ color: "var(--meld-text-secondary)" }}>Add notes...</span>
						)}
					</button>
				</div>
			)}
		</div>
	);
};
