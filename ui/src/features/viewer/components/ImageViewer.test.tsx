import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../../test/factories/image";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../../test/helpers/renderWithGallery";
import type { Settings } from "../../../types";
import { ImageViewer } from "./ImageViewer";

// Mock useGallery
vi.mock("../../../store/GalleryContext", () => ({
	useGallery: vi.fn(),
}));

// Mock useImageViewerLogic
const mockUseImageViewerLogic = vi.fn();
vi.mock("../hooks/useImageViewerLogic", () => ({
	useImageViewerLogic: (...args: unknown[]) => mockUseImageViewerLogic(...args),
}));

// Mock useWorkflowExecution
vi.mock("../../workflows/hooks/useWorkflowExecution", () => ({
	useWorkflowExecution: vi.fn(() => ({
		executeWorkflow: vi.fn(),
	})),
}));

// Mock child components
vi.mock("./ImageCardMenu", () => ({
	ImageCardMenu: () => <div data-testid="image-card-menu" />,
}));
vi.mock("./ViewerInfoPanel", () => ({
	ViewerInfoPanel: () => <div data-testid="viewer-info-panel" />,
}));
vi.mock("./ViewerThumbnailStrip", () => ({
	ViewerThumbnailStrip: () => <div data-testid="viewer-thumbnail-strip" />,
}));
vi.mock("./ViewerCheatSheet", () => ({
	ViewerCheatSheet: () => <div data-testid="viewer-cheat-sheet" />,
}));
vi.mock("./NoteEditModal", () => ({
	NoteEditModal: () => <div data-testid="note-edit-modal" />,
}));

// Mock modal components
vi.mock("../../../components/shared/DeleteConfirmModal", () => ({
	DeleteConfirmModal: () => <div data-testid="delete-confirm-modal" />,
}));
vi.mock("../../../components/shared/ErrorModal", () => ({
	ErrorModal: () => <div data-testid="error-modal" />,
}));
vi.mock("../../../components/shared/ParentSelectionModal", () => ({
	ParentSelectionModal: () => <div data-testid="parent-selection-modal" />,
}));
vi.mock("../../importer/components/ImportModal", () => ({
	ImportModal: () => <div data-testid="import-modal" />,
}));
vi.mock("../../settings/components/SettingsModal", () => ({
	SettingsModal: () => <div data-testid="settings-modal" />,
}));
vi.mock("../../tags/components/TagEditModal", () => ({
	TagEditModal: () => <div data-testid="tag-edit-modal" />,
}));
vi.mock("../../mask-editor/components/MaskEditorModal", () => ({
	MaskEditorModal: () => <div data-testid="mask-editor-modal" />,
}));
vi.mock("../../mask-editor/components/MaskSequenceModal", () => ({
	MaskSequenceModal: () => <div data-testid="mask-sequence-modal" />,
}));
vi.mock("../../workflows/components/NodeSelectionModal", () => ({
	NodeSelectionModal: () => <div data-testid="node-selection-modal" />,
}));
vi.mock("../../workflows/components/WorkflowSelectionModal", () => ({
	WorkflowSelectionModal: () => <div data-testid="workflow-selection-modal" />,
}));
vi.mock("../../workflows/utils/injectImageToGraph", () => ({
	injectImageToGraph: vi.fn(),
}));
vi.mock("../../../utils/url", () => ({
	getImageViewUrl: (img: { filename: string }) => `/api/view/${img.filename}`,
}));

import { useGallery } from "../../../store/GalleryContext";
import { initialState } from "../../../store/galleryReducer";

