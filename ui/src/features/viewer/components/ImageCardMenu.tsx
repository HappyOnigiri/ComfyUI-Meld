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

interface ImageCardMenuProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (open: boolean) => void;
	menuRef: React.RefObject<HTMLDivElement>;
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
			<button
				type="button"
				className="meld-image-card__menu-btn"
				onClick={(e) => {
					e.stopPropagation();
					onAddUnifiedLoader();
				}}
				title="Add Unified Loader"
			>
				<ArrowRight size={16} />
			</button>
			{isMenuOpen && (
				<div className="meld-image-card__menu">
					<div
						className="meld-image-card__menu-item"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsMenuOpen(false);
							setTimeout(() => onAddUnifiedLoader(), 0);
						}}
					>
						<ArrowRight size={14} />
						<span>Add Unified Loader</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsMenuOpen(false);
							setTimeout(() => onRestoreWorkflow(), 0);
						}}
					>
						<ArrowBigRight size={14} />
						<span>Restore Full Workflow</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsMenuOpen(false);
							setTimeout(() => onRunWithWorkflow(), 0);
						}}
					>
						<Play size={14} />
						<span>Queue Workflow</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsMenuOpen(false);
							setTimeout(() => onRunWithMask("apply"), 0);
						}}
					>
						<Square size={14} />
						<span>Send to Workflow (Mask)</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsMenuOpen(false);
							setTimeout(() => onRunWithMask("run"), 0);
						}}
					>
						<Square size={14} />
						<span>Queue Workflow (Mask)</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsMenuOpen(false);
							setTimeout(() => onEditSource(), 0);
						}}
					>
						<PlusCircle size={14} />
						<span>Edit source image</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsMenuOpen(false);
							setTimeout(() => onEditTags(), 0);
						}}
					>
						<Tag size={14} />
						<span>Edit Tags</span>
					</div>
					{showRestore && (
						<div
							className="meld-image-card__menu-item"
							onMouseDown={(e) => e.stopPropagation()}
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setIsMenuOpen(false);
								if (onRestore) setTimeout(() => onRestore(), 0);
							}}
						>
							<RefreshCw size={14} color="var(--meld-accent-color)" />
							<span style={{ color: "var(--meld-accent-color)" }}>
								Restore Image
							</span>
						</div>
					)}
					<div
						className="meld-image-card__menu-item meld-image-card__menu-item--danger"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsMenuOpen(false);
							setTimeout(() => onDelete(), 0);
						}}
					>
						<Trash2 size={14} color="var(--meld-danger-color)" />
						<span style={{ color: "var(--meld-danger-color)" }}>
							{deleteLabel}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};
