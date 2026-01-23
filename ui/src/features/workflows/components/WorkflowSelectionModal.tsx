import { AlertCircle, FileJson, Play, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import { fetchWorkflows, type WorkflowInfo } from "../api/workflowsApi";

interface WorkflowSelectionModalProps {
	images: MeldImage[];
	onExecute: (workflowName: string) => Promise<void>;
	isMaskMode?: boolean;
}

export const WorkflowSelectionModal: React.FC<WorkflowSelectionModalProps> = ({
	images,
	onExecute,
	isMaskMode,
}) => {
	const { dispatch } = useGallery();
	const [workflows, setWorkflows] = useState<WorkflowInfo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [executing, setExecuting] = useState(false);

	const sortedWorkflows = useMemo(() => {
		return workflows
			.map((wf) => {
				let valid = wf.valid;
				let reason = wf.reason;

				if (isMaskMode) {
					if (wf.mask_count === 0) {
						valid = false;
						reason = "No 'Load Image (as Mask)' node found.";
					} else if (wf.mask_count > 1) {
						valid = false;
						reason = `Multiple 'Load Image (as Mask)' nodes found (${wf.mask_count}).`;
					}
				}

				return { ...wf, valid, reason };
			})
			.sort((a, b) => {
				if (a.valid !== b.valid) {
					return a.valid ? -1 : 1;
				}
				return a.name.localeCompare(b.name);
			});
	}, [workflows, isMaskMode]);

	const loadWorkflows = useCallback(async () => {
		try {
			setLoading(true);
			const data = await fetchWorkflows();
			setWorkflows(data);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : String(err));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadWorkflows();
	}, [loadWorkflows]);

	const handleClose = useCallback(() => {
		dispatch({ type: "CLOSE_MODAL" });
	}, [dispatch]);

	const overlayMouseDownRef = useRef(false);

	const handleOverlayMouseDown = useCallback((e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	}, []);

	const handleOverlayMouseUp = useCallback(
		(e: React.MouseEvent) => {
			if (e.target === e.currentTarget && overlayMouseDownRef.current) {
				handleClose();
			}
			overlayMouseDownRef.current = false;
		},
		[handleClose],
	);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleClose]);

	const handleRun = async (workflowName: string) => {
		if (executing) return;
		try {
			setExecuting(true);
			await onExecute(workflowName);
			handleClose();
		} catch (err) {
			setError(err instanceof Error ? err.message : String(err));
			setExecuting(false);
		}
	};

	return createPortal(
		<div
			className="meld-modal-overlay"
			onMouseDown={handleOverlayMouseDown}
			onMouseUp={handleOverlayMouseUp}
		>
			<div
				className="meld-modal-content meld-modal-content--medium"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h2 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<FileJson size={20} color="var(--meld-accent-color)" />
						Queue via Workflow
					</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={handleClose}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body" style={{ minHeight: "300px" }}>
					{loading ? (
						<div className="meld-loading-container">
							<div className="meld-loading-spinner" />
							<span>Loading workflows...</span>
						</div>
					) : error ? (
						<div className="meld-error-container">
							<AlertCircle size={20} />
							<span>{error}</span>
						</div>
					) : workflows.length === 0 ? (
						<div
							style={{
								padding: "40px",
								textAlign: "center",
								color: "var(--meld-text-secondary)",
							}}
						>
							No workflows found in ComfyUI/user/default/workflows
						</div>
					) : (
						<div className="meld-workflow-list">
							<div
								style={{
									marginBottom: "15px",
									fontSize: "14px",
									color: "var(--meld-text-secondary)",
								}}
							>
								Select a workflow to process{" "}
								<strong>
									{images.length > 1
										? `${images.length} images`
										: images[0]?.filename}
								</strong>
								. Workflows must have exactly one{" "}
								<strong>Meld Image Loader</strong> or{" "}
								<strong>Load Image</strong> node
								{isMaskMode && (
									<>
										{" "}
										and one <strong>Load Image (as Mask)</strong> node
									</>
								)}
								.
							</div>
							{sortedWorkflows.map((wf) => (
								<div
									key={wf.name}
									className={`meld-workflow-item ${!wf.valid ? "meld-workflow-item--invalid" : ""}`}
									onClick={() => wf.valid && !executing && handleRun(wf.name)}
									title={wf.reason || "Click to run"}
								>
									<div className="meld-workflow-item__info">
										<div className="meld-workflow-item__name">{wf.name}</div>
										{!wf.valid && (
											<div className="meld-workflow-item__reason">
												{wf.reason}
											</div>
										)}
										{wf.valid && (
											<div className="meld-workflow-item__supports">
												Supports:{" "}
												{wf.loader_count > 0 ? "Meld Loader" : "Load Image"}
											</div>
										)}
									</div>
									{wf.valid && (
										<button
											type="button"
											className="meld-btn meld-btn-primary meld-btn-small"
											disabled={executing}
											onClick={(e) => {
												e.stopPropagation();
												handleRun(wf.name);
											}}
										>
											<Play size={14} />
											{executing ? "Queuing..." : "Queue"}
										</button>
									)}
								</div>
							))}
						</div>
					)}
				</div>

				<div className="meld-modal-footer">
					<button
						type="button"
						className="meld-btn meld-btn-secondary"
						onClick={handleClose}
						disabled={executing}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
