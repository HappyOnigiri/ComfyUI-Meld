import { Download, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { logger } from "../../../logger";
import * as imagesApi from "../../images/api/imagesApi";

const STORAGE_KEY = "meld-download-options";

// Resize mode type definition
type ResizeMode = "none" | "percent" | "max_edge";

// Resize filter type definition
type ResizeFilter = "lanczos" | "bicubic" | "bilinear" | "box" | "hamming" | "nearest";

const RESIZE_FILTER_OPTIONS: { value: ResizeFilter; label: string }[] = [
	{ value: "lanczos", label: "Lanczos (high quality)" },
	{ value: "bicubic", label: "Bicubic" },
	{ value: "bilinear", label: "Bilinear" },
	{ value: "box", label: "Box" },
	{ value: "hamming", label: "Hamming" },
	{ value: "nearest", label: "Nearest (pixel art)" },
];

interface StoredDownloadOptions {
	format: "zip" | "raw";
	removeMetadata: boolean;
	resizeMode: ResizeMode;
	resizeValue: number;
	resizeFilter: ResizeFilter;
}

function loadStoredOptions(): StoredDownloadOptions {
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			const parsed = JSON.parse(saved) as Partial<StoredDownloadOptions>;
			const raw = parsed.removeMetadata as unknown;
			// Legacy clients/saved states may store removeMetadata as boolean true, string "true",
			// or numeric 1; preserve these exact values for backward compatibility.
			const removeMetadata =
				raw === true || raw === "true" || (typeof raw === "number" && raw === 1);

			// Validate resizeMode (may not exist in older localStorage versions)
			const validModes: ResizeMode[] = ["none", "percent", "max_edge"];
			const resizeMode: ResizeMode = validModes.includes(parsed.resizeMode as ResizeMode)
				? (parsed.resizeMode as ResizeMode)
				: "none";
			const resizeValue =
				typeof parsed.resizeValue === "number" && parsed.resizeValue > 0 ? parsed.resizeValue : 100;

			// Validate resizeFilter (may not exist in older localStorage versions)
			const validFilters: ResizeFilter[] = [
				"lanczos",
				"bicubic",
				"bilinear",
				"box",
				"hamming",
				"nearest",
			];
			const resizeFilter: ResizeFilter = validFilters.includes(parsed.resizeFilter as ResizeFilter)
				? (parsed.resizeFilter as ResizeFilter)
				: "lanczos";

			return {
				format: parsed.format === "raw" ? "raw" : "zip",
				removeMetadata,
				resizeMode,
				resizeValue,
				resizeFilter,
			};
		}
	} catch (_e) {
		// Ignore parse errors, use defaults
	}
	return {
		format: "zip",
		removeMetadata: false,
		resizeMode: "none",
		resizeValue: 100,
		resizeFilter: "lanczos",
	};
}

function saveStoredOptions(options: StoredDownloadOptions): void {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(options));
	} catch (_e) {
		// Ignore quota errors
	}
}

