import {
	ArrowBigRight,
	ArrowRight,
	MoreVertical,
	Play,
	PlusCircle,
	RefreshCw,
	Square,
	Tag,
	Trash2,
} from "lucide-react";
import type React from "react";
import type { Settings } from "../../../types";
import { QUICK_SHORTCUT_ACTIONS } from "../utils/shortcutActions";

interface ImageCardMenuProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (open: boolean) => void;
	menuRef: React.RefObject<HTMLDivElement>;
	settings: Settings;
	onAddUnifiedLoader: () => void;
	onRestoreWorkflow: () => void;
	onRunWithWorkflow: () => void;
	onRunWithMask: (mode: "apply" | "run") => void;
	onEditSource: () => void;
	onEditTags: () => void;
	onDelete: () => void;
	onRestore?: () => void;
	showRestore?: boolean;
	deleteLabel: string;
}

export const ImageCardMenu: React.FC<ImageCardMenuProps> = ({
	isMenuOpen,
	setIsMenuOpen,
	menuRef,
	settings,
	onAddUnifiedLoader,
	onRestoreWorkflow,
	onRunWithWorkflow,
	onRunWithMask,
	onEditSource,
	onEditTags,
	onDelete,
	onRestore,
	showRestore,
	deleteLabel,
}) => {
	const getActionHandler = (actionId: string) => {
		switch (actionId) {
			case "add_unified_loader":
				return onAddUnifiedLoader;
			case "restore_full_workflow":
				return onRestoreWorkflow;
			case "queue_workflow":
				return onRunWithWorkflow;
			case "send_to_workflow_mask":
				return () => onRunWithMask("apply");
			case "queue_workflow_mask":
				return () => onRunWithMask("run");
			case "edit_source_image":
				return onEditSource;
			case "edit_tags":
				return onEditTags;
			case "restore_image":
				return onRestore;
			case "delete_or_trash":
				return onDelete;
			default:
				return null;
		}
	};

	const quickShortcuts = [
		settings["gallery.quick_shortcut.1"],
		settings["gallery.quick_shortcut.2"],
		settings["gallery.quick_shortcut.3"],
	].filter((id) => id && id !== "");

	return (
		<div className="meld-image-card__menu-container" ref={menuRef}>
			<button
				type="button"
				className="meld-image-card__menu-btn"
				onClick={(e) => {
					e.stopPropagation();
					setIsMenuOpen(!isMenuOpen);
				}}
				title="Menu"
			>
				<MoreVertical size={16} />
			</button>
			{quickShortcuts.map((actionId, index) => {
				const action = QUICK_SHORTCUT_ACTIONS.find((a) => a.id === actionId);
				if (!action || !action.icon) return null;
				const Icon = action.icon;
				const handler = getActionHandler(actionId);
				if (!handler) return null;

				// Special case for restore_image: only show if in trash (showRestore is true)
				if (actionId === "restore_image" && !showRestore) return null;

				return (
					<button
						key={`${actionId}-${index}`}
						type="button"
						className="meld-image-card__menu-btn"
						onClick={(e) => {
							e.stopPropagation();
							handler();
						}}
						title={action.label}
					>
						<Icon size={16} />
					</button>
				);
			})}
			{isMenuOpen && (
				<div className="meld-image-card__menu">
					{[
						{
							id: "add_unified_loader",
							label: "Add Unified Loader",
							icon: ArrowRight,
							handler: onAddUnifiedLoader,
						},
						{
							id: "restore_full_workflow",
							label: "Restore Full Workflow",
							icon: ArrowBigRight,
							handler: onRestoreWorkflow,
						},
						{
							id: "queue_workflow",
							label: "Queue Workflow",
							icon: Play,
							handler: onRunWithWorkflow,
						},
						{
							id: "send_to_workflow_mask",
							label: "Send to Workflow (Mask)",
							icon: Square,
							handler: () => onRunWithMask("apply"),
						},
						{
							id: "queue_workflow_mask",
							label: "Queue Workflow (Mask)",
							icon: Square,
							handler: () => onRunWithMask("run"),
						},
						{
							id: "edit_source_image",
							label: "Edit source image",
							icon: PlusCircle,
							handler: onEditSource,
						},
						{
							id: "edit_tags",
							label: "Edit Tags",
							icon: Tag,
							handler: onEditTags,
						},
						...(showRestore
							? [
									{
										id: "restore_image",
										label: "Restore Image",
										icon: RefreshCw,
										handler: onRestore as () => void,
										color: "var(--meld-accent-color)",
									},
								]
							: []),
						{
							id: "delete_or_trash",
							label: deleteLabel,
							icon: Trash2,
							handler: onDelete,
							className: "meld-image-card__menu-item--danger",
							color: "var(--meld-danger-color)",
						},
					].map((item) => (
						<div
							key={item.id}
							className={`meld-image-card__menu-item ${item.className || ""}`}
							onMouseDown={(e) => e.stopPropagation()}
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setIsMenuOpen(false);
								setTimeout(() => item.handler(), 0);
							}}
						>
							<item.icon size={14} color={item.color} />
							<span>{item.label}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
