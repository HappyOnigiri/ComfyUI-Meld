import React from "react";
import { ImageCardMenu } from "../../features/viewer/components/ImageCardMenu";
import { useImageCardLogic } from "../../features/viewer/hooks/useImageCardLogic";
import type { MeldImage } from "../../types";

interface SimpleImageCardProps {
	image: MeldImage;
}

export const SimpleImageCard: React.FC<SimpleImageCardProps> = React.memo(
	({ image }) => {
		const {
			isSelected,
			imgSrc,
			handleContainerClick,
			handleMouseDown,
			handleKeyDown,
			handleClick,
			handleSelectToggle,
			isMenuOpen,
			setIsMenuOpen,
			menuRef,
			state,
			handleAddUnifiedLoader,
			handleRestoreWorkflow,
			handleSendToWorkflow,
			handleRunWithWorkflow,
			handleRunWithMask,
			handleEditSource,
			handleEditTags,
			handleEditNotes,
			handleDelete,
			handleRestore,
		} = useImageCardLogic(image);

		const showRestore = state.viewScope === "trash";
		const deleteLabel = showRestore ? "Delete Permanently" : "Move to Trash";

		return (
			<div
				className={`meld-image-card meld-image-card--grid-only ${isSelected ? "meld-image-card--selected" : ""} ${isMenuOpen ? "meld-image-card--menu-open" : ""}`}
				onClick={handleContainerClick}
				onMouseDown={handleMouseDown}
				onKeyDown={handleKeyDown}
				role="button"
				tabIndex={0}
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
								width="10"
								height="10"
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
						width={image.width || undefined}
						height={image.height || undefined}
						onMouseDown={handleMouseDown}
						onClick={(e) => {
							e.stopPropagation();
							handleClick(e);
						}}
					/>
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
					onRunWithMask={handleRunWithMask}
					onEditSource={handleEditSource}
					onEditTags={handleEditTags}
					onEditNotes={handleEditNotes}
					onDelete={handleDelete}
					onRestore={handleRestore}
					showRestore={showRestore}
					deleteLabel={deleteLabel}
					showQuickShortcuts={false}
					variant="thumbnail_overlay_top_right"
				/>
			</div>
		);
	},
);

SimpleImageCard.displayName = "SimpleImageCard";
