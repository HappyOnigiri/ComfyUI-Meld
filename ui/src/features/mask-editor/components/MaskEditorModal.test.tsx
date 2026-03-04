import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MaskEditorModal } from "./MaskEditorModal";

// Mock dependencies
vi.mock("/scripts/api.js", () => ({ api: { fetchApi: vi.fn() } }));
vi.mock("../../../api", () => ({ parseJsonResponse: vi.fn() }));
vi.mock("../../../hooks/useEscapeToClose", () => ({ useEscapeToClose: vi.fn() }));
vi.mock("../../../logger", () => ({ logger: { log: vi.fn(), error: vi.fn() } }));
vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { images: [{ id: 1, filename: "test.jpg" }], lineageImages: [], settings: {} },
		dispatch: vi.fn(),
	}),
}));
vi.mock("../../../utils/url", () => ({ getImageViewUrl: vi.fn() }));
vi.mock("../../light-table/store", () => ({
	useLightTableStore: Object.assign(
		vi.fn(() => ({ images: {} })),
		{ getState: () => ({ images: {} }) },
	),
}));
vi.mock("../../workflows/hooks/useWorkflowExecution", () => ({
	useWorkflowExecution: () => ({ executeWorkflow: vi.fn() }),
}));
vi.mock("../hooks/useMaskInjection", () => ({
	useMaskInjection: () => ({ injectMaskToGraph: vi.fn() }),
}));
vi.mock("../utils/maskUtils", () => ({
	createMaskBitmap: vi.fn(() => ({ width: 100, height: 100, data: new Uint8ClampedArray(40000) })),
	isMaskEmpty: vi.fn(() => false),
	maskToImageData: vi.fn(() => new ImageData(100, 100)),
	stampShape: vi.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

describe("MaskEditorModal", () => {
	it("renders correctly", () => {
		const onClose = vi.fn();
		render(<MaskEditorModal imageId={1} mode="run" onClose={onClose} />);
		expect(screen.getByText("Select Mask Area")).toBeInTheDocument();

		// Test rendering a few tools
		expect(screen.getByTitle("Rectangle Tool")).toBeInTheDocument();
		expect(screen.getByTitle("Ellipse Tool")).toBeInTheDocument();
		expect(screen.getByTitle("Lasso Tool")).toBeInTheDocument();
	});

	it("handles tool selection", () => {
		render(<MaskEditorModal imageId={1} mode="run" onClose={vi.fn()} />);
		const ellipseBtn = screen.getByTitle("Ellipse Tool");
		fireEvent.click(ellipseBtn);
		expect(ellipseBtn).toHaveClass("meld-mask-tool-btn--active");
	});

	it("calls onClose when close button is clicked", () => {
		const onClose = vi.fn();
		render(<MaskEditorModal imageId={1} mode="run" onClose={onClose} />);
		const closeButtons = document.querySelectorAll(".meld-modal-close");
		if (closeButtons.length > 0) {
			fireEvent.click(closeButtons[0] as Element);
		}
		expect(onClose).toHaveBeenCalled();
	});

	it("simulates drawing and zooms", () => {
		render(<MaskEditorModal imageId={1} mode="run" onClose={vi.fn()} />);
		const overlay = document.querySelector(".meld-modal-overlay");
		expect(overlay).not.toBeNull();

		// Zoom in/out
		const zoomOut = screen.getByTitle("Zoom Out");
		fireEvent.click(zoomOut);
		const resetZoom = screen.getByTitle("Reset Zoom");
		fireEvent.click(resetZoom);

		// Draw Rect
		fireEvent.mouseDown(overlay!, { clientX: 100, clientY: 100, button: 0 });
		fireEvent.mouseMove(window, { clientX: 200, clientY: 200 });
		fireEvent.mouseUp(window, { clientX: 200, clientY: 200 });

		// Draw Ellipse
		fireEvent.click(screen.getByTitle("Ellipse Tool"));
		fireEvent.mouseDown(overlay!, { clientX: 300, clientY: 300, button: 0 });
		fireEvent.mouseMove(window, { clientX: 400, clientY: 400 });
		fireEvent.mouseUp(window, { clientX: 400, clientY: 400 });

		// Draw Lasso
		fireEvent.click(screen.getByTitle("Lasso Tool"));
		fireEvent.mouseDown(overlay!, { clientX: 100, clientY: 100, button: 0 });
		fireEvent.mouseMove(window, { clientX: 150, clientY: 150 });
		fireEvent.mouseMove(window, { clientX: 200, clientY: 100 });
		fireEvent.mouseUp(window, { clientX: 200, clientY: 100 });
	});
});
