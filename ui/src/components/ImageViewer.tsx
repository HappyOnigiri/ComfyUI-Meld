import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type React from "react";
import { useEffect } from "react";
import { useGallery } from "../store/GalleryContext";

export const ImageViewer: React.FC = () => {
    const { state, dispatch } = useGallery();
    const { viewerImageId, images } = state;

    const image = images.find((img) => img.id === viewerImageId);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (viewerImageId === null) return;

            if (e.key === "Escape") {
                dispatch({ type: "CLOSE_VIEWER" });
            } else if (e.key === "ArrowRight") {
                dispatch({ type: "NEXT_IMAGE" });
            } else if (e.key === "ArrowLeft") {
                dispatch({ type: "PREVIOUS_IMAGE" });
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [viewerImageId, dispatch]);

    if (!image) return null;

    const imgSrc = `/api/view?filename=${encodeURIComponent(image.filename)}&type=${image.type || "output"}${
        image.subfolder ? `&subfolder=${encodeURIComponent(image.subfolder)}` : ""
    }`;

    return (
        // biome-ignore lint/a11y/useSemanticElements: Overlay backdrop
        // biome-ignore lint/a11y/useKeyWithClickEvents: Backdrop click to close
        <div
            className="meld-viewer-overlay"
            onClick={() => dispatch({ type: "CLOSE_VIEWER" })}
            role="button"
            tabIndex={0}
        >
            {/* biome-ignore lint/a11y/noStaticElementInteractions: Stop propagation to prevent closing */}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: Stop propagation */}
            <div className="meld-viewer-content" onClick={(e) => e.stopPropagation()}>
                <button
                    className="meld-viewer-close"
                    onClick={() => dispatch({ type: "CLOSE_VIEWER" })}
                    type="button"
                >
                    <X size={24} />
                </button>

                <button
                    className="meld-viewer-nav meld-viewer-nav--prev"
                    onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}
                    type="button"
                >
                    <ChevronLeft size={32} />
                </button>

                <div className="meld-viewer-image-container">
                    <img src={imgSrc} alt={image.filename} className="meld-viewer-image" />
                    <div className="meld-viewer-info">
                        <div className="meld-viewer-filename">{image.filename}</div>
                    </div>
                </div>

                <button
                    className="meld-viewer-nav meld-viewer-nav--next"
                    onClick={() => dispatch({ type: "NEXT_IMAGE" })}
                    type="button"
                >
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>
    );
};
