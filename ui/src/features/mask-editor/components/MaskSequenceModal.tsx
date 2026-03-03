import type React from "react";
import { MaskEditorModal } from "./MaskEditorModal";

export interface MaskSequenceModalProps {
	images: { id: number }[];
	currentIndex: number;
	workflowName: string;
	targetLoaderNodeId?: string;
	onSuccess: () => void;
	onClose: () => void;
}

/**
 * Shared wrapper for the mask sequence step flow. Renders MaskEditorModal for
 * the current image in a sequence, delegating advance/close logic to the parent
 * via onSuccess and onClose.
 */
export const MaskSequenceModal: React.FC<MaskSequenceModalProps> = ({
	images,
	currentIndex,
	workflowName,
	targetLoaderNodeId,
	onSuccess,
	onClose,
}) => {
	const currentImage = images[currentIndex];
	if (!currentImage) return null;

	return (
		<MaskEditorModal
			key={currentImage.id}
			imageId={currentImage.id}
			mode="run_sequence"
			sequenceData={{
				workflowName,
				targetLoaderNodeId,
				currentIndex,
				totalCount: images.length,
			}}
			onSuccess={onSuccess}
			onClose={onClose}
		/>
	);
};
