import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../test/helpers/renderWithGallery";
import { ErrorModal } from "./ErrorModal";

vi.mock("../../store/GalleryContext", () => ({
	useGallery: vi.fn(),
}));

import { useGallery } from "../../store/GalleryContext";

describe("ErrorModal", () => {
	let ctx: MockGalleryContext;

	beforeEach(() => {
		ctx = createMockGalleryContext();
		vi.mocked(useGallery).mockReturnValue(ctx);
	});

	it("renders the error message", () => {
		render(<ErrorModal message="Something went wrong" />);
		expect(screen.getByText("Something went wrong")).toBeInTheDocument();
	});

	it("renders the Error heading", () => {
		render(<ErrorModal message="oops" />);
		// Use heading role to find the Error text specifically
		expect(screen.getByRole("heading", { name: "Error" })).toBeInTheDocument();
	});

	it("dispatches CLOSE_MODAL when OK button is clicked", async () => {
		render(<ErrorModal message="oops" />);
		await userEvent.click(screen.getByRole("button", { name: "OK" }));
		expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
	});

	it("dispatches CLOSE_MODAL when overlay is clicked", async () => {
		render(<ErrorModal message="oops" />);
		const overlay = document.querySelector(".meld-modal-overlay");
		expect(overlay).toBeTruthy();
		await userEvent.click(overlay as HTMLElement);
		expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
	});

	it("dispatches CLOSE_MODAL when close (X) button is clicked", async () => {
		render(<ErrorModal message="oops" />);
		const closeButton = document.querySelector(".meld-modal-close");
		expect(closeButton).toBeTruthy();
		await userEvent.click(closeButton as HTMLElement);
		expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
	});
});
