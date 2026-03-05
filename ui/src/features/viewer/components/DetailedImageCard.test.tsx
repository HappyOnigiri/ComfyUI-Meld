import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { initialState } from "../../../store/galleryReducer";
import { createTestImage, resetImageIdCounter } from "../../../test/factories/image";
import { DetailedImageCard } from "./DetailedImageCard";

// Mock useImageCardLogic
const mockUseImageCardLogic = vi.fn();
vi.mock("../hooks/useImageCardLogic", () => ({
	useImageCardLogic: (...args: unknown[]) => mockUseImageCardLogic(...args),
}));

// Mock light-table store
vi.mock("../../light-table/store", () => ({
	useLightTableStore: Object.assign(
		vi.fn(() => false),
		{
			getState: vi.fn(() => ({ setIsOpen: vi.fn() })),
		},
	),
}));

// Mock ImageCardMenu
vi.mock("./ImageCardMenu", () => ({
	ImageCardMenu: ({
		onRestore,
		onDelete,
		onEditSource,
		onAddUnifiedLoader,
		onRestoreWorkflow,
		onSendToWorkflow,
		onRunWithWorkflow,
		onRunWithMask,
	}: {
		onRestore: () => void;
		onDelete: () => void;
		onEditSource: () => void;
		onAddUnifiedLoader: () => void;
		onRestoreWorkflow: () => void;
		onSendToWorkflow: () => void;
		onRunWithWorkflow: () => void;
		onRunWithMask: (mode: string) => void;
	}) => (
		<div data-testid="image-card-menu">
			<button type="button" onClick={onRestore}>
				Restore
			</button>
			<button type="button" onClick={onDelete}>
				Delete
			</button>
			<button type="button" onClick={onEditSource}>
				Edit Source
			</button>
			<button type="button" onClick={onAddUnifiedLoader}>
				Add Loader
			</button>
			<button type="button" onClick={onRestoreWorkflow}>
				Restore Workflow
			</button>
			<button type="button" onClick={onSendToWorkflow}>
				Send
			</button>
			<button type="button" onClick={onRunWithWorkflow}>
				Run
			</button>
			<button type="button" onClick={() => onRunWithMask("bg")}>
				Run Mask
			</button>
		</div>
	),
}));

// Mock PromptPopup
vi.mock("./PromptPopup", () => ({
	PromptPopup: ({ onClose, onCopy }: { onClose: () => void; onCopy: (text: string) => void }) => (
		<div data-testid="prompt-popup">
			<button type="button" onClick={onClose}>
				Close Popup
			</button>
			<button type="button" onClick={() => onCopy("test-copy")}>
				Copy Popup
			</button>
		</div>
	),
}));

function createMockCardLogic(
	overrides: { settings?: Record<string, unknown>; [key: string]: unknown } = {},
) {
	const { settings, ...rest } = overrides;
	return {
		state: {
			...initialState,
			settings: {
				...initialState.settings,
				...settings,
			},
		},
		dispatch: vi.fn(),
		isSelected: false,
		viewMode: "grid_details",
		popupContent: null,
		setPopupContent: vi.fn(),
		isMenuOpen: false,
		setIsMenuOpen: vi.fn(),
		copiedLabel: null,
		popupCopied: false,
		menuRef: { current: null },
		parentChain: [],
		displayFilename: "photo.png",
		imgSrc: "/view?filename=photo.png",
		handleCopy: vi.fn(),
		handleClick: vi.fn(),
		handleSelectToggle: vi.fn(),
		handleContainerClick: vi.fn(),
		handleMouseDown: vi.fn(),
		handleKeyDown: vi.fn(),
		handleRestoreWorkflow: vi.fn(),
		handleAddUnifiedLoader: vi.fn(),
		handleEditSource: vi.fn(),
		handleEditTags: vi.fn(),
		handleEditNotes: vi.fn(),
		handleSendToWorkflow: vi.fn(),
		handleRestore: vi.fn(),
		handleDelete: vi.fn(),
		handleRunWithWorkflow: vi.fn(),
		handleRunWithMask: vi.fn(),
		handleUpdateUserNotes: vi.fn(),
		fetchFullImageDetails: vi.fn(),
		...rest,
	};
}

