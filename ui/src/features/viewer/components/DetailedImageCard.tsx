import React from "react";
import type { MeldImage } from "../../../types";
import { useImageCardLogic } from "../hooks/useImageCardLogic";
import { ImageCardMenu } from "./ImageCardMenu";
import { PromptPopup } from "./PromptPopup";

interface DetailedImageCardProps {
	image: MeldImage;
}

export const DetailedImageCard: React.FC<DetailedImageCardProps> = React.memo(
	({ image }) => {
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
			handleContainerClick,
			handleMouseDown,
			handleKeyDown,
			handleRestoreWorkflow,
			handleAddUnifiedLoader,
			handleEditSource,
			handleEditTags,
			handleRestore,
			handleDelete,
			handleRunWithWorkflow,
			handleRunWithMask,
			fetchFullImageDetails,
		} = useImageCardLogic(image);

		return (
			<div
				className={`meld-image-card ${isSelected ? "meld-image-card--selected" : ""} ${isMenuOpen ? "meld-image-card--menu-open" : ""}`}
				onClick={handleContainerClick}
				onMouseDown={handleMouseDown}
				onKeyDown={handleKeyDown}
				role="button"
				tabIndex={0}
			>
				<div className="meld-image-card__thumbnail-wrapper">
					<img
						src={imgSrc}
						className="meld-image-card__thumbnail"
						alt={image.filename}
						loading="lazy"
						width={image.width || undefined}
						height={image.height || undefined}
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
							{state.settings["sidebar.show_filename"] !== "none" &&
								displayFilename}
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

					{state.settings["gallery.show_parent_image"] &&
						parentChain.length > 0 && (
							<div className="meld-image-card__lineage-v2">
								<div className="meld-image-card__meta-label">Source</div>
								<div className="meld-lineage-thumbs">
									{parentChain.map(
										(p, index) =>
											p.imgSrc && (
												<img
													key={p.id || index}
													src={p.imgSrc}
													className="meld-lineage-badge__parent-thumb"
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
							<div className="meld-image-card__meta-content">
								{image.model_name || "-"}
							</div>
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
									handleCopy(
										fullImage.positive_prompt || fullImage.positive || "-",
										"Positive",
									);
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
									handleCopy(
										fullImage.negative_prompt || fullImage.negative || "-",
										"Negative",
									);
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
									image.tags.map((tag, i) => {
										return (
											<span
												key={`${tag}-${i}`}
												className="meld-image-card__tag"
											>
												{tag}
											</span>
										);
									})
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
				</div>

				<ImageCardMenu
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
					menuRef={menuRef}
					settings={state.settings}
					onAddUnifiedLoader={handleAddUnifiedLoader}
					onRestoreWorkflow={handleRestoreWorkflow}
					onRunWithWorkflow={handleRunWithWorkflow}
					onRunWithMask={(mode) => handleRunWithMask(mode)}
					onEditSource={handleEditSource}
					onEditTags={handleEditTags}
					onRestore={handleRestore}
					showRestore={state.viewScope === "trash"}
					onDelete={handleDelete}
					deleteLabel={
						state.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
					}
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
	},
);

DetailedImageCard.displayName = "DetailedImageCard";
