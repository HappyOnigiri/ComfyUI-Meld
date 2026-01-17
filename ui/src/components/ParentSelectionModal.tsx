import { Link2Off, Upload, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";
import { getImageViewUrl } from "../utils/url";

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

export const ParentSelectionModal: React.FC<ParentSelectionModalProps> = ({
	imageId,
}) => {
	const { state, dispatch, refreshImages } = useGallery();
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isDragging, setIsDragging] = useState(false);

	const image = state.images.find((img) => img.id === imageId);

	const loadSuggestions = useCallback(async () => {
		setIsLoading(true);
		try {
			const threshold = state.settings["gallery.suggest_phash_threshold"];
			const results = await api.suggestParents(imageId, threshold);
			setSuggestions(results);
		} catch (err) {
			console.error("Failed to load suggestions:", err);
		} finally {
			setIsLoading(false);
		}
	}, [imageId, state.settings]);

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

	const handleRemove = async () => {
		if (
			!confirm("Are you sure you want to remove the source image relationship?")
		) {
			return;
		}
		try {
			await api.linkParent(imageId, null);
			await refreshImages();
			dispatch({ type: "CLOSE_MODAL" });
		} catch (err) {
			console.error("Failed to remove source:", err);
			alert("Failed to remove source image.");
		}
	};

	const handleFileUpload = async (file: File) => {
		setIsLoading(true);
		try {
			// 1. Upload file to ComfyUI
			const uploaded = await api.uploadImage(file);
			// 2. Register it in Meld
			const { id } = await api.registerImage({
				filename: uploaded.name,
				subfolder: uploaded.subfolder || "",
				type: uploaded.type || "input",
			});
			// 3. Link it immediately as the parent
			await handleSelect(id);
		} catch (err) {
			console.error("Failed to upload/register image:", err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
		const file = e.dataTransfer.files[0];
		if (file?.type.startsWith("image/")) {
			handleFileUpload(file);
		}
	};

	if (!image) return null;

	const sourceMatches = suggestions.filter((s) => s.is_source_match);
	const visualMatches = suggestions.filter((s) => !s.is_source_match);

	return createPortal(
		<div
			className="meld-modal-overlay"
			onClick={() => dispatch({ type: "CLOSE_MODAL" })}
		>
			<div className="meld-modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="meld-modal-header">
					<h2>Select Source for #{image.id}</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={() => dispatch({ type: "CLOSE_MODAL" })}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					{image.parent_id && (
						<div
							style={{
								marginBottom: "16px",
								padding: "12px",
								backgroundColor: "var(--comfy-input-bg, rgba(255, 0, 0, 0.1))",
								borderRadius: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								border: "1px solid var(--meld-danger-color, #ff4444)",
							}}
						>
							<div
								style={{ display: "flex", alignItems: "center", gap: "8px" }}
							>
								<Link2Off size={16} color="var(--meld-danger-color)" />
								<span style={{ fontWeight: "bold" }}>Current Source</span>
								<span
									style={{
										color: "var(--meld-text-secondary)",
										fontSize: "0.9em",
									}}
								>
									#{image.parent_id}
								</span>
							</div>
							<button
								type="button"
								className="meld-btn meld-btn--danger meld-btn--sm"
								onClick={handleRemove}
							>
								Remove Source
							</button>
						</div>
					)}
					<div
						className={`meld-drop-zone ${isDragging ? "meld-drop-zone--active" : ""}`}
						onDragEnter={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsDragging(true);
						}}
						onDragOver={(e) => {
							e.preventDefault();
							e.stopPropagation();
							e.dataTransfer.dropEffect = "copy";
							setIsDragging(true);
						}}
						onDragLeave={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsDragging(false);
						}}
						onDrop={handleDrop}
					>
						<Upload size={32} />
						<p>Drop an image file here to set it as source</p>
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
											<div
												key={sug.id}
												className="meld-suggestion-card"
												onClick={() => handleSelect(sug.id)}
											>
												<img src={getImageViewUrl(sug)} alt={sug.filename} />
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
											<div
												key={sug.id}
												className="meld-suggestion-card"
												onClick={() => handleSelect(sug.id)}
											>
												<img src={getImageViewUrl(sug)} alt={sug.filename} />
												<div className="meld-suggestion-info">
													<span className="meld-suggestion-filename">
														{sug.filename}
													</span>
													<span className="meld-suggestion-distance">
														Match:{" "}
														{Math.round(((64 - sug.distance) / 64) * 100)}%
													</span>
												</div>
											</div>
										))}
									</div>
								) : (
									<p className="meld-no-suggestions">
										No visual matches found.
									</p>
								)}
							</section>
						</div>
					)}
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
