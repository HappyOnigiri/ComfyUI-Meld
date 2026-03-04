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
							"viewer.loop": false,
							"viewer.small_image_mode": "original",
							"viewer.show_icons": false,
							"viewer.show_thumbnails": false,
							"viewer.delete_mode": "confirm",
							"viewer.show_details_by_default": false,
							"viewer.details.show_filename": "none",
							"viewer.details.show_dimensions": false,
							"viewer.details.show_created_at": false,
							"viewer.details.show_source": false,
							"viewer.details.show_model_name": false,
							"viewer.details.show_positive_prompt": false,
							"viewer.details.show_negative_prompt": false,
							"viewer.details.show_user_notes": "always",
							"viewer.details.show_tags": false,
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
		const { fireEvent } = await import("@testing-library/react");

		// thumbnail window size
		fireEvent.change(numberInputs[0]!, { target: { value: "20" } });
		expect(handleNumberChange).toHaveBeenCalledWith("viewer.thumbnail_window_size", "20", 1, 10000);
		fireEvent.blur(numberInputs[0]!);
		expect(handleNumberBlur).toHaveBeenCalledWith({ key: "viewer.thumbnail_window_size" });

		// max pos lines
		fireEvent.change(numberInputs[1]!, { target: { value: "10" } });
		expect(handleNumberChange).toHaveBeenCalledWith(
			"viewer.details.max_positive_prompt_lines",
			"10",
			1,
			100,
		);
		fireEvent.blur(numberInputs[1]!);
		expect(handleNumberBlur).toHaveBeenCalledWith({
			key: "viewer.details.max_positive_prompt_lines",
		});

		// max neg lines
		fireEvent.change(numberInputs[2]!, { target: { value: "10" } });
		expect(handleNumberChange).toHaveBeenCalledWith(
			"viewer.details.max_negative_prompt_lines",
			"10",
			1,
			100,
		);
		fireEvent.blur(numberInputs[2]!);
		expect(handleNumberBlur).toHaveBeenCalledWith({
			key: "viewer.details.max_negative_prompt_lines",
		});

		const toggles = screen.getAllByRole("checkbox");
		// Loop
		await user.click(toggles[0]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.loop", false);

		// Show icons
		await user.click(toggles[1]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.show_icons", false);

		// Show thumbnails
		await user.click(toggles[2]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.show_thumbnails", false);

		// Show details by default
		await user.click(toggles[3]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.show_details_by_default", false);

		// details.show_dimensions
		await user.click(toggles[4]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.details.show_dimensions", false);

		// details.show_created_at
		await user.click(toggles[5]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.details.show_created_at", false);

		// details.show_source
		await user.click(toggles[6]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.details.show_source", false);

		// details.show_model_name
		await user.click(toggles[7]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.details.show_model_name", false);

		// details.show_positive_prompt
		await user.click(toggles[8]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.details.show_positive_prompt", false);

		// details.show_negative_prompt
		await user.click(toggles[9]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.details.show_negative_prompt", false);

		// details.show_tags
		await user.click(toggles[10]!);
		expect(handleToggle).toHaveBeenCalledWith("viewer.details.show_tags", false);

		const selects = screen.getAllByRole("combobox");
		// small image mode
		await user.selectOptions(selects[0]!, "fit");
		expect(setLocalSettings).toHaveBeenCalled();

		// delete mode
		await user.selectOptions(selects[1]!, "target_only");
		expect(setLocalSettings).toHaveBeenCalled();

		// details.show_filename
		await user.selectOptions(selects[2]!, "filepath");
		expect(setLocalSettings).toHaveBeenCalled();

		// details.show_user_notes
		await user.selectOptions(selects[3]!, "if_present");
		expect(setLocalSettings).toHaveBeenCalled();
	});
});
