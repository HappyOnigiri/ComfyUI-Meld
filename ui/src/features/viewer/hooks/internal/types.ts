import type React from "react";
import type { GalleryAction, GalleryState, MeldImage } from "../../../../types";

export interface UseImageViewerLogicProps {
	state: GalleryState;
	dispatch: React.Dispatch<GalleryAction>;
	loadMoreImages: () => void;
	fetchFullImageDetails: (id: number) => Promise<MeldImage>;
}

export interface ViewerMountRefs {
	isMountedRef: React.MutableRefObject<boolean>;
	viewerImageIdRef: React.MutableRefObject<number | null>;
}

export interface ViewerShortcutUndoAction {
	type: "tags";
	imageId: number;
	addTags: string[];
	removeTags: string[];
}

export interface UseImageViewerLogicResult {
	isFullscreen: boolean;
	showDetails: boolean;
	setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
	showThumbnails: boolean;
	setShowThumbnailsOverride: React.Dispatch<
		React.SetStateAction<boolean | null>
	>;
	isLoadingLineage: boolean;
	isJumping: boolean;
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	activeShortcutKey: string | null;
	lastDeletedImages: MeldImage[] | null;
	setLastDeletedImages: React.Dispatch<
		React.SetStateAction<MeldImage[] | null>
	>;
	overlayRef: React.MutableRefObject<HTMLDivElement | null>;
	handleNext: () => void;
	handlePrevious: () => void;
	handleDelete: (forceNoConfirm?: boolean) => Promise<void>;
	handleUpdateUserNotes: (imageId: number, notes: string) => Promise<void>;
	handleEditNotes: () => void;
	handleTagEdit: () => void;
	handleRestore: () => Promise<void>;
	handleUndo: () => Promise<void>;
	handleRestoreWorkflow: () => Promise<void>;
	handleAddUnifiedLoader: () => Promise<void>;
	handleSendToWorkflow: () => void;
	handleRunWithWorkflow: () => void;
	handleRunWithMask: (mode: "apply" | "run") => Promise<void> | undefined;
	handleEditSource: () => void;
	toggleFullscreen: (e?: React.MouseEvent | KeyboardEvent) => void;
	currentIndex: number;
	currentThumbnails: MeldImage[];
	image: MeldImage | undefined;
	windowedThumbnails: Array<{ img: MeldImage; absIndex: number }>;
	parentChain: Array<{ id: number | null; imgSrc: string | null }>;
}
