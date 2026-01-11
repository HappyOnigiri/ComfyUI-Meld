import { GitBranch, PlusCircle, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useGallery } from "../store/GalleryContext";
import type { MeldImage } from "../types";

interface ImageCardProps {
	image: MeldImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
	const { state, dispatch } = useGallery();
	const isSelected = state.selectedIds.has(image.id);
	const [popupContent, setPopupContent] = useState<{
		title: string;
		text: string;
	} | null>(null);

	const parentImage = image.parent_id
		? state.images.find((img) => img.id === image.parent_id)
		: null;
	const parentImgSrc = parentImage
		? `/api/view?filename=${encodeURIComponent(parentImage.filename)}&type=${
				parentImage.type || "output"
			}${
				parentImage.subfolder
					? `&subfolder=${encodeURIComponent(parentImage.subfolder)}`
					: ""
			}`
		: null;

	const fullFilename = image.subfolder
		? `${image.subfolder}/${image.filename}`
		: image.filename;
	const imgSrc = `/api/view?filename=${encodeURIComponent(image.filename)}&type=${image.type || "output"}${
		image.subfolder ? `&subfolder=${encodeURIComponent(image.subfolder)}` : ""
	}`;

	const handleClick = (e: React.MouseEvent) => {
		if (e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		} else {
			dispatch({ type: "OPEN_VIEWER", payload: image.id });
		}
	};

	const handleContainerClick = (_e: React.MouseEvent) => {
		dispatch({ type: "TOGGLE_SELECT", payload: image.id });
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		}
	};

	return (
		<div
			className={`meld-image-card ${isSelected ? "meld-image-card--selected" : ""}`}
			onClick={handleContainerClick}
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
					onClick={(e) => {
						e.stopPropagation();
						handleClick(e);
					}}
				/>
			</div>
			<div className="meld-image-card__details">
				<div className="meld-image-card__filename">{fullFilename}</div>

				<div className="meld-image-card__lineage-v2">
					{image.parent_id ? (
						<div
							className="meld-lineage-badge meld-lineage-badge--has-parent"
							onClick={(e) => {
								e.stopPropagation();
								dispatch({
									type: "OPEN_VIEWER",
									payload: { id: image.id, mode: "lineage" },
								});
							}}
						>
							<GitBranch size={12} />
							{parentImgSrc && (
								<img
									src={parentImgSrc}
									className="meld-lineage-badge__parent-thumb"
									alt="parent thumb"
								/>
							)}
							<span>Parent</span>
						</div>
					) : (
						<div
							className="meld-lineage-badge meld-lineage-badge--no-parent"
							onClick={(e) => {
								e.stopPropagation();
								dispatch({
									type: "OPEN_MODAL",
									payload: { type: "parent_selection", imageId: image.id },
								});
							}}
						>
							<PlusCircle size={12} />
							<span>Origin (No parent)</span>
						</div>
					)}
				</div>

				<div
					className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
					onClick={(e) => {
						e.stopPropagation();
						setPopupContent({
							title: "Positive Prompt",
							text: image.positive || "-",
						});
					}}
				>
					<div className="meld-image-card__meta-label">Positive</div>
					<div className="meld-image-card__meta-content">
						{image.positive || "-"}
					</div>
				</div>

				<div
					className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
					onClick={(e) => {
						e.stopPropagation();
						setPopupContent({
							title: "Negative Prompt",
							text: image.negative || "-",
						});
					}}
				>
					<div className="meld-image-card__meta-label">Negative</div>
					<div className="meld-image-card__meta-content">
						{image.negative || "-"}
					</div>
				</div>

				<div className="meld-image-card__meta-item">
					<div className="meld-image-card__meta-label">Tags</div>
					<div className="meld-image-card__tags">
						{image.tags && image.tags.length > 0 ? (
							image.tags.map((tag, i) => {
								return (
									<span key={`${tag}-${i}`} className="meld-image-card__tag">
										{tag}
									</span>
								);
							})
						) : (
							<span style={{ color: "#666" }}>-</span>
						)}
					</div>
				</div>
			</div>

			{popupContent && (
				<div
					className="meld-prompt-popup-overlay"
					onClick={(e) => {
						e.stopPropagation();
						setPopupContent(null);
					}}
				>
					<div
						className="meld-prompt-popup-content"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="meld-prompt-popup-header">
							<span>{popupContent.title}</span>
							<X
								className="meld-prompt-popup-close"
								size={18}
								onClick={() => setPopupContent(null)}
							/>
						</div>
						<div className="meld-prompt-popup-text">{popupContent.text}</div>
					</div>
				</div>
			)}
		</div>
	);
};
