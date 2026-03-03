import { render, screen } from "@testing-library/react";
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
	ImageCardMenu: () => <div data-testid="image-card-menu" />,
}));

// Mock PromptPopup
vi.mock("./PromptPopup", () => ({
	PromptPopup: () => <div data-testid="prompt-popup" />,
}));

function createMockCardLogic(overrides = {}) {
	return {
		state: { ...initialState },
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
		...overrides,
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
});