function createMockViewerLogic(image: ReturnType<typeof createTestImage> | null, overrides = {}) {
	return {
		isFullscreen: false,
		showDetails: false,
		setShowDetails: vi.fn(),
		showThumbnails: false,
		setShowThumbnailsOverride: vi.fn(),
		isLoadingLineage: false,
		isJumping: false,
		isMenuOpen: false,
		setIsMenuOpen: vi.fn(),
		activeShortcutKey: null,
		setLastDeletedImages: vi.fn(),
		overlayRef: { current: null },
		handleNext: vi.fn(),
		handlePrevious: vi.fn(),
		handleTagEdit: vi.fn(),
		handleEditNotes: vi.fn(),
		handleRestore: vi.fn(),
		handleRestoreWorkflow: vi.fn(),
		handleAddUnifiedLoader: vi.fn(),
		handleSendToWorkflow: vi.fn(),
		handleRunWithWorkflow: vi.fn(),
		handleRunWithMask: vi.fn(),
		handleEditSource: vi.fn(),
		handleDelete: vi.fn(),
		toggleFullscreen: vi.fn(),
		image,
		windowedThumbnails: [],
		parentChain: [],
		...overrides,
	};
}

// Settings with icons visible
const iconsVisibleSettings: Settings = {
	...initialState.settings,
	"viewer.show_icons": true,
	"viewer.small_image_mode": "fit",
	"viewer.thumbnail_window_size": 5,
};

// Settings with icons hidden
const iconsHiddenSettings: Settings = {
	...initialState.settings,
	"viewer.show_icons": false,
	"viewer.small_image_mode": "fit",
	"viewer.thumbnail_window_size": 5,
};

describe("ImageViewer", () => {
	let ctx: MockGalleryContext;

	beforeEach(() => {
		resetImageIdCounter();
	});

	it("renders nothing when image is null", () => {
		ctx = createMockGalleryContext({
			viewerImageId: 1,
			activeModal: { type: "none" },
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
		mockUseImageViewerLogic.mockReturnValue(createMockViewerLogic(null));

		const { container } = render(<ImageViewer />);
		expect(container.innerHTML).toBe("");
	});

	it("renders the viewer overlay when image is present", () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			viewerImageId: img.id,
			viewerMode: "gallery",
			activeModal: { type: "none" },
			viewScope: "default",
			settings: iconsVisibleSettings,
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
		mockUseImageViewerLogic.mockReturnValue(createMockViewerLogic(img));

		render(<ImageViewer />);
		const overlay = document.querySelector(".meld-viewer-overlay");
		expect(overlay).toBeTruthy();
	});

	it("renders the image element with correct src", () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			viewerImageId: img.id,
			viewerMode: "gallery",
			activeModal: { type: "none" },
			viewScope: "default",
			settings: iconsVisibleSettings,
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
		mockUseImageViewerLogic.mockReturnValue(createMockViewerLogic(img));

		render(<ImageViewer />);
		const imgEl = document.querySelector(".meld-viewer-image") as HTMLImageElement;
		expect(imgEl).toBeTruthy();
		expect(imgEl.src).toContain(img.filename);
	});

	it("renders navigation buttons when icons are shown", () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			viewerImageId: img.id,
			viewerMode: "gallery",
			activeModal: { type: "none" },
			viewScope: "default",
			settings: iconsVisibleSettings,
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
		mockUseImageViewerLogic.mockReturnValue(createMockViewerLogic(img));

		render(<ImageViewer />);
		expect(document.querySelector(".meld-viewer-nav--prev")).toBeTruthy();
		expect(document.querySelector(".meld-viewer-nav--next")).toBeTruthy();
	});

	it("renders close button with correct title", () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			viewerImageId: img.id,
			viewerMode: "gallery",
			activeModal: { type: "none" },
			viewScope: "default",
			settings: iconsVisibleSettings,
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
		mockUseImageViewerLogic.mockReturnValue(createMockViewerLogic(img));

		render(<ImageViewer />);
		const closeBtn = screen.getByTitle("Close (Esc)");
		expect(closeBtn).toBeInTheDocument();
	});

	it("does not render navigation buttons when icons are hidden", () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			viewerImageId: img.id,
			viewerMode: "gallery",
			activeModal: { type: "none" },
			viewScope: "default",
			settings: iconsHiddenSettings,
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
		mockUseImageViewerLogic.mockReturnValue(createMockViewerLogic(img));

		render(<ImageViewer />);
		expect(document.querySelector(".meld-viewer-nav--prev")).toBeNull();
		expect(document.querySelector(".meld-viewer-nav--next")).toBeNull();
	});
});
