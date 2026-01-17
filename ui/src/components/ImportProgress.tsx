import { CheckCircle, Square } from "lucide-react";
import type React from "react";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";

export const ImportProgress: React.FC = () => {
	const { state, dispatch } = useGallery();
	const { scanStatus } = state;

	if (!scanStatus.isRunning && !scanStatus.isFinished) {
		return null;
	}

	const handleCancel = async () => {
		try {
			await api.cancelScan();
			dispatch({ type: "SET_SCAN_STATUS", payload: { shouldCancel: true } });
		} catch (err) {
			console.error("Failed to cancel scan:", err);
		}
	};

	const handleDismiss = () => {
		dispatch({
			type: "SET_SCAN_STATUS",
			payload: { isFinished: false, isRunning: false },
		});
	};

	const isLinking = scanStatus.progress.phase === "linking";
	const progressPercent = isLinking
		? 100
		: scanStatus.progress.total > 0
			? Math.round(
					(scanStatus.progress.current / scanStatus.progress.total) * 100,
				)
			: 0;

	return (
		<div className="meld-import-progress-sidebar">
			{scanStatus.isRunning ? (
				<div className="meld-scan-progress-compact">
					<div className="meld-scan-info">
						<div className="meld-scan-status-text-compact">
							{scanStatus.shouldCancel ? (
								<span className="meld-status-cancelling">Cancelling...</span>
							) : isLinking ? (
								<span>Linking...</span>
							) : (
								<span>Scanning...</span>
							)}
						</div>
						<div className="meld-progress-stats-compact">
							{scanStatus.progress.current} / {scanStatus.progress.total}
						</div>
					</div>

					<div className="meld-progress-container-compact">
						<div
							className="meld-progress-bar"
							style={{ width: `${progressPercent}%` }}
						/>
					</div>

					<button
						type="button"
						className="meld-btn-stop-compact"
						disabled={scanStatus.shouldCancel}
						onClick={handleCancel}
						title="Stop Scan"
					>
						<Square size={12} fill="currentColor" />
					</button>
				</div>
			) : (
				<div className="meld-scan-finished-compact">
					<div className="meld-finished-info">
						<CheckCircle size={14} className="meld-success-icon" />
						<span className="meld-finished-text">
							Done! {scanStatus.newCount} new, {scanStatus.updatedCount} updated
						</span>
					</div>
					<button
						type="button"
						className="meld-btn-ok-compact"
						onClick={handleDismiss}
					>
						OK
					</button>
				</div>
			)}
		</div>
	);
};
