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
				databases={[]}
				activeDatabaseName={null}
				databaseNameInput=""
				setDatabaseNameInput={vi.fn()}
				getRenameDraftForDatabase={(databaseName) => databaseName}
				setRenameDraftForDatabase={vi.fn()}
				isDatabaseLoading={false}
				handleCreateDatabase={vi.fn()}
				handleRenameDatabase={vi.fn()}
				handleSwitchDatabase={vi.fn()}
				handleDeleteDatabase={vi.fn()}
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
		const handleCreateDatabase = vi.fn();
		const handleRenameDatabase = vi.fn();
		const handleSwitchDatabase = vi.fn();
		const handleDeleteDatabase = vi.fn();
		const setRenameDraftForDatabase = vi.fn();

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
				databases={[
					{
						name: "default",
						filename: "default.db",
						is_active: true,
						image_count: 4,
						can_delete: true,
					},
					{
						name: "project_a",
						filename: "project_a.db",
						is_active: false,
						image_count: 1,
						can_delete: true,
					},
				]}
				activeDatabaseName="default"
				databaseNameInput="new_db"
				setDatabaseNameInput={vi.fn()}
				getRenameDraftForDatabase={(databaseName) =>
					databaseName === "default" ? "default_renamed" : databaseName
				}
				setRenameDraftForDatabase={setRenameDraftForDatabase}
				isDatabaseLoading={false}
				handleCreateDatabase={handleCreateDatabase}
				handleRenameDatabase={handleRenameDatabase}
				handleSwitchDatabase={handleSwitchDatabase}
				handleDeleteDatabase={handleDeleteDatabase}
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
		const createBtn = screen.getByRole("button", { name: "Create" });
		await user.click(createBtn);
		expect(handleCreateDatabase).toHaveBeenCalled();

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

		const switchButtons = screen.getAllByRole("button", { name: "Switch" });
		await user.click(switchButtons[1] as HTMLElement);
		expect(handleSwitchDatabase).toHaveBeenCalledWith(
			expect.objectContaining({ name: "project_a" }),
		);

		const renameInput = getByLabelText("Rename default");
		await user.clear(renameInput);
		await user.type(renameInput, "default_renamed");
		expect(setRenameDraftForDatabase).toHaveBeenCalled();

		const renameButtons = screen.getAllByRole("button", { name: "Rename" });
		await user.click(renameButtons[0] as HTMLElement);
		expect(handleRenameDatabase).toHaveBeenCalledWith(expect.objectContaining({ name: "default" }));

		const deleteButtons = screen.getAllByRole("button", { name: "Delete" });
		await user.click(deleteButtons[0] as HTMLElement);
		expect(handleDeleteDatabase).toHaveBeenCalledWith(expect.objectContaining({ name: "default" }));
	});
});
