import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import type { Settings } from "../../../../types";
import { SystemTab } from "./SystemTab";

describe("SystemTab", () => {
	it("renders without crashing", () => {
		const dummySettings = {} as Settings;
		const { container } = render(
			<SystemTab
				localSettings={dummySettings}
				setLocalSettings={vi.fn()}
				handleNumberChange={vi.fn()}
				handleNumberBlur={vi.fn()}
				handleToggle={vi.fn()}
				handleViewTrash={vi.fn()}
				handleClearThumbnailCache={vi.fn()}
				lineageMaxDepthInput="5"
				trashRetentionDaysInput="30"
				autoLinkPhashThresholdInput="92"
				suggestPhashThresholdInput="82"
			/>,
		);
		expect(container).toBeTruthy();
	});

	it("calls handler functions on interactions", async () => {
		const user = userEvent.setup();
		const setLocalSettings = vi.fn();
		const handleNumberChange = vi.fn();
		const handleNumberBlur = vi.fn();
		const handleToggle = vi.fn();
		const handleViewTrash = vi.fn();
		const handleClearThumbnailCache = vi.fn();

		const dummySettings = {
			"gallery.matching_strategy": "phash_created",
			"gallery.inherit_tags": false,
		} as Settings;

		const { getByLabelText, getByRole, getByText } = render(
			<SystemTab
				localSettings={dummySettings}
				setLocalSettings={setLocalSettings}
				handleNumberChange={handleNumberChange}
				handleNumberBlur={handleNumberBlur}
				handleToggle={handleToggle}
				handleViewTrash={handleViewTrash}
				handleClearThumbnailCache={handleClearThumbnailCache}
				lineageMaxDepthInput="5"
				trashRetentionDaysInput="30"
				autoLinkPhashThresholdInput="92"
				suggestPhashThresholdInput="82"
			/>,
		);

		const { fireEvent } = await import("@testing-library/react");

		// matching strategy
		const strategySelect = getByRole("combobox");
		await user.selectOptions(strategySelect, "filename_phash");
		expect(setLocalSettings).toHaveBeenCalled();

		// Auto linking threshold
		const thresholdInput = screen.getAllByRole("spinbutton")[0] as HTMLElement;
		fireEvent.change(thresholdInput, { target: { value: "90" } });
		expect(handleNumberChange).toHaveBeenCalledWith(
			"gallery.auto_link_phash_threshold",
			"90",
			0,
			100,
		);

		// Test blur
		fireEvent.blur(thresholdInput);
		expect(handleNumberBlur).toHaveBeenCalledWith({ key: "gallery.auto_link_phash_threshold" });

		// Source suggestion threshold
		const suggestThresholdInput = screen.getAllByRole("spinbutton")[1] as HTMLElement;
		fireEvent.change(suggestThresholdInput, { target: { value: "80" } });
		expect(handleNumberChange).toHaveBeenCalledWith(
			"gallery.suggest_phash_threshold",
			"80",
			0,
			100,
		);

		fireEvent.blur(suggestThresholdInput);
		expect(handleNumberBlur).toHaveBeenCalledWith({ key: "gallery.suggest_phash_threshold" });

		// Inherit Tags from Source switch
		const inheritSwitch = screen.getByRole("checkbox");
		await user.click(inheritSwitch);
		expect(handleToggle).toHaveBeenCalledWith("gallery.inherit_tags", false);

		// Lineage Max Depth
		const lineageInput = screen.getAllByRole("spinbutton")[2] as HTMLElement;
		fireEvent.change(lineageInput, { target: { value: "6" } });
		expect(handleNumberChange).toHaveBeenCalledWith("gallery.lineage_max_depth", "6", 1, 10);

		fireEvent.blur(lineageInput);
		expect(handleNumberBlur).toHaveBeenCalledWith({ key: "gallery.lineage_max_depth" });

		// Clear Thumbnail Cache button
		const clearBtn = screen.getByRole("button", { name: "Clear Thumbnail Cache" });
		await user.click(clearBtn);
		expect(handleClearThumbnailCache).toHaveBeenCalled();

		// Trash Retention Period
		const trashInput = screen.getAllByRole("spinbutton")[3] as HTMLElement;
		fireEvent.change(trashInput, { target: { value: "45" } });
		expect(handleNumberChange).toHaveBeenCalledWith("gallery.trash_retention_days", "45", 0, 365);

		fireEvent.blur(trashInput);
		expect(handleNumberBlur).toHaveBeenCalledWith({ key: "gallery.trash_retention_days" });

		// View Trash button
		const viewTrashBtn = screen.getByRole("button", { name: "View Trash" });
		await user.click(viewTrashBtn);
		expect(handleViewTrash).toHaveBeenCalled();
	});
});
