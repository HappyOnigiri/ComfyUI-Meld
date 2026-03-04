import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import type { Settings } from "../../../../types";
import { ViewTab } from "./ViewTab";

vi.mock("../../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { settings: {} },
		dispatch: vi.fn(),
	}),
}));

describe("ViewTab", () => {
	it("renders and interacts with inputs", async () => {
		const handleToggle = vi.fn();
		const handleNumberChange = vi.fn();
		const handleNumberBlur = vi.fn();
		const setLocalSettings = vi.fn();
		const user = userEvent.setup();

		expect(() =>
			render(
				<ViewTab
					localSettings={
						{
							"viewer.loop": true,
							"viewer.small_image_mode": "original",
							"viewer.delete_mode": "target_only",
							"viewer.details.show_filename": "none",
						} as unknown as Settings
					}
					setLocalSettings={setLocalSettings}
					handleToggle={handleToggle}
					handleNumberChange={handleNumberChange}
					handleNumberBlur={handleNumberBlur}
					thumbnailWindowSizeInput="10"
					maxPositivePromptLinesInput="5"
					maxNegativePromptLinesInput="5"
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
		await user.selectOptions(select, "fit");
		expect(setLocalSettings).toHaveBeenCalled();
	});
});
