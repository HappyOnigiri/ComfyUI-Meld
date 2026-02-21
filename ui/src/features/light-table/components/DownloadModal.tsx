import { Download, X } from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import * as imagesApi from "../../images/api/imagesApi";

interface DownloadModalProps {
	imageIds: number[];
	onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
	imageIds,
	onClose,
}) => {
	const [format, setFormat] = useState<"zip" | "raw">("zip");
	const [removeMetadata, setRemoveMetadata] = useState(false);
	const [isDownloading, setIsDownloading] = useState(false);

	const overlayMouseDownRef = useRef(false);

	const handleOverlayMouseDown = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	};

	const handleOverlayMouseUp = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget && overlayMouseDownRef.current) {
			if (!isDownloading) onClose();
		}
		overlayMouseDownRef.current = false;
	};

	useEscapeToClose({
		onEscape: () => {
			if (!isDownloading) onClose();
		},
	});

	const handleDownload = async () => {
		setIsDownloading(true);
		try {
			if (format === "zip") {
				await imagesApi.downloadZipImages(imageIds, removeMetadata);
			} else {
				for (const id of imageIds) {
					await imagesApi.downloadRawImage(id, removeMetadata);
					// slight delay to let browser process multiple downloads
					await new Promise((r) => setTimeout(r, 200));
				}
			}
			onClose();
		} catch (error) {
			console.error("Download failed:", error);
			alert("Failed to download images.");
		} finally {
			setIsDownloading(false);
		}
	};

	return createPortal(
		<div
			className="meld-modal-overlay"
			onMouseDown={handleOverlayMouseDown}
			onMouseUp={handleOverlayMouseUp}
		>
			<div className="meld-modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="meld-modal-header">
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<Download size={18} />
						<h3 style={{ margin: 0 }}>
							Download ({imageIds.length} image{imageIds.length > 1 ? "s" : ""})
						</h3>
					</div>
					<button
						type="button"
						className="meld-modal-close"
						onClick={onClose}
						disabled={isDownloading}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body" style={{ padding: "20px" }}>
					<div style={{ marginBottom: "20px" }}>
						<label
							htmlFor="download-format"
							style={{
								display: "block",
								marginBottom: "8px",
								fontWeight: "bold",
							}}
						>
							Format
						</label>
						<div style={{ display: "flex", gap: "16px" }}>
							<label
								style={{
									display: "flex",
									alignItems: "center",
									gap: "4px",
									cursor: "pointer",
								}}
							>
								<input
									type="radio"
									name="format"
									value="zip"
									checked={format === "zip"}
									onChange={() => setFormat("zip")}
									disabled={isDownloading}
								/>
								ZIP (Single File)
							</label>
							<label
								style={{
									display: "flex",
									alignItems: "center",
									gap: "4px",
									cursor: "pointer",
								}}
							>
								<input
									type="radio"
									name="format"
									value="raw"
									checked={format === "raw"}
									onChange={() => setFormat("raw")}
									disabled={isDownloading}
								/>
								Raw (Multiple Files)
							</label>
						</div>
					</div>

					<div>
						<label
							htmlFor="download-options"
							style={{
								display: "block",
								marginBottom: "8px",
								fontWeight: "bold",
							}}
						>
							Options
						</label>
						<label
							style={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
								cursor: "pointer",
							}}
						>
							<input
								type="checkbox"
								checked={removeMetadata}
								onChange={(e) => setRemoveMetadata(e.target.checked)}
								disabled={isDownloading}
							/>
							Remove metadata (ComfyUI workflow data) from downloaded images
						</label>
					</div>
				</div>

				<div className="meld-modal-footer">
					<button
						type="button"
						className="meld-btn meld-btn-secondary"
						onClick={onClose}
						disabled={isDownloading}
					>
						Cancel
					</button>
					<button
						type="button"
						className="meld-btn meld-btn-primary"
						onClick={handleDownload}
						disabled={isDownloading}
						style={{ display: "flex", alignItems: "center", gap: "8px" }}
					>
						{isDownloading ? (
							"Downloading..."
						) : (
							<>
								<Download size={16} /> Download
							</>
						)}
					</button>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
