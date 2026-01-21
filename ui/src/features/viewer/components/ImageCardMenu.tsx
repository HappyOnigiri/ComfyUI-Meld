import {
	ArrowBigRight,
	ArrowRight,
	MoreVertical,
	Play,
	PlusCircle,
	Tag,
} from "lucide-react";
import type React from "react";

interface ImageCardMenuProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (open: boolean) => void;
	menuRef: React.RefObject<HTMLDivElement>;
	onAddUnifiedLoader: () => void;
	onRestoreWorkflow: () => void;
	onRunWithWorkflow: () => void;
	onEditSource: () => void;
	onEditTags: () => void;
}

export const ImageCardMenu: React.FC<ImageCardMenuProps> = ({
	isMenuOpen,
	setIsMenuOpen,
	menuRef,
	onAddUnifiedLoader,
	onRestoreWorkflow,
	onRunWithWorkflow,
	onEditSource,
	onEditTags,
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
						onClick={(e) => {
							e.stopPropagation();
							onAddUnifiedLoader();
							setIsMenuOpen(false);
						}}
					>
						<ArrowRight size={14} />
						<span>Add Unified Loader</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onClick={(e) => {
							e.stopPropagation();
							onRestoreWorkflow();
							setIsMenuOpen(false);
						}}
					>
						<ArrowBigRight size={14} />
						<span>Restore Full Workflow</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onClick={(e) => {
							e.stopPropagation();
							onRunWithWorkflow();
							setIsMenuOpen(false);
						}}
					>
						<Play size={14} />
						<span>Run with Workflow</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onClick={(e) => {
							e.stopPropagation();
							onEditSource();
							setIsMenuOpen(false);
						}}
					>
						<PlusCircle size={14} />
						<span>Edit source image</span>
					</div>
					<div
						className="meld-image-card__menu-item"
						onClick={(e) => {
							e.stopPropagation();
							onEditTags();
							setIsMenuOpen(false);
						}}
					>
						<Tag size={14} />
						<span>Edit Tags</span>
					</div>
				</div>
			)}
		</div>
	);
};
