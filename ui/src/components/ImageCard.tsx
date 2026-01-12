import { MoreVertical, PlusCircle, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
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
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	const getParentChain = (
		img: MeldImage,
		depth = 0,
	): { id: number | null; imgSrc: string | null }[] => {
		if (depth >= 5) return [];

		const pId = img.parent_id;
		if (!pId && !img.parent_filename) return [];

		const parentInState = pId ? state.images.find((p) => p.id === pId) : null;

		let imgSrc: string | null = null;
		if (parentInState) {
			imgSrc = `/api/view?filename=${encodeURIComponent(parentInState.filename)}&type=${
				parentInState.type || "output"
			}${
				parentInState.subfolder
					? `&subfolder=${encodeURIComponent(parentInState.subfolder)}`
					: ""
			}`;
		} else if (pId && img.parent_filename) {
			imgSrc = `/api/view?filename=${encodeURIComponent(img.parent_filename)}&type=${
				img.parent_type || "output"
			}${
				img.parent_subfolder
					? `&subfolder=${encodeURIComponent(img.parent_subfolder)}`
					: ""
			}`;
		}

		if (!imgSrc && !parentInState) return [];

		const currentParent = {
			id: pId || null,
			imgSrc,
		};

		if (parentInState) {
			return [currentParent, ...getParentChain(parentInState, depth + 1)];
		}
		return [currentParent];
	};

	const parentChain = getParentChain(image);

	const fullFilename = image.subfolder
		? `${image.subfolder}/${image.filename}`
		: image.filename;
	const imgSrc = `/api/view?filename=${encodeURIComponent(image.filename)}&type=${image.type || "output"}${
		image.subfolder ? `&subfolder=${encodeURIComponent(image.subfolder)}` : ""
	}`;

	const handleClick = (e: React.MouseEvent) => {
		if (e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "SELECT_RANGE", payload: image.id });
		} else if (e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		} else {
			dispatch({ type: "OPEN_VIEWER", payload: image.id });
		}
	};

	const handleContainerClick = (e: React.MouseEvent) => {
		if (e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "SELECT_RANGE", payload: image.id });
		} else {
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		}
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		if (e.shiftKey || e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
		}
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
			onMouseDown={handleMouseDown}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
		>
			<div className="meld-image-card__menu-container" ref={menuRef}>
				<button
					type="button"
					className="meld-image-card__menu-btn"
					onClick={(e) => {
						e.stopPropagation();
						setIsMenuOpen(!isMenuOpen);
					}}
					title="Menu"
				>
					<MoreVertical size={16} />
				</button>
				{isMenuOpen && (
					<div className="meld-image-card__menu">
						<div
							className="meld-image-card__menu-item"
							onClick={(e) => {
								e.stopPropagation();
								dispatch({
									type: "OPEN_MODAL",
									payload: { type: "parent_selection", imageId: image.id },
								});
								setIsMenuOpen(false);
							}}
						>
							<PlusCircle size={14} />
							<span>Add source image</span>
						</div>
					</div>
				)}
			</div>
			<div className="meld-image-card__thumbnail-wrapper">
				<img
					src={imgSrc}
					className="meld-image-card__thumbnail"
					alt={image.filename}
					loading="lazy"
					onMouseDown={handleMouseDown}
					onClick={(e) => {
						e.stopPropagation();
						handleClick(e);
					}}
				/>
			</div>
			<div className="meld-image-card__details">
				<div className="meld-image-card__filename">{fullFilename}</div>

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
												onClick={(e) => {
													e.stopPropagation();
													dispatch({
														type: "OPEN_VIEWER",
														payload: { id: p.id || image.id, mode: "lineage" },
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

				<div
					className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
					onClick={(e) => {
						e.stopPropagation();
						setPopupContent({
							title: "Positive Prompt",
							text: image.positive_prompt || image.positive || "-",
						});
					}}
				>
					<div className="meld-image-card__meta-label">Positive</div>
					<div className="meld-image-card__meta-content">
						{image.positive_prompt || image.positive || "-"}
					</div>
				</div>

				<div
					className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
					onClick={(e) => {
						e.stopPropagation();
						setPopupContent({
							title: "Negative Prompt",
							text: image.negative_prompt || image.negative || "-",
						});
					}}
				>
					<div className="meld-image-card__meta-label">Negative</div>
					<div className="meld-image-card__meta-content">
						{image.negative_prompt || image.negative || "-"}
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