interface DownloadModalProps {
	imageIds: number[];
	onSuccess?: () => void;
	onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ imageIds, onSuccess, onClose }) => {
	const [options, setOptions] = useState<StoredDownloadOptions>(() => loadStoredOptions());
	const { format, removeMetadata, resizeMode, resizeValue, resizeFilter } = options;
	const [isDownloading, setIsDownloading] = useState(false);
	// Download progress: current=processed images, total=total images
	const [downloadProgress, setDownloadProgress] = useState<{
		current: number;
		total: number;
	} | null>(null);

	// String state for the resize value input field (to hold uncommitted input)
	const [resizeValueInput, setResizeValueInput] = useState<string>(String(resizeValue));

	const overlayMouseDownRef = useRef(false);

	useEffect(() => {
		saveStoredOptions(options);
	}, [options]);

	// Reset input field when resizeValue changes
	useEffect(() => {
		setResizeValueInput(String(resizeValue));
	}, [resizeValue]);

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

	// Handler for confirming resize value input
	const handleResizeValueChange = (raw: string) => {
		// Keep raw text in the input field to allow in-progress typing
		setResizeValueInput(raw);
		const num = Number(raw);
		// Reject NaN, non-finite, and non-positive values
		if (!Number.isFinite(num) || num <= 0) {
			return;
		}
		// Clamp to mode-specific min/max before writing to options
		const min = 1;
		const max = resizeMode === "percent" ? 99 : 99999;
		const clamped = Math.min(max, Math.max(min, Math.round(num)));
		setOptions((o) => ({ ...o, resizeValue: clamped }));
	};

	const handleDownload = async () => {
		if (imageIds.length === 0) {
			onClose();
			return;
		}

		setIsDownloading(true);
		const total = imageIds.length;
		setDownloadProgress({ current: 0, total });
		try {
			if (format === "zip") {
				// ZIP: Fetch images individually and assemble ZIP on client side
				await imagesApi.downloadZipImages(
					imageIds,
					removeMetadata,
					resizeMode,
					resizeValue,
					resizeFilter,
					(current, progressTotal) => {
						setDownloadProgress({ current, total: progressTotal });
					},
				);
			} else {
				// Raw format: Tracking progress per image
				let i = 0;
				for (const imageId of imageIds) {
					setDownloadProgress({ current: i, total });
					await imagesApi.downloadRawImage(
						imageId,
						removeMetadata,
						resizeMode,
						resizeValue,
						resizeFilter,
					);
					i += 1;
					setDownloadProgress({ current: i, total });
					// Allow browser to process multiple downloads
					await new Promise((r) => setTimeout(r, 200));
				}
			}
			onClose();
			onSuccess?.();
		} catch (error) {
			logger.error("Download failed:", error);
			alert("Failed to download images.");
		} finally {
			setIsDownloading(false);
			setDownloadProgress(null);
		}
	};

	// Label and constraints for resize value input field
	const resizeInputLabel = resizeMode === "percent" ? "%" : "px";
	const resizeInputMin = 1;
	const resizeInputMax = resizeMode === "percent" ? 99 : 99999;
	const resizeInputPlaceholder = resizeMode === "percent" ? "1-99" : "Max edge (px)";

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
					{/* Format selection */}
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
									onChange={() => setOptions((o) => ({ ...o, format: "zip" }))}
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
									onChange={() => setOptions((o) => ({ ...o, format: "raw" }))}
									disabled={isDownloading}
								/>
								Raw (Multiple Files)
							</label>
						</div>
					</div>

					{/* Size reduction options */}
					<div style={{ marginBottom: "20px" }}>
						<label
							htmlFor="resize-value"
							style={{
								display: "block",
								marginBottom: "8px",
								fontWeight: "bold",
							}}
						>
							Resize
						</label>
						<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
							<label
								style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
							>
								<input
									type="radio"
									name="resizeMode"
									value="none"
									checked={resizeMode === "none"}
									onChange={() => setOptions((o) => ({ ...o, resizeMode: "none" }))}
									disabled={isDownloading}
								/>
								No resize
							</label>
							<label
								style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
							>
								<input
									type="radio"
									name="resizeMode"
									value="percent"
									checked={resizeMode === "percent"}
									onChange={() =>
										setOptions((o) => ({ ...o, resizeMode: "percent", resizeValue: 50 }))
									}
									disabled={isDownloading}
								/>
								Resize (percentage)
							</label>
							<label
								style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
							>
								<input
									type="radio"
									name="resizeMode"
									value="max_edge"
									checked={resizeMode === "max_edge"}
									onChange={() =>
										setOptions((o) => ({ ...o, resizeMode: "max_edge", resizeValue: 1024 }))
									}
									disabled={isDownloading}
								/>
								Resize (max edge)
							</label>
						</div>

						{/* Resize value input (shown only when percent / max_edge is selected) */}
						{resizeMode !== "none" && (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "6px",
									marginTop: "10px",
									paddingLeft: "4px",
								}}
							>
								<input
									type="number"
									id="resize-value"
									min={resizeInputMin}
									max={resizeInputMax}
									step={1}
									value={resizeValueInput}
									placeholder={resizeInputPlaceholder}
									onChange={(e) => handleResizeValueChange(e.target.value)}
									disabled={isDownloading}
									style={{
										width: "100px",
										padding: "4px 8px",
										borderRadius: "4px",
										border: "1px solid var(--border-color, #555)",
										background: "var(--comfy-input-bg, #1a1a1a)",
										color: "inherit",
										fontSize: "14px",
									}}
								/>
								<span style={{ fontSize: "13px" }}>{resizeInputLabel}</span>
								{resizeMode === "percent" && (
									<span style={{ fontSize: "12px", color: "var(--meld-text-secondary)" }}>
										(1-99)
									</span>
								)}
								{resizeMode === "max_edge" && (
									<span style={{ fontSize: "12px", color: "var(--meld-text-secondary)" }}>
										(max edge px)
									</span>
								)}
							</div>
						)}

						{/* Algorithm selection (shown only when resize is active) */}
						{resizeMode !== "none" && (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "8px",
									marginTop: "10px",
									paddingLeft: "4px",
								}}
							>
								<label htmlFor="resize-filter" style={{ fontSize: "13px" }}>
									Algorithm:
								</label>
								<select
									id="resize-filter"
									value={resizeFilter}
									onChange={(e) =>
										setOptions((o) => ({
											...o,
											resizeFilter: e.target.value as ResizeFilter,
										}))
									}
									disabled={isDownloading}
									style={{
										padding: "4px 8px",
										borderRadius: "4px",
										border: "1px solid var(--border-color, #555)",
										background: "var(--comfy-input-bg, #1a1a1a)",
										color: "inherit",
										fontSize: "13px",
									}}
								>
									{RESIZE_FILTER_OPTIONS.map((opt) => (
										<option key={opt.value} value={opt.value}>
											{opt.label}
										</option>
									))}
								</select>
							</div>
						)}
					</div>

					{/* Metadata removal option */}
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
								onChange={(e) => setOptions((o) => ({ ...o, removeMetadata: e.target.checked }))}
								disabled={isDownloading}
							/>
							Remove metadata (ComfyUI workflow data) from downloaded images
						</label>
					</div>
				</div>

				{/* Download progress display */}
				{isDownloading && downloadProgress && (
					<div
						style={{
							padding: "12px 20px",
							borderTop: "1px solid var(--border-color, #555)",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "8px",
								fontSize: "13px",
							}}
						>
							<span>
								{`${downloadProgress.total} images - Processing ${downloadProgress.current + 1 > downloadProgress.total ? downloadProgress.total : downloadProgress.current + 1} of ${downloadProgress.total}...`}
							</span>
							<span style={{ color: "var(--meld-text-secondary)" }}>
								{Math.round((downloadProgress.current / Math.max(1, downloadProgress.total)) * 100)}
								%
							</span>
						</div>
						{/* Progress bar */}
						<div
							style={{
								width: "100%",
								height: "4px",
								background: "var(--comfy-input-bg, #1a1a1a)",
								borderRadius: "2px",
								overflow: "hidden",
							}}
						>
							<div
								style={{
									height: "100%",
									borderRadius: "2px",
									transition: "width 0.3s ease",
									width: `${(downloadProgress.current / Math.max(1, downloadProgress.total)) * 100}%`,
									background: "var(--meld-accent, #4a9eff)",
								}}
							/>
						</div>
					</div>
				)}

				<div className="meld-modal-footer">
					<button
						type="button"
						className="meld-btn meld-btn--secondary"
						onClick={onClose}
						disabled={isDownloading}
					>
						Cancel
					</button>
					<button
						type="button"
						className="meld-btn meld-btn--primary"
						onClick={handleDownload}
						disabled={isDownloading}
						style={{ display: "flex", alignItems: "center", gap: "8px" }}
					>
						{isDownloading && downloadProgress ? (
							`Downloading ${Math.min(downloadProgress.current + 1, downloadProgress.total)}/${downloadProgress.total}...`
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
