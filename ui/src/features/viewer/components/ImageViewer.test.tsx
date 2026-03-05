import { fireEvent, render, screen } from "@testing-library/react";
import type { MouseEventHandler } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../../test/factories/image";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../../test/helpers/renderWithGallery";
import type { GalleryState, Settings } from "../../../types";
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
const mockExecuteWorkflow = vi.fn();
vi.mock("../../workflows/hooks/useWorkflowExecution", () => ({
	useWorkflowExecution: vi.fn(() => ({
		executeWorkflow: mockExecuteWorkflow,
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
	NoteEditModal: ({ onClose }: Record<string, unknown>) => (
		<div data-testid="note-edit-modal" onClick={onClose as MouseEventHandler} />
	),
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
	TagEditModal: ({ onClose }: Record<string, unknown>) => (
		<div data-testid="tag-edit-modal" onClick={onClose as MouseEventHandler} />
	),
}));
vi.mock("../../mask-editor/components/MaskEditorModal", () => ({
	MaskEditorModal: ({ onClose }: Record<string, unknown>) => (
		<div data-testid="mask-editor-modal" onClick={onClose as MouseEventHandler} />
	),
}));
vi.mock("../../mask-editor/components/MaskSequenceModal", () => ({
	MaskSequenceModal: ({ onSuccess, onClose }: Record<string, unknown>) => (
		<div
			data-testid="mask-sequence-modal"
			onClick={onSuccess as MouseEventHandler}
			onContextMenu={onClose as MouseEventHandler}
		/>
	),
}));
vi.mock("../../workflows/components/NodeSelectionModal", () => ({
	NodeSelectionModal: ({ onSelect }: Record<string, unknown>) => (
		<div
			data-testid="node-selection-modal"
			onClick={() => (onSelect as (id: string) => void)("node1")}
		/>
	),
}));
vi.mock("../../workflows/components/WorkflowSelectionModal", () => ({
	WorkflowSelectionModal: ({ onExecute }: Record<string, unknown>) => (
		<div
			data-testid="workflow-selection-modal"
			onClick={() => (onExecute as (wf: string, node: string) => void)("workflow-name", "node1")}
		/>
	),
}));
vi.mock("../../workflows/utils/injectImageToGraph", () => ({
	injectImageToGraph: vi.fn(),
}));
vi.mock("../../../utils/url", () => ({
	getImageViewUrl: (img: { filename: string }) => `/api/view/${img.filename}`,
}));

import { useGallery } from "../../../store/GalleryContext";
import { initialState } from "../../../store/galleryReducer";
import { useWorkflowExecution } from "../../workflows/hooks/useWorkflowExecution";
import { injectImageToGraph } from "../../workflows/utils/injectImageToGraph";

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
		vi.clearAllMocks();
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

	it("interacts with navigation and close buttons", () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			viewerImageId: img.id,
			viewerMode: "gallery",
			activeModal: { type: "none" },
			viewScope: "default",
			settings: iconsVisibleSettings,
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		const handlePrevious = vi.fn();
		const handleNext = vi.fn();
		const toggleFullscreen = vi.fn();

		mockUseImageViewerLogic.mockReturnValue(
			createMockViewerLogic(img, {
				handlePrevious,
				handleNext,
				toggleFullscreen,
			}),
		);

		render(<ImageViewer />);

		const prevBtn = document.querySelector(".meld-viewer-nav--prev") as HTMLButtonElement;
		fireEvent.click(prevBtn);
		expect(handlePrevious).toHaveBeenCalled();

		const nextBtn = document.querySelector(".meld-viewer-nav--next") as HTMLButtonElement;
		fireEvent.click(nextBtn);
		expect(handleNext).toHaveBeenCalled();

		const fullscreenBtn = screen.getByTitle("Fullscreen (F/Enter)");
		fireEvent.click(fullscreenBtn);
		expect(toggleFullscreen).toHaveBeenCalled();

		const closeBtn = screen.getByTitle("Close (Esc)");
		fireEvent.click(closeBtn);
		expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_VIEWER" });
	});

	describe("renders modals and invokes callbacks", () => {
		const img = createTestImage();

		const testModals = [
			{
				type: "workflow_selection",
				images: [img],
				maskFilename: "mask.png",
				isMaskSequence: false,
			},
			{ type: "workflow_selection", images: [img, img], maskFilename: "", isMaskSequence: true },
			{ type: "node_selection", image: img, nodes: [] },
			{ type: "error", message: "err" },
			{ type: "delete_confirm", imageIds: [1], hasLineage: false, isPermanent: false },
			{ type: "parent_selection", imageId: 1 },
			{ type: "import" },
			{ type: "settings" },
			{ type: "tag_edit", imageIds: [1], tags: [] },
			{ type: "mask_editor", imageId: 1, mode: "create" },
			{ type: "mask_sequence_step", images: [img, img], currentIndex: 0, workflowName: "wf" },
			{ type: "mask_sequence_step", images: [img, img], currentIndex: 1, workflowName: "wf" },
			{ type: "note_edit", imageId: 1, notes: "note" },
		];

		testModals.forEach((modal, idx) => {
			it(`renders and interacts with modal ${modal.type} (${idx})`, () => {
				ctx = createMockGalleryContext({
					viewerImageId: img.id,
					viewerMode: "gallery",
					activeModal: modal as GalleryState["activeModal"],
					viewScope: "default",
					settings: iconsVisibleSettings,
				});
				vi.mocked(useGallery).mockReturnValue(ctx);
				mockUseImageViewerLogic.mockReturnValue(createMockViewerLogic(img));

				const { container } = render(<ImageViewer />);
				expect(container).toBeDefined();

				const modalIdMap: Record<string, string> = {
					workflow_selection: "workflow-selection-modal",
					node_selection: "node-selection-modal",
					mask_sequence_step: "mask-sequence-modal",
					tag_edit: "tag-edit-modal",
					mask_editor: "mask-editor-modal",
					note_edit: "note-edit-modal",
					error: "error-modal",
					delete_confirm: "delete-confirm-modal",
					parent_selection: "parent-selection-modal",
					import: "import-modal",
					settings: "settings-modal",
				};

				const expectedId = modalIdMap[modal.type];
				expect(expectedId).toBeDefined();
				if (!expectedId) throw new Error(`Missing test ID for modal type: ${modal.type}`);
				const el = screen.getByTestId(expectedId);

				fireEvent.click(el); // triggers main callback

				// Assertions for onClick
				switch (modal.type) {
					case "tag_edit":
					case "mask_editor":
					case "note_edit":
						expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
						break;
					case "node_selection":
						expect(injectImageToGraph).toHaveBeenCalledWith(img, "node1");
						break;
					case "workflow_selection":
						if (modal.isMaskSequence) {
							expect(ctx.dispatch).toHaveBeenCalledWith(
								expect.objectContaining({ type: "OPEN_MODAL" }),
							);
						} else {
							expect(mockExecuteWorkflow).toHaveBeenCalled();
						}
						break;
					case "mask_sequence_step":
						if (modal.currentIndex === 0) {
							// onSuccess for index 0 -> opens index 1
							expect(ctx.dispatch).toHaveBeenCalledWith(
								expect.objectContaining({ type: "OPEN_MODAL" }),
							);
						} else {
							// onSuccess for last index -> closes
							expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
						}
						break;
				}

				fireEvent.contextMenu(el); // triggers alternate callback like onClose
				if (modal.type === "mask_sequence_step") {
					expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
				}
			});
		});
	});
});
