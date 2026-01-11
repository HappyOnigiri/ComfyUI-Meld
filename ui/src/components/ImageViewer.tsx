import { ChevronLeft, ChevronRight, Maximize, Minimize, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { useGallery } from "../store/GalleryContext";

export const ImageViewer: React.FC = () => {
    const { state, dispatch } = useGallery();
    const { viewerImageId, images } = state;
    const [isFullscreen, setIsFullscreen] = useState(false);

    const image = images.find((img) => img.id === viewerImageId);

    const toggleFullscreen = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
        if (e && "stopPropagation" in e) {
            e.stopPropagation();
        }
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (viewerImageId === null) return;

            if (e.key === "Escape") {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    dispatch({ type: "CLOSE_VIEWER" });
                }
            } else if (e.key === "ArrowRight") {
                dispatch({ type: "NEXT_IMAGE" });
            } else if (e.key === "ArrowLeft") {
                dispatch({ type: "PREVIOUS_IMAGE" });
            } else if (e.key === "f" || e.key === "F") {
                toggleFullscreen(e);
            }
        };

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        window.addEventListener("keydown", handleKeyDown);
        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, [viewerImageId, dispatch, toggleFullscreen]);

    // Cleanup: Exit fullscreen when closing viewer
    useEffect(() => {
        return () => {
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(() => {});
            }
        };
    }, []);

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
            <div
                className={`meld-viewer-content ${isFullscreen ? "meld-viewer-content--fullscreen" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="meld-viewer-actions">
                    <button
                        className="meld-viewer-action-btn"
                        onClick={toggleFullscreen}
                        type="button"
                        title={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
                    >
                        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                    </button>
                    <button
                        className="meld-viewer-action-btn meld-viewer-action-btn--close"
                        onClick={() => dispatch({ type: "CLOSE_VIEWER" })}
                        type="button"
                        title="Close (Esc)"
                    >
                        <X size={20} />
                    </button>
                </div>

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
