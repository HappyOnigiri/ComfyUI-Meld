import type React from "react";
import { useEffect, useState } from "react";
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

	// Update local state when image changes
	useEffect(() => {
		setSaveStatus("idle");
	}, []);

	const showNotesSetting = isFullscreen
		? settings["fullscreen.details.show_user_notes"]
		: settings["viewer.details.show_user_notes"];
	const shouldShowNotes =
		showNotesSetting === "always" || (showNotesSetting === "if_present" && image.user_notes);

	return (
		<div
			className={`meld-viewer-details-overlay ${isFullscreen ? "meld-viewer-details-overlay--fullscreen" : ""} ${!showIcons ? "meld-viewer-details-overlay--no-icons" : ""}`}
		>
			{(isFullscreen
				? settings["fullscreen.details.show_filename"]
				: settings["viewer.details.show_filename"]) !== "none" && (
				<div className="meld-viewer-details-item">
					<div className="meld-viewer-details-label">
						{(isFullscreen
							? settings["fullscreen.details.show_filename"]
							: settings["viewer.details.show_filename"]) === "filepath"
							? "Filepath"
							: "Filename"}
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
						<div className="meld-viewer-details-label">Dimensions</div>
						<div className="meld-viewer-details-value">
							{image.width} x {image.height} px
						</div>
					</div>
				)}

			{(isFullscreen
				? settings["fullscreen.details.show_created_at"]
				: settings["viewer.details.show_created_at"]) && (
				<div className="meld-viewer-details-item">
					<div className="meld-viewer-details-label">Created At</div>
					<div className="meld-viewer-details-value">
						{new Date(image.created_at * 1000).toLocaleString()}
					</div>
				</div>
			)}

			{image.deleted_at && (
				<div className="meld-viewer-details-item">
					<div className="meld-viewer-details-label">Deleted At</div>
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
						<div className="meld-viewer-details-label">Model</div>
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
											<img
												key={p.id || index}
												src={p.imgSrc}
												className="meld-lineage-badge__parent-thumb"
												style={{ cursor: "pointer" }}
												loading="lazy"
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
												alt="source thumb"
											/>
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
						<div className="meld-viewer-details-label">Positive</div>
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

			{(isFullscreen
				? settings["fullscreen.details.show_negative_prompt"]
				: settings["viewer.details.show_negative_prompt"]) &&
				(image.negative_prompt || image.negative) && (
					<div className="meld-viewer-details-item">
						<div className="meld-viewer-details-label">Negative</div>
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
						<div className="meld-viewer-details-label">Tags</div>
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
					<div className="meld-viewer-details-label">
						Notes
						{saveStatus === "saving" && <span className="meld-notes-status">Saving...</span>}
					</div>
					<div
						className="meld-viewer-notes-preview"
						onClick={(e) => {
							e.stopPropagation();
							onEditNotes?.();
						}}
						style={{
							cursor: "pointer",
							minHeight: "40px",
							padding: "8px",
							backgroundColor: "var(--meld-input-bg)",
							borderRadius: "4px",
							fontSize: "0.9rem",
							whiteSpace: "pre-wrap",
						}}
					>
						{image.user_notes || (
							<span style={{ color: "var(--meld-text-secondary)" }}>Add notes...</span>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
