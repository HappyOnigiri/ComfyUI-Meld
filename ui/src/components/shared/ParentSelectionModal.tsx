import { Link, Link2Off, Upload, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as imagesApi from "../../features/images/api/imagesApi";
import * as importerApi from "../../features/importer/api/importerApi";
import { useEscapeToClose } from "../../hooks/useEscapeToClose";
import { logger } from "../../logger";
import { useGallery } from "../../store/GalleryContext";
import { getThumbnailViewUrl } from "../../utils/url";

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

	const handleClose = useCallback(() => {
		dispatch({ type: "CLOSE_MODAL" });
	}, [dispatch]);

	useEscapeToClose({ onEscape: handleClose });

	const overlayMouseDownRef = useRef(false);

	const handleOverlayMouseDown = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	};

	const handleOverlayMouseUp = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget && overlayMouseDownRef.current) {
			handleClose();
		}
		overlayMouseDownRef.current = false;
	};

	const image = state.images.find((img) => img.id === imageId);

	const loadSuggestions = useCallback(async () => {
		setIsLoading(true);
		try {
			const threshold = state.settings["gallery.suggest_phash_threshold"];
			const results = await imagesApi.suggestParents(imageId, threshold);
			setSuggestions(results);
		} catch (err) {
			logger.error("Failed to load suggestions:", err);
		} finally {
			setIsLoading(false);
		}
	}, [imageId, state.settings]);

	useEffect(() => {
		loadSuggestions();
	}, [loadSuggestions]);

	const handleSelect = async (parentId: number) => {
		if (parentId === undefined || parentId === null) {
			logger.error("handleSelect: parentId is undefined or null");
			return;
		}
		if (!image || parentId === image.parent_id) {
			return;
		}

		if (image.parent_id && !confirm("Are you sure you want to change the source image?")) {
			return;
		}

		try {
			await imagesApi.linkParent(imageId, parentId);
			// Re-fetch child image details to ensure UI has latest parent info
			await imagesApi.fetchImageDetails(imageId);
			await refreshImages();
			handleClose();
		} catch (err) {
			logger.error("Failed to link parent:", err);
		}
	};

	const handleRemove = async () => {
		if (!confirm("Are you sure you want to remove the source image relationship?")) {
			return;
		}
		try {
			await imagesApi.linkParent(imageId, null);
			await refreshImages();
			handleClose();
		} catch (err) {
			logger.error("Failed to remove source:", err);
			alert("Failed to remove source image.");
		}
	};

	const handleFileUpload = async (file: File) => {
		setIsLoading(true);
		try {
			// 1. Upload file to ComfyUI
			const uploaded = await importerApi.uploadImage(file);
			// 2. Register it in Meld
			const { id } = await imagesApi.registerImage({
				filename: uploaded.name,
				subfolder: uploaded.subfolder || "",
				type: uploaded.type || "input",
			});
			// 3. Link it immediately as the parent
			if (id === imageId) {
				alert("Uploaded image is identical to the current image. Cannot set as source.");
				return;
			}
			await handleSelect(id);
		} catch (err) {
			logger.error("Failed to upload/register image:", err);
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
			onMouseDown={handleOverlayMouseDown}
			onMouseUp={handleOverlayMouseUp}
		>
			<div className="meld-modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="meld-modal-header">
					<h2>Select Source for #{image.id}</h2>
					<button type="button" className="meld-modal-close" onClick={handleClose}>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					{image.parent_id && (
						<div
							style={{
								marginBottom: "16px",
								padding: "12px",
								backgroundColor: "var(--comfy-input-bg, rgba(0, 0, 0, 0.1))",
								borderRadius: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								border: "1px solid var(--meld-border-color, #444)",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "12px",
									minWidth: 0,
								}}
							>
								<Link size={16} color="var(--meld-accent-color)" />
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "4px",
										minWidth: 0,
									}}
								>
									<span
										style={{
											fontSize: "0.8em",
											color: "var(--meld-text-secondary)",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
										}}
									>
										Current Source
									</span>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											gap: "10px",
											minWidth: 0,
										}}
									>
										{image.parent_filename && (
											<img
												src={getThumbnailViewUrl(
													{
														filename: image.parent_filename,
														subfolder: image.parent_subfolder || "",
														type: image.parent_type || "output",
													},
													64,
												)}
												alt="Current Source"
												style={{
													width: "40px",
													height: "40px",
													objectFit: "cover",
													borderRadius: "4px",
													border: "1px solid var(--meld-border-color)",
												}}
											/>
										)}
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												minWidth: 0,
											}}
										>
											<span
												style={{
													fontWeight: "bold",
													fontSize: "0.95em",
													whiteSpace: "nowrap",
													overflow: "hidden",
													textOverflow: "ellipsis",
												}}
											>
												{image.parent_filename || "Unknown Image"}
											</span>
											<span
												style={{
													color: "var(--meld-text-secondary)",
													fontSize: "0.85em",
												}}
											>
												#{image.parent_id}
											</span>
										</div>
									</div>
								</div>
							</div>
							<button
								type="button"
								className="meld-btn meld-btn--danger meld-btn--sm"
								style={{
									flexShrink: 0,
									width: "32px",
									height: "32px",
									padding: 0,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									borderRadius: "50%",
								}}
								onClick={handleRemove}
								title="Remove Source"
							>
								<Link2Off size={16} />
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
										{sourceMatches.map((sug) => {
											const isCurrent = sug.id === image.parent_id;
											return (
												<div
													key={sug.id}
													className={`meld-suggestion-card ${isCurrent ? "meld-suggestion-card--current" : ""}`}
													onClick={() => !isCurrent && handleSelect(sug.id)}
													style={{
														cursor: isCurrent ? "default" : "pointer",
														...(isCurrent
															? {
																	borderColor: "var(--meld-accent-color)",
																	boxShadow: "0 0 0 2px var(--meld-accent-color)",
																}
															: {}),
													}}
												>
													<img src={getThumbnailViewUrl(sug, 64)} alt={sug.filename} />
													<div className="meld-suggestion-info">
														<span className="meld-suggestion-filename">{sug.filename}</span>
														{isCurrent && (
															<span
																style={{
																	fontSize: "8px",
																	color: "var(--meld-accent-color)",
																	fontWeight: "bold",
																	marginTop: "2px",
																}}
															>
																CURRENT SOURCE
															</span>
														)}
													</div>
												</div>
											);
										})}
									</div>
								</section>
							)}

							<section>
								<h3>Visual Matches (pHash)</h3>
								{visualMatches.length > 0 ? (
									<div className="meld-suggestion-grid">
										{visualMatches.map((sug) => {
											const isCurrent = sug.id === image.parent_id;
											return (
												<div
													key={sug.id}
													className={`meld-suggestion-card ${isCurrent ? "meld-suggestion-card--current" : ""}`}
													onClick={() => !isCurrent && handleSelect(sug.id)}
													style={{
														cursor: isCurrent ? "default" : "pointer",
														...(isCurrent
															? {
																	borderColor: "var(--meld-accent-color)",
																	boxShadow: "0 0 0 2px var(--meld-accent-color)",
																}
															: {}),
													}}
												>
													<img src={getThumbnailViewUrl(sug, 64)} alt={sug.filename} />
													<div className="meld-suggestion-info">
														<span className="meld-suggestion-filename">{sug.filename}</span>
														<div
															style={{
																display: "flex",
																justifyContent: "space-between",
																alignItems: "center",
																marginTop: "2px",
															}}
														>
															<span className="meld-suggestion-distance">
																Match: {Math.round(((64 - sug.distance) / 64) * 100)}%
															</span>
															{isCurrent && (
																<span
																	style={{
																		fontSize: "8px",
																		color: "var(--meld-accent-color)",
																		fontWeight: "bold",
																	}}
																>
																	CURRENT
																</span>
															)}
														</div>
													</div>
												</div>
											);
										})}
									</div>
								) : (
									<p className="meld-no-suggestions">No visual matches found.</p>
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
