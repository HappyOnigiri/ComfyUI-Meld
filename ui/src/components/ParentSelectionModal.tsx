import { Upload, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";

interface Suggestion {
    id: number;
    filename: string;
    subfolder: string;
    type: string;
    distance: number;
    created_at: number;
    is_source_match: boolean;
}

interface ParentSelectionModalProps {
    imageId: number;
}

export const ParentSelectionModal: React.FC<ParentSelectionModalProps> = ({ imageId }) => {
    const { state, dispatch, refreshImages } = useGallery();
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDragging, setIsDragging] = useState(false);

    const image = state.images.find((img) => img.id === imageId);

    const loadSuggestions = useCallback(async () => {
        setIsLoading(true);
        try {
            const results = await api.suggestParents(imageId);
            setSuggestions(results);
        } catch (err) {
            console.error("Failed to load suggestions:", err);
        } finally {
            setIsLoading(false);
        }
    }, [imageId]);

    useEffect(() => {
        loadSuggestions();
    }, [loadSuggestions]);

    const handleSelect = async (parentId: number) => {
        try {
            await api.linkParent(imageId, parentId);
            await refreshImages();
            dispatch({ type: "CLOSE_MODAL" });
        } catch (err) {
            console.error("Failed to link parent:", err);
        }
    };

    const handleFileUpload = async (file: File) => {
        setIsLoading(true);
        try {
            // 1. Upload file to ComfyUI
            const uploaded = await api.uploadImage(file);
            // 2. Register it in Meld Nexus
            await api.registerImage({
                filename: uploaded.name,
                subfolder: uploaded.subfolder || "",
                type: uploaded.type || "input",
            });
            // 3. Refresh suggestions to see the new image
            await loadSuggestions();
        } catch (err) {
            console.error("Failed to upload/register image:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file?.type.startsWith("image/")) {
            handleFileUpload(file);
        }
    };

    if (!image) return null;

    const sourceMatches = suggestions.filter((s) => s.is_source_match);
    const visualMatches = suggestions.filter((s) => !s.is_source_match);

    return (
        // biome-ignore lint/a11y/useKeyWithClickEvents: Modal overlay
        // biome-ignore lint/a11y/noStaticElementInteractions: Modal overlay
        <div className="meld-modal-overlay" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: Modal content stopPropagation */}
            {/* biome-ignore lint/a11y/noStaticElementInteractions: Modal content stopPropagation */}
            <div className="meld-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="meld-modal-header">
                    <h2>Select Parent for #{image.id}</h2>
                    <button
                        type="button"
                        className="meld-modal-close"
                        onClick={() => dispatch({ type: "CLOSE_MODAL" })}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="meld-modal-body">
                    {/* biome-ignore lint/a11y/noStaticElementInteractions: Drop zone */}
                    <div
                        className={`meld-drop-zone ${isDragging ? "meld-drop-zone--active" : ""}`}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                    >
                        <Upload size={32} />
                        <p>Drop an image file here to add it as a candidate</p>
                    </div>

                    {isLoading ? (
                        <div className="meld-modal-loading">Loading suggestions...</div>
                    ) : (
                        <div className="meld-suggestions-container">
                            {sourceMatches.length > 0 && (
                                <section>
                                    <h3>Source Matches (from metadata)</h3>
                                    <div className="meld-suggestion-grid">
                                        {sourceMatches.map((sug) => (
                                            // biome-ignore lint/a11y/useKeyWithClickEvents: suggestion card
                                            // biome-ignore lint/a11y/noStaticElementInteractions: suggestion card
                                            <div
                                                key={sug.id}
                                                className="meld-suggestion-card"
                                                onClick={() => handleSelect(sug.id)}
                                            >
                                                <img
                                                    src={`/api/view?filename=${encodeURIComponent(sug.filename)}&type=${sug.type || "output"}${sug.subfolder ? `&subfolder=${encodeURIComponent(sug.subfolder)}` : ""}`}
                                                    alt={sug.filename}
                                                />
                                                <div className="meld-suggestion-info">
                                                    <span className="meld-suggestion-filename">
                                                        {sug.filename}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            <section>
                                <h3>Visual Matches (pHash)</h3>
                                {visualMatches.length > 0 ? (
                                    <div className="meld-suggestion-grid">
                                        {visualMatches.map((sug) => (
                                            // biome-ignore lint/a11y/useKeyWithClickEvents: suggestion card
                                            // biome-ignore lint/a11y/noStaticElementInteractions: suggestion card
                                            <div
                                                key={sug.id}
                                                className="meld-suggestion-card"
                                                onClick={() => handleSelect(sug.id)}
                                            >
                                                <img
                                                    src={`/api/view?filename=${encodeURIComponent(sug.filename)}&type=${sug.type || "output"}${sug.subfolder ? `&subfolder=${encodeURIComponent(sug.subfolder)}` : ""}`}
                                                    alt={sug.filename}
                                                />
                                                <div className="meld-suggestion-info">
                                                    <span className="meld-suggestion-filename">
                                                        {sug.filename}
                                                    </span>
                                                    <span className="meld-suggestion-distance">
                                                        Match:{" "}
                                                        {Math.round(
                                                            ((64 - sug.distance) / 64) * 100,
                                                        )}
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="meld-no-suggestions">No visual matches found.</p>
                                )}
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
