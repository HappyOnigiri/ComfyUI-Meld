import { X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";
import type { MeldImage } from "../types";

interface ImageCardProps {
    image: MeldImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    const { state, dispatch } = useGallery();
    const isSelected = state.selectedIds.has(image.id);
    const [popupContent, setPopupContent] = useState<{ title: string; text: string } | null>(null);
    const [relatedImages, setRelatedImages] = useState<
        { id: number; filename: string; subfolder: string; type: string; distance: number }[]
    >([]);

    useEffect(() => {
        if (image.id) {
            api.fetchRelatedImages(image.id).then((imgs) => setRelatedImages(imgs.slice(0, 10)));
        }
    }, [image.id]);

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

                {/* biome-ignore lint/a11y/useKeyWithClickEvents: Meta items are secondary interactive elements */}
                {/* biome-ignore lint/a11y/noStaticElementInteractions: Meta items are secondary interactive elements */}
                <div
                    className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
                    onClick={(e) => {
                        e.stopPropagation();
                        setPopupContent({ title: "Positive Prompt", text: image.positive || "-" });
                    }}
                >
                    <div className="meld-image-card__meta-label">Positive</div>
                    <div className="meld-image-card__meta-content">{image.positive || "-"}</div>
                </div>

                {/* biome-ignore lint/a11y/useKeyWithClickEvents: Meta items are secondary interactive elements */}
                {/* biome-ignore lint/a11y/noStaticElementInteractions: Meta items are secondary interactive elements */}
                <div
                    className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
                    onClick={(e) => {
                        e.stopPropagation();
                        setPopupContent({ title: "Negative Prompt", text: image.negative || "-" });
                    }}
                >
                    <div className="meld-image-card__meta-label">Negative</div>
                    <div className="meld-image-card__meta-content">{image.negative || "-"}</div>
                </div>

                <div className="meld-image-card__meta-item">
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

                {relatedImages.length > 0 && (
                    <div className="meld-image-card__related">
                        {relatedImages.map((rel) => {
                            const relSrc = `/api/view?filename=${encodeURIComponent(rel.filename)}&type=${
                                rel.type || "output"
                            }${rel.subfolder ? `&subfolder=${encodeURIComponent(rel.subfolder)}` : ""}`;
                            return (
                                // biome-ignore lint/a11y/useKeyWithClickEvents: Related image thumbnails are secondary navigation
                                <img
                                    key={rel.id}
                                    src={relSrc}
                                    className="meld-image-card__related-thumb"
                                    alt={rel.filename}
                                    title={`Similarity: ${Math.round(
                                        ((64 - rel.distance) / 64) * 100,
                                    )}%`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch({ type: "OPEN_VIEWER", payload: rel.id });
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {popupContent && (
                // biome-ignore lint/a11y/useKeyWithClickEvents: Overlay backdrop
                // biome-ignore lint/a11y/noStaticElementInteractions: Overlay backdrop
                <div
                    className="meld-prompt-popup-overlay"
                    onClick={(e) => {
                        e.stopPropagation();
                        setPopupContent(null);
                    }}
                >
                    {/* biome-ignore lint/a11y/noStaticElementInteractions: Stop propagation */}
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: Stop propagation */}
                    <div className="meld-prompt-popup-content" onClick={(e) => e.stopPropagation()}>
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
