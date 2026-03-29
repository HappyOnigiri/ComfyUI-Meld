import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { DatabasesPayload } from "../../../types";
import { useDatabaseManagement } from "./useDatabaseManagement";

const mockDispatch = vi.fn();

const initialPayload: DatabasesPayload = {
	databases: [
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
	],
	active_database: "default",
	database_generation: 1,
};

const switchedPayload: DatabasesPayload = {
	...initialPayload,
	databases: initialPayload.databases.map((database) => ({
		...database,
		is_active: database.name === "project_a",
	})),
	active_database: "project_a",
	database_generation: 2,
};

const deletedPayload: DatabasesPayload = {
	databases: [
		{
			name: "default",
			filename: "default.db",
			is_active: true,
			image_count: 0,
			can_delete: true,
		},
	],
	active_database: "default",
	database_generation: 3,
};

const fetchDatabases = vi.fn().mockResolvedValue(initialPayload);
const createDatabase = vi.fn().mockResolvedValue(initialPayload);
const renameDatabase = vi.fn().mockResolvedValue({
	...initialPayload,
	databases: [
		{
			name: "project_b",
			filename: "project_b.db",
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
	],
	active_database: "project_b",
	database_generation: 2,
});
const switchDatabase = vi.fn().mockResolvedValue(switchedPayload);
const deleteDatabase = vi.fn().mockResolvedValue(deletedPayload);

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: mockDispatch,
	}),
}));

vi.mock("../../databases/api/databasesApi", () => ({
	fetchDatabases: (...args: unknown[]) => fetchDatabases(...args),
	createDatabase: (...args: unknown[]) => createDatabase(...args),
	renameDatabase: (...args: unknown[]) => renameDatabase(...args),
	switchDatabase: (...args: unknown[]) => switchDatabase(...args),
	deleteDatabase: (...args: unknown[]) => deleteDatabase(...args),
}));

describe("useDatabaseManagement", () => {
	it("loads databases and dispatches create, rename, switch, and delete confirms", async () => {
		const dispatchEventSpy = vi.spyOn(window, "dispatchEvent");
		const { result } = renderHook(() => useDatabaseManagement());

		await waitFor(() => {
			expect(result.current.databases).toHaveLength(2);
		});

		act(() => {
			result.current.setDatabaseNameInput("project_b");
		});
		await act(async () => {
			await result.current.submitCreateDatabase();
		});

		const createModal = mockDispatch.mock.calls.at(-1)?.[0]?.payload;
		expect(createModal.title).toBe("Create Database");
		expect(createModal.details).toContain(
			"Settings are stored per database, so the new database starts with its own settings state.",
		);
		await act(async () => {
			await createModal.onConfirm();
		});
		expect(createDatabase).toHaveBeenCalledWith("project_b", false);

		act(() => {
			result.current.setRenameDraftForDatabase("default", "project_b");
		});
		await act(async () => {
			result.current.confirmRenameDatabase(initialPayload.databases[0]!);
		});
		const renameModal = mockDispatch.mock.calls.at(-1)?.[0]?.payload;
		expect(renameModal.title).toBe("Rename Database");
		await act(async () => {
			await renameModal.onConfirm();
		});
		expect(renameDatabase).toHaveBeenCalledWith("default", "project_b");

		await act(async () => {
			result.current.confirmSwitchDatabase(initialPayload.databases[1]!);
		});
		const switchModal = mockDispatch.mock.calls.at(-1)?.[0]?.payload;
		expect(switchModal.details).toContain("Light Table contents will be cleared.");
		await act(async () => {
			await switchModal.onConfirm();
		});
		expect(switchDatabase).toHaveBeenCalledWith("project_a");
		expect(dispatchEventSpy).toHaveBeenCalledWith(
			expect.objectContaining({ type: "meld-database-changed" }),
		);

		await act(async () => {
			result.current.confirmDeleteDatabase(switchedPayload.databases[1]!);
		});
		const deleteModal = mockDispatch.mock.calls.at(-1)?.[0]?.payload;
		expect(deleteModal.requiredText).toBe("delete");
		await act(async () => {
			await deleteModal.onConfirm("delete");
		});
		expect(deleteDatabase).toHaveBeenCalledWith("project_a", "delete");
	});
});
