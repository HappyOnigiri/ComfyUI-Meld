import { CheckSquare, RefreshCw, XSquare } from "lucide-react";
import type React from "react";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";
import { BulkActionBar } from "./BulkActionBar";
import { HistoryTreeModal } from "./HistoryTreeModal";
import { ImageCard } from "./ImageCard";
import { ImageViewer } from "./ImageViewer";
import { ParentSelectionModal } from "./ParentSelectionModal";
import "../styles/Gallery.css";

export const GalleryPanel: React.FC = () => {
    const { state, dispatch, refreshImages } = useGallery();
    logger.log("GalleryPanel: rendering", {
        imageCount: state.images.length,
        isLoading: state.isLoading,
        activeModal: state.activeModal.type,
    });

    const handleSelectAllToggle = () => {
        if (state.selectedIds.size > 0) {
            dispatch({ type: "CLEAR_SELECTION" });
        } else {
            dispatch({ type: "SELECT_ALL" });
        }
    };

    return (
        <div className="meld-gallery">
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "10px",
                    gap: "15px",
                }}
            >
                <button
                    type="button"
                    onClick={handleSelectAllToggle}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#888",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                    }}
                    disabled={state.images.length === 0}
                >
                    {state.selectedIds.size > 0 ? (
                        <>
                            <XSquare size={14} />
                            Deselect
                        </>
                    ) : (
                        <>
                            <CheckSquare size={14} />
                            Select All
                        </>
                    )}
                </button>
                <button
                    type="button"
                    onClick={() => refreshImages()}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#888",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                    }}
                    disabled={state.isLoading}
                >
                    <RefreshCw size={14} className={state.isLoading ? "animate-spin" : ""} />
                    Refresh
                </button>
            </div>

            {state.error && <div className="meld-gallery__error">{state.error}</div>}

            {state.isLoading && state.images.length === 0 ? (
                <div className="meld-gallery__loading">Loading images...</div>
            ) : state.images.length === 0 ? (
                <div className="meld-gallery__empty">No images found.</div>
            ) : (
                <div className="meld-gallery__list">
                    {state.images.map((image) => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            )}

            <BulkActionBar />

            {state.viewerImageId !== null && <ImageViewer />}

            {state.activeModal.type === "parent_selection" && (
                <ParentSelectionModal imageId={state.activeModal.imageId} />
            )}
            {state.activeModal.type === "history_tree" && (
                <HistoryTreeModal imageId={state.activeModal.imageId} />
            )}
        </div>
    );
};
