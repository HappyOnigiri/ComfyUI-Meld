import {
	AlertCircle,
	ChevronRight,
	FileJson,
	Play,
	Search,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import {
	fetchWorkflowRaw,
	fetchWorkflows,
	type WorkflowInfo,
} from "../api/workflowsApi";

interface WorkflowSelectionModalProps {
	images: MeldImage[];
	onExecute: (
		workflowName: string,
		targetLoaderNodeId?: string,
	) => Promise<void>;
	onSuccess?: () => void;
	isMaskMode?: boolean;
}

interface LoaderNodeInfo {
	id: string;
	type: string;
	title?: string;
}

interface WorkflowNode {
	id: string | number;
	type?: string;
	class_type?: string;
	title?: string;
}

export const WorkflowSelectionModal: React.FC<WorkflowSelectionModalProps> = ({
	images,
	onExecute,
	onSuccess,
	isMaskMode,
}) => {
	const { dispatch } = useGallery();
	const [workflows, setWorkflows] = useState<WorkflowInfo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [executing, setExecuting] = useState(false);
	const [expandedWorkflow, setExpandedWorkflow] = useState<string | null>(null);
	const [workflowNodes, setWorkflowNodes] = useState<
		Record<string, LoaderNodeInfo[]>
	>({});
	const [loadingNodes, setLoadingNodes] = useState<Record<string, boolean>>({});
	const [searchQuery, setSearchQuery] = useState("");
	const searchInputRef = useRef<HTMLInputElement>(null);

	const sortedWorkflows = useMemo(() => {
		return workflows
			.map((wf) => {
				let valid = wf.valid;
				let reason = wf.reason;

				if (isMaskMode) {
					if (wf.mask_count === 0) {
						valid = false;
						reason = "No 'Load Image (as Mask)' node found.";
					}
					// Allow multiple mask nodes, user will pick one
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

	const filteredWorkflows = useMemo(() => {
		if (!searchQuery.trim()) return sortedWorkflows;
		const query = searchQuery.toLowerCase();
		return sortedWorkflows.filter((wf) =>
			wf.name.toLowerCase().includes(query),
		);
	}, [sortedWorkflows, searchQuery]);

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

	useEffect(() => {
		if (!loading && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [loading]);

	const handleClose = useCallback(() => {
		dispatch({ type: "CLOSE_MODAL" });
	}, [dispatch]);

	useEscapeToClose({ onEscape: handleClose });

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

	const handleRun = async (
		workflowName: string,
		targetLoaderNodeId?: string,
	) => {
		if (executing) return;
		try {
			setExecuting(true);
			await onExecute(workflowName, targetLoaderNodeId);
			onSuccess?.();
			handleClose();
		} catch (err) {
			setError(err instanceof Error ? err.message : String(err));
			setExecuting(false);
		}
	};

	const fetchNodesForWorkflow = async (workflowName: string) => {
		if (workflowNodes[workflowName] || loadingNodes[workflowName]) return;

		try {
			setLoadingNodes((prev) => ({ ...prev, [workflowName]: true }));
			const workflow = await fetchWorkflowRaw(workflowName);
			const loaders: LoaderNodeInfo[] = [];

			const isTargetNode = (type: string | undefined) => {
				if (!type) return false;
				const t = type.replace(/\s+/g, "").toLowerCase(); // Normalize and lowercase
				if (isMaskMode) {
					return t === "loadimagemask";
				}
				return t === "meldimageloader" || t === "loadimage";
			};

			if (workflow.nodes && Array.isArray(workflow.nodes)) {
				// UI Format
				console.log(
					"[Meld] Extracting nodes from UI format workflow",
					workflow.nodes.length,
				);
				for (const node of workflow.nodes as WorkflowNode[]) {
					if (isTargetNode(node.type)) {
						console.log(
							"[Meld] Found target node (UI):",
							node.id,
							node.type,
							node.title,
						);
						loaders.push({
							id: String(node.id),
							type: node.type || "",
							title: node.title,
						});
					}
				}
			} else {
				// API Format
				console.log("[Meld] Extracting nodes from API format workflow");
				for (const nodeId in workflow) {
					const node = workflow[nodeId] as WorkflowNode;
					if (
						node &&
						typeof node === "object" &&
						isTargetNode(node.class_type)
					) {
						console.log(
							"[Meld] Found target node (API):",
							nodeId,
							node.class_type,
						);
						loaders.push({
							id: nodeId,
							type: node.class_type || "",
						});
					}
				}
			}

			if (loaders.length === 0) {
				console.warn(
					"[Meld] No loader nodes found in workflow JSON despite count > 0",
				);
			}

			setWorkflowNodes((prev) => ({ ...prev, [workflowName]: loaders }));
		} catch (err) {
			console.error("Failed to fetch workflow nodes:", err);
		} finally {
			setLoadingNodes((prev) => ({ ...prev, [workflowName]: false }));
		}
	};

	const toggleExpand = (wf: WorkflowInfo) => {
		if (!wf.valid || executing) return;

		const targetCount = isMaskMode
			? wf.mask_count
			: wf.loader_count + wf.load_image_count;

		if (targetCount <= 1) {
			handleRun(wf.name);
			return;
		}

		if (expandedWorkflow === wf.name) {
			setExpandedWorkflow(null);
		} else {
			setExpandedWorkflow(wf.name);
			fetchNodesForWorkflow(wf.name);
		}
	};

	return createPortal(
		<div
			className="meld-modal-overlay"
			onMouseDown={handleOverlayMouseDown}
			onMouseUp={handleOverlayMouseUp}
		>
			<div
				className="meld-modal-content meld-modal-content--large"
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
								. Workflows must have at least one{" "}
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

							<div
								className="meld-tag-search-container"
								style={{ marginBottom: "12px" }}
							>
								<Search className="meld-tag-search-icon" size={16} />
								<input
									ref={searchInputRef}
									type="text"
									className="meld-tag-search-input"
									placeholder="Search workflows..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
								{searchQuery && (
									<button
										type="button"
										className="meld-tag-item__btn"
										onClick={() => {
											setSearchQuery("");
											searchInputRef.current?.focus();
										}}
										style={{ padding: "4px" }}
									>
										<X size={14} />
									</button>
								)}
							</div>

							{filteredWorkflows.length === 0 ? (
								<div
									style={{
										padding: "20px",
										textAlign: "center",
										color: "var(--meld-text-secondary)",
									}}
								>
									No workflows match your search.
								</div>
							) : (
								filteredWorkflows.map((wf) => {
									const totalLoaders = isMaskMode
										? wf.mask_count
										: wf.loader_count + wf.load_image_count;
									const isExpanded = expandedWorkflow === wf.name;
									const nodes = workflowNodes[wf.name] || [];
									const isLoadingWfNodes = loadingNodes[wf.name];

									return (
										<div key={wf.name} className="meld-workflow-item-container">
											<div
												className={`meld-workflow-item ${!wf.valid ? "meld-workflow-item--invalid" : ""} ${isExpanded ? "meld-workflow-item--expanded" : ""}`}
												onClick={() => toggleExpand(wf)}
												title={wf.reason || "Click to select"}
											>
												<div className="meld-workflow-item__info">
													<div className="meld-workflow-item__name">
														{wf.name}
													</div>
													{!wf.valid && (
														<div className="meld-workflow-item__reason">
															{wf.reason}
														</div>
													)}
													{wf.valid && (
														<div className="meld-workflow-item__supports">
															{totalLoaders > 1
																? `Multiple loaders found (${totalLoaders})`
																: isMaskMode
																	? "Supports: Load Image (as Mask)"
																	: `Supports: ${wf.loader_count > 0 ? "Meld Loader" : "Load Image"}`}
														</div>
													)}
												</div>
												{wf.valid && totalLoaders <= 1 && (
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
												{wf.valid && totalLoaders > 1 && (
													<button
														type="button"
														className="meld-btn meld-btn-primary meld-btn-small"
														disabled={executing}
														onClick={(e) => {
															e.stopPropagation();
															toggleExpand(wf);
														}}
														style={{
															display: "flex",
															alignItems: "center",
															gap: "4px",
														}}
													>
														{isExpanded ? "Close" : "Select Node"}
														<ChevronRight
															size={14}
															style={{
																transform: isExpanded
																	? "rotate(90deg)"
																	: "rotate(0deg)",
																transition: "transform 0.2s",
															}}
														/>
													</button>
												)}
											</div>

											{isExpanded && (
												<div className="meld-workflow-node-picker">
													{isLoadingWfNodes ? (
														<div className="meld-workflow-node-picker__loading">
															<div className="meld-loading-spinner meld-loading-spinner--small" />
															<span>Loading nodes...</span>
														</div>
													) : (
														<>
															<div className="meld-workflow-node-picker__label">
																Select target loader node:
															</div>
															<div className="meld-workflow-node-picker__list">
																{nodes.map((node) => (
																	<button
																		key={node.id}
																		type="button"
																		className="meld-workflow-node-item"
																		disabled={executing}
																		onClick={() => handleRun(wf.name, node.id)}
																	>
																		<div className="meld-workflow-node-item__info">
																			<span className="meld-workflow-node-item__title">
																				{node.title || node.type}
																			</span>
																			<span className="meld-workflow-node-item__id">
																				#{node.id}
																			</span>
																		</div>
																		<Play size={12} />
																	</button>
																))}
															</div>
														</>
													)}
												</div>
											)}
										</div>
									);
								})
							)}
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
