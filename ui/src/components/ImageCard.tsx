import type React from "react";
import { useGallery } from "../store/GalleryContext";
import type { MeldImage } from "../types";

interface ImageCardProps {
    image: MeldImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    const { state, dispatch } = useGallery();
    const isSelected = state.selectedIds.has(image.id);

    const fullFilename = image.subfolder ? `${image.subfolder}/${image.filename}` : image.filename;
    const imgSrc = `/api/view?filename=${encodeURIComponent(image.filename)}&type=${image.type || "output"}${
        image.subfolder ? `&subfolder=${encodeURIComponent(image.subfolder)}` : ""
    }`;

    const handleClick = (e: React.MouseEvent) => {
        // Selection mode if Ctrl/Meta key is pressed or something is already selected
        if (e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
            e.preventDefault();
            e.stopPropagation();
            dispatch({ type: "TOGGLE_SELECT", payload: image.id });
        } else {
            // Open image in viewer instead of new tab
            dispatch({ type: "OPEN_VIEWER", payload: image.id });
        }
    };

    const handleContainerClick = (_e: React.MouseEvent) => {
        // Always toggle selection when clicking the entire card (maintain existing behavior)
        dispatch({ type: "TOGGLE_SELECT", payload: image.id });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            dispatch({ type: "TOGGLE_SELECT", payload: image.id });
        }
    };

    return (
        // biome-ignore lint/a11y/useSemanticElements: Image card is a complex interactive element
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
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.stopPropagation();
                            e.preventDefault();
                            handleClick(e as unknown as React.MouseEvent);
                        }
                    }}
                />
            </div>
            <div className="meld-image-card__details">
                <div className="meld-image-card__filename">{fullFilename}</div>

                <div className="meld-image-card__meta-label">Positive</div>
                <div className="meld-image-card__meta-content">{image.positive || "-"}</div>

                <div className="meld-image-card__meta-label">Negative</div>
                <div className="meld-image-card__meta-content" style={{ maxHeight: "40px" }}>
                    {image.negative || "-"}
                </div>

                <div className="meld-image-card__meta-label">Tags</div>
                <div className="meld-image-card__tags">
                    {image.tags && image.tags.length > 0 ? (
                        image.tags.map((tag, i) => {
                            return (
                                <span
                                    // biome-ignore lint/suspicious/noArrayIndexKey: tags don't have unique IDs
                                    key={`${tag}-${i}`}
                                    className="meld-image-card__tag"
                                >
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
    );
};
