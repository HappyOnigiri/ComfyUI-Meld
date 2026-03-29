import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ConfirmModal } from "./ConfirmModal";

function renderModal(overrides = {}) {
	const props = {
		message: "Are you sure?",
		onConfirm: vi.fn(),
		onCancel: vi.fn(),
		details: [],
		...overrides,
	};
	render(<ConfirmModal {...props} />);
	return props;
}

describe("ConfirmModal", () => {
	it("renders the message", () => {
		renderModal();
		expect(screen.getByText("Are you sure?")).toBeInTheDocument();
	});

	it("renders OK and Cancel buttons", () => {
		renderModal();
		expect(screen.getByRole("button", { name: "OK" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
	});

	it("calls onConfirm when OK is clicked", async () => {
		const props = renderModal();
		await userEvent.click(screen.getByRole("button", { name: "OK" }));
		expect(props.onConfirm).toHaveBeenCalledTimes(1);
	});

	it("calls onCancel when Cancel is clicked", async () => {
		const props = renderModal();
		await userEvent.click(screen.getByRole("button", { name: "Cancel" }));
		expect(props.onCancel).toHaveBeenCalledTimes(1);
	});

	it("calls onCancel when overlay is clicked", async () => {
		const props = renderModal();
		const overlay = document.querySelector(".meld-confirm-modal__overlay");
		expect(overlay).toBeTruthy();
		await userEvent.click(overlay as HTMLElement);
		expect(props.onCancel).toHaveBeenCalled();
	});

	it("has alertdialog role for accessibility", () => {
		renderModal();
		expect(screen.getByRole("alertdialog")).toBeInTheDocument();
	});

	it("renders details when provided", () => {
		renderModal({ details: ["Light Table contents will be cleared."] });
		expect(screen.getByText("Light Table contents will be cleared.")).toBeInTheDocument();
	});

	it("requires matching text when requiredText is set", async () => {
		const props = renderModal({
			requiredText: "delete",
			requiredTextLabel: 'Type "delete" to continue.',
			confirmLabel: "Delete Database",
		});
		const confirmButton = screen.getByRole("button", { name: "Delete Database" });
		expect(confirmButton).toBeDisabled();

		await userEvent.type(screen.getByRole("textbox"), "delete");
		expect(confirmButton).not.toBeDisabled();

		await userEvent.click(confirmButton);
		expect(props.onConfirm).toHaveBeenCalledWith("delete");
	});

	it("focuses the first button on mount", () => {
		renderModal();
		// The first focusable element (Cancel button) should be focused
		expect(screen.getByRole("button", { name: "Cancel" })).toHaveFocus();
	});

	it("cycles focus with Tab and Shift+Tab", async () => {
		renderModal();
		const cancelBtn = screen.getByRole("button", { name: "Cancel" });
		const okBtn = screen.getByRole("button", { name: "OK" });

		expect(cancelBtn).toHaveFocus();

		// Press Tab
		await userEvent.tab();
		expect(okBtn).toHaveFocus();

		// Press Tab again (should wrap to first)
		await userEvent.tab();
		expect(cancelBtn).toHaveFocus();

		// Press Shift+Tab (should wrap to last)
		await userEvent.tab({ shift: true });
		expect(okBtn).toHaveFocus();
	});
});
