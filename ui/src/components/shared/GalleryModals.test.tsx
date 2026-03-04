import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../test/helpers/renderWithGallery";
import { GalleryModals } from "./GalleryModals";

// Mock useGallery
vi.mock("../../store/GalleryContext", () => ({
	useGallery: vi.fn(),
}));

// Mock useWorkflowExecution
vi.mock("../../features/workflows/hooks/useWorkflowExecution", () => ({
	useWorkflowExecution: vi.fn(() => ({
		executeWorkflow: vi.fn(),
	})),
}));

// Mock child modals to keep tests focused on GalleryModals logic
vi.mock("../../features/importer/components/ImportModal", () => ({
	ImportModal: () => <div data-testid="import-modal">ImportModal</div>,
}));
vi.mock("../../features/light-table/components/DownloadModal", () => ({
	DownloadModal: () => <div data-testid="download-modal">DownloadModal</div>,
}));
vi.mock("../../features/mask-editor/components/MaskEditorModal", () => ({
	MaskEditorModal: () => <div data-testid="mask-editor-modal">MaskEditorModal</div>,
}));
vi.mock("../../features/mask-editor/components/MaskSequenceModal", () => ({
	MaskSequenceModal: () => <div data-testid="mask-sequence-modal">MaskSequenceModal</div>,
}));
vi.mock("../../features/settings/components/SettingsModal", () => ({
	SettingsModal: () => <div data-testid="settings-modal">SettingsModal</div>,
}));
vi.mock("../../features/tags/components/TagEditModal", () => ({
	TagEditModal: () => <div data-testid="tag-edit-modal">TagEditModal</div>,
}));
vi.mock("../../features/viewer/components/NoteEditModal", () => ({
	NoteEditModal: () => <div data-testid="note-edit-modal">NoteEditModal</div>,
}));
vi.mock("../../features/workflows/components/NodeSelectionModal", () => ({
	NodeSelectionModal: () => <div data-testid="node-selection-modal">NodeSelectionModal</div>,
}));
vi.mock("../../features/workflows/components/WorkflowSelectionModal", () => ({
	WorkflowSelectionModal: () => (
		<div data-testid="workflow-selection-modal">WorkflowSelectionModal</div>
	),
}));
vi.mock("../../features/workflows/utils/injectImageToGraph", () => ({
	injectImageToGraph: vi.fn(),
}));
vi.mock("./ConfirmModal", () => ({
	ConfirmModal: ({ message }: { message: string }) => (
		<div data-testid="confirm-modal">{message}</div>
	),
}));
vi.mock("./DeleteConfirmModal", () => ({
	DeleteConfirmModal: () => <div data-testid="delete-confirm-modal">DeleteConfirmModal</div>,
}));
vi.mock("./ErrorModal", () => ({
	ErrorModal: ({ message }: { message: string }) => <div data-testid="error-modal">{message}</div>,
}));
vi.mock("./ParentSelectionModal", () => ({
	ParentSelectionModal: () => <div data-testid="parent-selection-modal">ParentSelectionModal</div>,
}));
vi.mock("./Toast", () => ({
	Toast: () => <div data-testid="toast">Toast</div>,
}));

import { useGallery } from "../../store/GalleryContext";

describe("GalleryModals", () => {
	let ctx: MockGalleryContext;

	it("returns null when viewer is open (viewerImageId is not null)", () => {
		ctx = createMockGalleryContext({ viewerImageId: 42 });
		vi.mocked(useGallery).mockReturnValue(ctx);

		const { container } = render(<GalleryModals />);
		expect(container.innerHTML).toBe("");
	});

	it("renders nothing extra when activeModal is none and no toast", () => {
		ctx = createMockGalleryContext({
			viewerImageId: null,
			activeModal: { type: "none" },
			confirmModal: null,
			toastMessage: null,
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<GalleryModals />);
		expect(screen.queryByTestId("confirm-modal")).not.toBeInTheDocument();
		expect(screen.queryByTestId("toast")).not.toBeInTheDocument();
	});

	it("renders import modal when activeModal type is import", () => {
		ctx = createMockGalleryContext({
			viewerImageId: null,
			activeModal: { type: "import" },
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<GalleryModals />);
		expect(screen.getByTestId("import-modal")).toBeInTheDocument();
	});

	it("renders settings modal when activeModal type is settings", () => {
		ctx = createMockGalleryContext({
			viewerImageId: null,
			activeModal: { type: "settings" },
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<GalleryModals />);
		expect(screen.getByTestId("settings-modal")).toBeInTheDocument();
	});

	it("renders error modal via portal when activeModal type is error", () => {
		ctx = createMockGalleryContext({
			viewerImageId: null,
			activeModal: { type: "error", message: "Something went wrong" },
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<GalleryModals />);
		expect(screen.getByTestId("error-modal")).toBeInTheDocument();
	});

	it("renders toast when toastMessage is present", () => {
		ctx = createMockGalleryContext({
			viewerImageId: null,
			toastMessage: "Success!",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<GalleryModals />);
		expect(screen.getByTestId("toast")).toBeInTheDocument();
	});

	it("renders confirm modal when confirmModal state is present", () => {
		ctx = createMockGalleryContext({
			viewerImageId: null,
			confirmModal: {
				message: "Confirm this?",
				onConfirm: vi.fn(),
				onCancel: vi.fn(),
			},
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<GalleryModals />);
		expect(screen.getByTestId("confirm-modal")).toBeInTheDocument();
	});
});
