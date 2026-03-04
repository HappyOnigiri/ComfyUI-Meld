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

		expect(() =>
			render(
				<GalleryTab
					localSettings={
						{
							"sidebar.show_filename": "filename",
							"sidebar.show_dimensions": false,
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
		await user.type(numberInputs[0]!, "1");
		expect(handleNumberChange).toHaveBeenCalled();

		numberInputs[0]!.focus();
		numberInputs[0]!.blur();
		expect(handleNumberBlur).toHaveBeenCalled();

		const toggle = screen.getAllByRole("checkbox")[0]!;
		await user.click(toggle);
		expect(handleToggle).toHaveBeenCalled();

		const select = screen.getAllByRole("combobox")[0]!;
		await user.selectOptions(select, "none");
		expect(setLocalSettings).toHaveBeenCalled();
	});
});
