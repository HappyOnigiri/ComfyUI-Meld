import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../test/helpers/renderWithGallery";
import { Toast } from "./Toast";

vi.mock("../../store/GalleryContext", () => ({
	useGallery: vi.fn(),
}));

import { useGallery } from "../../store/GalleryContext";

describe("Toast", () => {
	let ctx: MockGalleryContext;

	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it("renders nothing when toastMessage is null", () => {
		ctx = createMockGalleryContext({ toastMessage: null });
		vi.mocked(useGallery).mockReturnValue(ctx);
		const { container } = render(<Toast />);
		expect(container.firstChild).toBeNull();
	});

	it("renders the toast message", () => {
		ctx = createMockGalleryContext({ toastMessage: "Saved!" });
		vi.mocked(useGallery).mockReturnValue(ctx);
		render(<Toast />);
		expect(screen.getByText("Saved!")).toBeInTheDocument();
	});

	it("applies error class when toastType is error", () => {
		ctx = createMockGalleryContext({
			toastMessage: "Failed",
			toastType: "error",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
		render(<Toast />);
		const el = screen.getByText("Failed");
		expect(el.className).toContain("meld-toast--error");
	});

	it("does not apply error class when toastType is info", () => {
		ctx = createMockGalleryContext({
			toastMessage: "Done",
			toastType: "info",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
		render(<Toast />);
		const el = screen.getByText("Done");
		expect(el.className).not.toContain("meld-toast--error");
	});

	it("dispatches HIDE_TOAST after 3 seconds", () => {
		ctx = createMockGalleryContext({ toastMessage: "Hello" });
		vi.mocked(useGallery).mockReturnValue(ctx);
		render(<Toast />);

		expect(ctx.dispatch).not.toHaveBeenCalled();
		vi.advanceTimersByTime(3000);
		expect(ctx.dispatch).toHaveBeenCalledWith({ type: "HIDE_TOAST" });
	});

	it("has role=status for accessibility", () => {
		ctx = createMockGalleryContext({ toastMessage: "Notification" });
		vi.mocked(useGallery).mockReturnValue(ctx);
		render(<Toast />);
		expect(screen.getByRole("status")).toBeInTheDocument();
	});
});
