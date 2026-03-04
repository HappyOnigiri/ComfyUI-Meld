import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { initialState } from "../../store/galleryReducer";
import { createTestImage, resetImageIdCounter } from "../../test/factories/image";
import { SimpleImageCard } from "./SimpleImageCard";

// Mock useImageCardLogic
const mockUseImageCardLogic = vi.fn();
vi.mock("../../features/viewer/hooks/useImageCardLogic", () => ({
	useImageCardLogic: (...args: unknown[]) => mockUseImageCardLogic(...args),
}));

// Mock light-table store
vi.mock("../../features/light-table/store", () => ({
	useLightTableStore: Object.assign(
		vi.fn(() => false),
		{
			getState: vi.fn(() => ({ setIsOpen: vi.fn() })),
		},
	),
}));

// Mock ImageCardMenu
vi.mock("../../features/viewer/components/ImageCardMenu", () => ({
	ImageCardMenu: () => <div data-testid="image-card-menu" />,
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
		displayFilename: "test.png",
		imgSrc: "/view?filename=test.png",
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

describe("SimpleImageCard", () => {
	beforeEach(() => {
		resetImageIdCounter();
	});

	it("renders the thumbnail image", () => {
		const logic = createMockCardLogic({
			imgSrc: "/view?filename=photo.png",
		});
		mockUseImageCardLogic.mockReturnValue(logic);

		const image = createTestImage({ filename: "photo.png" });
		render(<SimpleImageCard image={image} />);

		const img = screen.getByAltText("photo.png");
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute("src", "/view?filename=photo.png");
	});

	it("applies selected class when isSelected is true", () => {
		mockUseImageCardLogic.mockReturnValue(createMockCardLogic({ isSelected: true }));
		const image = createTestImage();
		const { container } = render(<SimpleImageCard image={image} />);

		const card = container.querySelector(".meld-image-card");
		expect(card?.className).toContain("meld-image-card--selected");
	});

	it("does not apply selected class when isSelected is false", () => {
		mockUseImageCardLogic.mockReturnValue(createMockCardLogic({ isSelected: false }));
		const image = createTestImage();
		const { container } = render(<SimpleImageCard image={image} />);

		const card = container.querySelector(".meld-image-card");
		expect(card?.className).not.toContain("meld-image-card--selected");
	});

	it("renders the selection checkbox", () => {
		mockUseImageCardLogic.mockReturnValue(createMockCardLogic());
		const image = createTestImage();
		render(<SimpleImageCard image={image} />);

		expect(screen.getByRole("checkbox", { name: "Toggle selection" })).toBeInTheDocument();
	});

	it("has draggable attribute", () => {
		mockUseImageCardLogic.mockReturnValue(createMockCardLogic());
		const image = createTestImage();
		const { container } = render(<SimpleImageCard image={image} />);

		const card = container.querySelector(".meld-image-card");
		expect(card).toHaveAttribute("draggable", "true");
	});
});