describe("DetailedImageCard", () => {
	beforeEach(() => {
		resetImageIdCounter();
	});

	it("renders the thumbnail image", () => {
		mockUseImageCardLogic.mockReturnValue(
			createMockCardLogic({ imgSrc: "/view?filename=landscape.png" }),
		);

		const image = createTestImage({ filename: "landscape.png" });
		render(<DetailedImageCard image={image} />);

		const img = screen.getByAltText("landscape.png");
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute("src", "/view?filename=landscape.png");
	});

	it("applies selected class when isSelected is true", () => {
		mockUseImageCardLogic.mockReturnValue(createMockCardLogic({ isSelected: true }));
		const image = createTestImage();
		const { container } = render(<DetailedImageCard image={image} />);

		const card = container.querySelector(".meld-image-card");
		expect(card?.className).toContain("meld-image-card--selected");
	});

	it("does not apply selected class when isSelected is false", () => {
		mockUseImageCardLogic.mockReturnValue(createMockCardLogic({ isSelected: false }));
		const image = createTestImage();
		const { container } = render(<DetailedImageCard image={image} />);

		const card = container.querySelector(".meld-image-card");
		expect(card?.className).not.toContain("meld-image-card--selected");
	});

	it("renders ImageCardMenu component", () => {
		mockUseImageCardLogic.mockReturnValue(createMockCardLogic());
		const image = createTestImage();
		render(<DetailedImageCard image={image} />);

		expect(screen.getByTestId("image-card-menu")).toBeInTheDocument();
	});

	it("has draggable attribute", () => {
		mockUseImageCardLogic.mockReturnValue(createMockCardLogic());
		const image = createTestImage();
		const { container } = render(<DetailedImageCard image={image} />);

		const card = container.querySelector(".meld-image-card");
		expect(card).toHaveAttribute("draggable", "true");
	});

	it("interacts with various card elements", async () => {
		const handleSelectToggle = vi.fn();
		const handleClick = vi.fn();
		const setPopupContent = vi.fn();
		const handleCopy = vi.fn();
		const handleEditTags = vi.fn();
		const handleEditNotes = vi.fn();
		const fetchFullImageDetails = vi.fn().mockResolvedValue({
			model_name: "test-model",
			positive_prompt: "pos",
			negative_prompt: "neg",
		});

		const mockLogic = createMockCardLogic({
			handleSelectToggle,
			handleClick,
			setPopupContent,
			handleCopy,
			handleEditTags,
			handleEditNotes,
			fetchFullImageDetails,
			settings: {
				"sidebar.show_model_name": true,
				"sidebar.show_positive_prompt": true,
				"sidebar.show_negative_prompt": true,
				"sidebar.show_tags": true,
				"sidebar.show_user_notes": "always",
			},
		});

		mockUseImageCardLogic.mockReturnValue(mockLogic);

		const image = createTestImage({
			tags: ["test-tag"],
			user_notes: "note",
			positive_prompt: "my_positive",
			negative_prompt: "my_negative",
		});
		render(<DetailedImageCard image={image} />);
		const user = userEvent.setup();

		// Checkbox
		await user.click(screen.getByRole("checkbox"));
		expect(handleSelectToggle).toHaveBeenCalled();

		// Image click
		const img = screen.getByRole("img");
		await user.click(img);
		expect(handleClick).toHaveBeenCalled();

		// Model click to copy
		const modelLabel = screen.getByText("Model");
		await user.click(modelLabel);
		expect(fetchFullImageDetails).toHaveBeenCalledWith(image.id);
		expect(handleCopy).toHaveBeenCalled();

		// Positive Prompt click to popup
		const posContent = screen.getByText("my_positive", {
			selector: ".meld-image-card__meta-content",
		});
		await user.click(posContent);
		expect(setPopupContent).toHaveBeenCalled();

		// Negative Prompt click to popup
		const negContent = screen.getByText("my_negative", {
			selector: ".meld-image-card__meta-content",
		});
		await user.click(negContent);
		expect(setPopupContent).toHaveBeenCalled();

		// Tags click
		const tagsLabel = screen.getByText("test-tag");
		await user.click(tagsLabel);
		expect(handleEditTags).toHaveBeenCalled();

		// Notes click
		const notesContent = screen.getByText("note", { selector: ".meld-image-card__notes-preview" });
		await user.click(notesContent);
		expect(handleEditNotes).toHaveBeenCalled();

		// Trigger Menu UI interactions
		expect(screen.getByText("Restore")).toBeInTheDocument();
		await user.click(screen.getByText("Restore"));
		await user.click(screen.getByText("Delete"));
		await user.click(screen.getByText("Edit Source"));
		await user.click(screen.getByText("Add Loader"));
		await user.click(screen.getByText("Send"));
		await user.click(screen.getByText("Run"));
		await user.click(screen.getByText("Run Mask"));

		// Re-render with parentChain to test lineage click
		mockUseImageCardLogic.mockReturnValue(
			createMockCardLogic({
				parentChain: [{ id: 99, imgSrc: "parent.png" }],
				settings: { "gallery.show_parent_image": true },
				popupContent: { title: "title", text: "text" },
			}),
		);
		render(<DetailedImageCard image={image} />);
		const sourceThumb = screen.getAllByAltText("source thumb")[0];
		if (sourceThumb) {
			await user.click(sourceThumb);
		}

		// Trigger Popup UI interactions if it was rendered
		expect(screen.getByText("Close Popup")).toBeInTheDocument();
		await user.click(screen.getByText("Close Popup"));
		await user.click(screen.getByText("Copy Popup"));
	});
});
