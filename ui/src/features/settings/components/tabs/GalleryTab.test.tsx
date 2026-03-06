import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import type { Settings } from "../../../../types";
import { GalleryTab } from "./GalleryTab";

vi.mock("../../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { settings: {} },
		dispatch: vi.fn(),
	}),
}));

describe("GalleryTab", () => {
	it("renders and interacts with inputs", async () => {
		const handleToggle = vi.fn();
		const handleNumberChange = vi.fn();
		const handleNumberBlur = vi.fn();
		const setLocalSettings = vi.fn();
		const user = userEvent.setup();
		const { fireEvent } = await import("@testing-library/react");

		expect(() =>
			render(
				<GalleryTab
					localSettings={
						{
							"sidebar.show_filename": "filename",
							"sidebar.show_dimensions": false,
							"sidebar.show_model_name": false,
							"sidebar.show_positive_prompt": false,
							"sidebar.show_negative_prompt": false,
							"sidebar.show_user_notes": "always",
							"sidebar.show_tags": false,
							"sidebar.show_created_at": false,
							"gallery.show_parent_images": false,
							"gallery.show_parent_image": false,
							"search.quick_suggestions": false,
							"search.input_suggest": false,
							"gallery.quick_shortcut.1": "none",
							"gallery.quick_shortcut.2": "none",
							"gallery.quick_shortcut.3": "none",
						} as unknown as Settings
					}
					setLocalSettings={setLocalSettings}
					handleToggle={handleToggle}
					handleNumberChange={handleNumberChange}
					handleNumberBlur={handleNumberBlur}
					thumbnailSizeInput="100"
					initialLoadCountInput="50"
					maxLoadCountInput="2000"
				/>,
			),
		).not.toThrow();

		const numberInputs = screen.getAllByRole("spinbutton");
		// thumbnail size
		fireEvent.change(numberInputs[0]!, { target: { value: "150" } });
		expect(handleNumberChange).toHaveBeenCalledWith("sidebar.thumbnail_size", "150", 50, 500);

		fireEvent.blur(numberInputs[0]!);
		expect(handleNumberBlur).toHaveBeenCalledWith({ key: "sidebar.thumbnail_size" });

		// Show filename/path select
		const selects = screen.getAllByRole("combobox");
		await user.selectOptions(selects[0]!, "filepath");
		expect(setLocalSettings).toHaveBeenCalled();

		// Toggles
		const toggles = screen.getAllByRole("checkbox");

		// Show dimensions
		await user.click(toggles[0]!);
		expect(handleToggle).toHaveBeenCalledWith("sidebar.show_dimensions", false);

		// Show created at
		await user.click(toggles[1]!);
		expect(handleToggle).toHaveBeenCalledWith("sidebar.show_created_at", false);

		// Show parent images
		await user.click(toggles[2]!);
		expect(handleToggle).toHaveBeenCalledWith("gallery.show_parent_images", false);

		// Show parent image info
		await user.click(toggles[3]!);
		expect(handleToggle).toHaveBeenCalledWith("gallery.show_parent_image", false);

		// Show model
		await user.click(toggles[4]!);
		expect(handleToggle).toHaveBeenCalledWith("sidebar.show_model_name", false);

		// Show pos prompt
		await user.click(toggles[5]!);
		expect(handleToggle).toHaveBeenCalledWith("sidebar.show_positive_prompt", false);

		// Show neg prompt
		await user.click(toggles[6]!);
		expect(handleToggle).toHaveBeenCalledWith("sidebar.show_negative_prompt", false);

		// Show tags
		await user.click(toggles[7]!);
		expect(handleToggle).toHaveBeenCalledWith("sidebar.show_tags", false);

		// Quick suggestions
		await user.click(toggles[8]!);
		expect(handleToggle).toHaveBeenCalledWith("search.quick_suggestions", false);

		// Input suggest
		await user.click(toggles[9]!);
		expect(handleToggle).toHaveBeenCalledWith("search.input_suggest", false);

		// User notes select
		await user.selectOptions(selects[1]!, "if_present");
		expect(setLocalSettings).toHaveBeenCalled();

		// Initial load count
		fireEvent.change(numberInputs[1]!, { target: { value: "100" } });
		expect(handleNumberChange).toHaveBeenCalledWith("gallery.initial_load_count", "100", 10, 1000);
		fireEvent.blur(numberInputs[1]!);
		expect(handleNumberBlur).toHaveBeenCalledWith({ key: "gallery.initial_load_count" });

		// Max load count
		fireEvent.change(numberInputs[2]!, { target: { value: "5000" } });
		expect(handleNumberChange).toHaveBeenCalledWith("gallery.max_load_count", "5000", 10, 1000000);
		fireEvent.blur(numberInputs[2]!);
		expect(handleNumberBlur).toHaveBeenCalledWith({ key: "gallery.max_load_count" });

		// Quick shortcuts
		await user.selectOptions(selects[2]!, "delete_or_trash");
		expect(setLocalSettings).toHaveBeenCalled();
	});
});
