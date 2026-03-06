import React, { useEffect, useState } from "react";
import type { MeldImage } from "../../../types";
import { useLightTableStore } from "../../light-table/store";
import { useImageCardLogic } from "../hooks/useImageCardLogic";
import { ImageCardMenu } from "./ImageCardMenu";
import { PromptPopup } from "./PromptPopup";

interface DetailedImageCardProps {
	image: MeldImage;
}

export const DetailedImageCard: React.FC<DetailedImageCardProps> = React.memo(({ image }) => {
	const {
		state,
		dispatch,
		isSelected,
		popupContent,
		setPopupContent,
		isMenuOpen,
		setIsMenuOpen,
		copiedLabel,
		popupCopied,
		menuRef,
		parentChain,
		displayFilename,
		imgSrc,
		handleCopy,
		handleClick,
		handleSelectToggle,
		handleContainerClick,
		handleMouseDown,
		handleKeyDown,
		handleRestoreWorkflow,
		handleAddUnifiedLoader,
		handleEditSource,
		handleEditTags,
		handleEditNotes,
		handleSendToWorkflow,
		handleRestore,
		handleDelete,
		handleRunWithWorkflow,
		handleRunWithMask,
		fetchFullImageDetails,
	} = useImageCardLogic(image);

	// TODO: Wire save flow to set saveStatus to "saving" before starting and "idle" after completion.
	// Currently saveStatus is never set to "saving", so "Saving..." indicator will not show.
	const [saveStatus, setSaveStatus] = useState<"idle" | "saving">("idle");

	useEffect(() => {
		if (image.user_notes && saveStatus === "saving") {
			setSaveStatus("idle");
		}
	}, [image.user_notes, saveStatus]);

	const handleDragStart = (e: React.DragEvent) => {
		e.stopPropagation();
		let idsToTransfer = String(image.id);
		if (isSelected && state.selectedIds.size > 0) {
			idsToTransfer = Array.from(state.selectedIds).join(",");
		}
		e.dataTransfer.setData("text/plain", idsToTransfer);
		// Open the dock automatically
		useLightTableStore.getState().setIsOpen(true);
	};

	return (
		<div
			className={`meld-image-card ${isSelected ? "meld-image-card--selected" : ""} ${isMenuOpen ? "meld-image-card--menu-open" : ""}`}
			onClick={handleContainerClick}
			onMouseDown={handleMouseDown}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
			draggable={true}
			onDragStart={handleDragStart}
		>
			<div className="meld-image-card__thumbnail-wrapper">
				<button
					type="button"
					className={`meld-image-card__select-checkbox ${isSelected ? "meld-image-card__select-checkbox--checked" : ""}`}
					onClick={handleSelectToggle}
					aria-label="Toggle selection"
					role="checkbox"
					aria-checked={isSelected}
				>
					{isSelected && (
						<svg
							viewBox="0 0 24 24"
							width="12"
							height="12"
							stroke="currentColor"
							strokeWidth="4"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<title>Selected</title>
							<polyline points="20 6 9 17 4 12" />
						</svg>
					)}
				</button>
				<img
					src={imgSrc}
					className="meld-image-card__thumbnail"
					alt={image.filename}
					loading="lazy"
					draggable={false}
					width={image.width || undefined}
					height={image.height || undefined}
					style={{
						aspectRatio:
							image.width && image.height ? `${image.width} / ${image.height}` : undefined,
					}}
					onMouseDown={handleMouseDown}
					onClick={(e) => {
						e.stopPropagation();
						handleClick(e);
					}}
				/>
			</div>
			<div className="meld-image-card__details">
				{(state.settings["sidebar.show_filename"] !== "none" ||
					state.settings["sidebar.show_dimensions"]) && (
					<div className="meld-image-card__filename">
						{state.settings["sidebar.show_filename"] !== "none" && displayFilename}
						{state.settings["sidebar.show_filename"] !== "none" &&
							state.settings["sidebar.show_dimensions"] &&
							image.width &&
							image.height &&
							` (${image.width} x ${image.height})`}
						{state.settings["sidebar.show_filename"] === "none" &&
							state.settings["sidebar.show_dimensions"] &&
							image.width &&
							image.height &&
							`${image.width} x ${image.height}`}
					</div>
				)}

				{state.settings["gallery.show_parent_image"] && parentChain.length > 0 && (
					<div className="meld-image-card__lineage-v2">
						<div className="meld-image-card__meta-label">Source</div>
						<div className="meld-lineage-thumbs">
							{parentChain.map(
								(p, index) =>
									p.imgSrc && (
										<button
											key={p.id || index}
											type="button"
											className="meld-lineage-badge__parent-thumb meld-lineage-badge__parent-thumb-btn"
											style={{
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
				)}

				{state.settings["sidebar.show_created_at"] && (
					<div className="meld-image-card__meta-item">
						<div className="meld-image-card__meta-label">Created At</div>
						<div className="meld-image-card__meta-content">
							{new Date(image.created_at * 1000).toLocaleString()}
						</div>
					</div>
				)}

				{state.viewScope === "trash" && image.deleted_at && (
					<div className="meld-image-card__meta-item">
						<div className="meld-image-card__meta-label">Deleted At</div>
						<div className="meld-image-card__meta-content">
							{new Date(image.deleted_at * 1000).toLocaleString()}
						</div>
					</div>
				)}

				{state.settings["sidebar.show_model_name"] && (
					<div
						className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
						onClick={async (e) => {
							e.stopPropagation();
							const fullImage = await fetchFullImageDetails(image.id);
							setPopupContent({
								title: "Model",
								text: fullImage.model_name || "-",
							});
						}}
					>
						<div
							className={`meld-image-card__meta-label meld-image-card__meta-label--copyable ${copiedLabel === "Model" ? "meld-image-card__meta-label--copied" : ""}`}
							title="Click to copy"
							onClick={async (e) => {
								e.stopPropagation();
								const fullImage = await fetchFullImageDetails(image.id);
								handleCopy(fullImage.model_name || "-", "Model");
							}}
						>
							{copiedLabel === "Model" ? "Copied!" : "Model"}
						</div>
						<div className="meld-image-card__meta-content">{image.model_name || "-"}</div>
					</div>
				)}

				{state.settings["sidebar.show_positive_prompt"] && (
					<div
						className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
						onClick={async (e) => {
							e.stopPropagation();
							const fullImage = await fetchFullImageDetails(image.id);
							setPopupContent({
								title: "Positive Prompt",
								text: fullImage.positive_prompt || fullImage.positive || "-",
							});
						}}
					>
						<div
							className={`meld-image-card__meta-label meld-image-card__meta-label--copyable ${copiedLabel === "Positive" ? "meld-image-card__meta-label--copied" : ""}`}
							title="Click to copy"
							onClick={async (e) => {
								e.stopPropagation();
								const fullImage = await fetchFullImageDetails(image.id);
								handleCopy(fullImage.positive_prompt || fullImage.positive || "-", "Positive");
							}}
						>
							{copiedLabel === "Positive" ? "Copied!" : "Positive"}
						</div>
						<div className="meld-image-card__meta-content">
							{image.positive_prompt || image.positive || "-"}
						</div>
					</div>
				)}

				{state.settings["sidebar.show_negative_prompt"] && (
					<div
						className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
						onClick={async (e) => {
							e.stopPropagation();
							const fullImage = await fetchFullImageDetails(image.id);
							setPopupContent({
								title: "Negative Prompt",
								text: fullImage.negative_prompt || fullImage.negative || "-",
							});
						}}
					>
						<div
							className={`meld-image-card__meta-label meld-image-card__meta-label--copyable ${copiedLabel === "Negative" ? "meld-image-card__meta-label--copied" : ""}`}
							title="Click to copy"
							onClick={async (e) => {
								e.stopPropagation();
								const fullImage = await fetchFullImageDetails(image.id);
								handleCopy(fullImage.negative_prompt || fullImage.negative || "-", "Negative");
							}}
						>
							{copiedLabel === "Negative" ? "Copied!" : "Negative"}
						</div>
						<div className="meld-image-card__meta-content">
							{image.negative_prompt || image.negative || "-"}
						</div>
					</div>
				)}

				{state.settings["sidebar.show_tags"] && (
					<div
						className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
						onClick={(e) => {
							e.stopPropagation();
							handleEditTags();
						}}
					>
						<div className="meld-image-card__meta-label">Tags</div>
						<div className="meld-image-card__tags">
							{image.tags && image.tags.length > 0 ? (
								image.tags.map((tag) => (
									<span key={tag} className="meld-image-card__tag">
										{tag}
									</span>
								))
							) : (
								<span
									style={{
										color: "var(--meld-text-secondary)",
									}}
								>
									-
								</span>
							)}
						</div>
					</div>
				)}

				{(state.settings["sidebar.show_user_notes"] === "always" ||
					(state.settings["sidebar.show_user_notes"] === "if_present" && image.user_notes)) && (
					<div className="meld-image-card__meta-item meld-image-card__meta-item--notes">
						<div className="meld-image-card__meta-label">
							Notes
							{saveStatus === "saving" && <span className="meld-notes__status">Saving...</span>}
						</div>
						<div
							className="meld-image-card__meta-content"
							onClick={(e) => {
								e.stopPropagation();
								handleEditNotes();
							}}
						>
							<div className="meld-image-card__notes-preview">
								{image.user_notes || <span className="meld-notes__placeholder">Add notes...</span>}
							</div>
						</div>
					</div>
				)}
			</div>

			<ImageCardMenu
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				menuRef={menuRef}
				settings={state.settings}
				onAddUnifiedLoader={handleAddUnifiedLoader}
				onRestoreWorkflow={handleRestoreWorkflow}
				onSendToWorkflow={handleSendToWorkflow}
				onRunWithWorkflow={handleRunWithWorkflow}
				onRunWithMask={(mode) => handleRunWithMask(mode)}
				onEditSource={handleEditSource}
				onEditTags={handleEditTags}
				onEditNotes={handleEditNotes}
				onRestore={handleRestore}
				showRestore={state.viewScope === "trash"}
				onDelete={handleDelete}
				deleteLabel={state.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"}
			/>

			{popupContent && (
				<PromptPopup
					title={popupContent.title}
					text={popupContent.text}
					onClose={() => setPopupContent(null)}
					onCopy={(text) => handleCopy(text, "", true)}
					isCopied={popupCopied}
				/>
			)}
		</div>
	);
});

DetailedImageCard.displayName = "DetailedImageCard";
