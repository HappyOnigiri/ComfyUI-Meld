import React from "react";
import { useImageCardLogic } from "../../features/viewer/hooks/useImageCardLogic";
import type { MeldImage } from "../../types";

interface SimpleImageCardProps {
	image: MeldImage;
}

export const SimpleImageCard: React.FC<SimpleImageCardProps> = React.memo(
	({ image }) => {
		const {
			state,
			isSelected,
			imgSrc,
			handleContainerClick,
			handleMouseDown,
			handleKeyDown,
			handleClick,
		} = useImageCardLogic(image);

		const imageFit = state.settings["sidebar.image_fit"] || "cover";

		return (
			<div
				className={`meld-image-card meld-image-card--grid-only ${isSelected ? "meld-image-card--selected" : ""}`}
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
						style={{ objectFit: imageFit }}
						alt={image.filename}
						loading="lazy"
						onMouseDown={handleMouseDown}
						onClick={(e) => {
							e.stopPropagation();
							handleClick(e);
						}}
					/>
				</div>
			</div>
		);
	},
);

SimpleImageCard.displayName = "SimpleImageCard";
