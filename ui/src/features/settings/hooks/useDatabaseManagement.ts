import { useCallback, useEffect, useMemo, useState } from "react";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";
import type { DatabaseSummary, DatabasesPayload } from "../../../types";
import * as databasesApi from "../../databases/api/databasesApi";

const SWITCH_RESET_WARNINGS = [
	"Light Table contents will be cleared.",
	"Search keywords, suggestions, and in-flight cache will be reinitialized.",
	"Current selection, viewer state, open modals, and search results will be reset.",
	"Database-specific settings may change after the switch.",
	"Switching is blocked while scan or analytics refresh is running.",
];

export const useDatabaseManagement = () => {
	const { dispatch } = useGallery();
	const [payload, setPayload] = useState<DatabasesPayload | null>(null);
	const [databaseNameInput, setDatabaseNameInput] = useState("");
	const [renameDrafts, setRenameDrafts] = useState<Record<string, string>>({});
	const [isLoading, setIsLoading] = useState(false);

	const loadDatabases = useCallback(async () => {
		try {
			setIsLoading(true);
			const nextPayload = await databasesApi.fetchDatabases();
			setPayload(nextPayload);
		} catch (error) {
			logger.error("Failed to fetch databases", error);
			dispatch({
				type: "SET_ERROR",
				payload: error instanceof Error ? error.message : "Failed to fetch databases",
			});
		} finally {
			setIsLoading(false);
		}
	}, [dispatch]);

	useEffect(() => {
		loadDatabases();
	}, [loadDatabases]);

	const emitDatabaseChanged = useCallback((nextPayload: DatabasesPayload) => {
		window.dispatchEvent(new CustomEvent("meld-database-changed", { detail: nextPayload }));
	}, []);

	const activeDatabaseName = payload?.active_database ?? null;
	const databases = payload?.databases ?? [];

	const setRenameDraftForDatabase = useCallback((databaseName: string, nextValue: string) => {
		setRenameDrafts((prev) => ({
			...prev,
			[databaseName]: nextValue,
		}));
	}, []);

	const getRenameDraftForDatabase = useCallback(
		(databaseName: string) => renameDrafts[databaseName] ?? databaseName,
		[renameDrafts],
	);

	const submitCreateDatabase = useCallback(async () => {
		const trimmed = databaseNameInput.trim();
		if (!trimmed) {
			dispatch({ type: "SET_ERROR", payload: "Database name is required" });
			return;
		}

		dispatch({
			type: "OPEN_CONFIRM_MODAL",
			payload: {
				title: "Create Database",
				message: `Create a new empty database named "${trimmed}"?`,
				details: [
					"The new database will be created without switching immediately.",
					"Settings are stored per database, so the new database starts with its own settings state.",
					"You can switch to it afterwards from the database list.",
				],
				confirmLabel: "Create",
				onConfirm: async () => {
					setIsLoading(true);
					try {
						const nextPayload = await databasesApi.createDatabase(trimmed, false);
						setPayload(nextPayload);
						setDatabaseNameInput("");
					} catch (error) {
						logger.error("Failed to create database", error);
						dispatch({
							type: "SET_ERROR",
							payload: error instanceof Error ? error.message : "Failed to create database",
						});
						throw error;
					} finally {
						setIsLoading(false);
					}
				},
			},
		});
	}, [databaseNameInput, dispatch]);

	const confirmSwitchDatabase = useCallback(
		(database: DatabaseSummary) => {
			if (database.is_active) {
				return;
			}

			dispatch({
				type: "OPEN_CONFIRM_MODAL",
				payload: {
					title: "Switch Database",
					message: `Switch active database to "${database.name}"?`,
					details: SWITCH_RESET_WARNINGS,
					confirmLabel: "Switch Database",
					onConfirm: async () => {
						setIsLoading(true);
						try {
							const nextPayload = await databasesApi.switchDatabase(database.name);
							setPayload(nextPayload);
							emitDatabaseChanged(nextPayload);
						} catch (error) {
							logger.error("Failed to switch database", error);
							dispatch({
								type: "SET_ERROR",
								payload: error instanceof Error ? error.message : "Failed to switch database",
							});
							throw error;
						} finally {
							setIsLoading(false);
						}
					},
				},
			});
		},
		[dispatch, emitDatabaseChanged],
	);

	const confirmDeleteDatabase = useCallback(
		(database: DatabaseSummary) => {
			const details = [
				`The database file "${database.filename}" will be permanently deleted.`,
				'Type "delete" to confirm the operation.',
			];
			if (database.is_active) {
				details.push(
					"The app will switch to another database or recreate default.db automatically.",
				);
				details.push(...SWITCH_RESET_WARNINGS);
			}

			dispatch({
				type: "OPEN_CONFIRM_MODAL",
				payload: {
					title: "Delete Database",
					message: `Delete database "${database.name}" permanently?`,
					details,
					confirmLabel: "Delete Database",
					danger: true,
					requiredText: "delete",
					requiredTextLabel: 'Type "delete" to enable deletion.',
					onConfirm: async (inputValue?: string) => {
						setIsLoading(true);
						try {
							const nextPayload = await databasesApi.deleteDatabase(
								database.name,
								inputValue ?? "",
							);
							setPayload(nextPayload);
							if (
								database.is_active ||
								payload?.active_database !== nextPayload.active_database ||
								payload?.database_generation !== nextPayload.database_generation
							) {
								emitDatabaseChanged(nextPayload);
							}
						} catch (error) {
							logger.error("Failed to delete database", error);
							dispatch({
								type: "SET_ERROR",
								payload: error instanceof Error ? error.message : "Failed to delete database",
							});
							throw error;
						} finally {
							setIsLoading(false);
						}
					},
				},
			});
		},
		[dispatch, emitDatabaseChanged, payload?.active_database, payload?.database_generation],
	);

	const confirmRenameDatabase = useCallback(
		(database: DatabaseSummary) => {
			const nextName = getRenameDraftForDatabase(database.name).trim();
			if (!nextName) {
				dispatch({ type: "SET_ERROR", payload: "New database name is required" });
				return;
			}
			if (nextName === database.name) {
				dispatch({ type: "SET_ERROR", payload: "New database name must be different" });
				return;
			}

			dispatch({
				type: "OPEN_CONFIRM_MODAL",
				payload: {
					title: "Rename Database",
					message: `Rename database "${database.name}" to "${nextName}"?`,
					details: [
						"The database file and runtime directories will be renamed together.",
						"Current database contents are preserved.",
					],
					confirmLabel: "Rename Database",
					onConfirm: async () => {
						setIsLoading(true);
						try {
							const nextPayload = await databasesApi.renameDatabase(database.name, nextName);
							setPayload(nextPayload);
							setRenameDrafts((prev) => ({
								...prev,
								[nextName]: nextName,
							}));
						} catch (error) {
							logger.error("Failed to rename database", error);
							dispatch({
								type: "SET_ERROR",
								payload: error instanceof Error ? error.message : "Failed to rename database",
							});
							throw error;
						} finally {
							setIsLoading(false);
						}
					},
				},
			});
		},
		[dispatch, getRenameDraftForDatabase],
	);

	return useMemo(
		() => ({
			databases,
			activeDatabaseName,
			databaseNameInput,
			setDatabaseNameInput,
			getRenameDraftForDatabase,
			setRenameDraftForDatabase,
			isLoading,
			loadDatabases,
			submitCreateDatabase,
			confirmRenameDatabase,
			confirmSwitchDatabase,
			confirmDeleteDatabase,
		}),
		[
			databases,
			activeDatabaseName,
			databaseNameInput,
			getRenameDraftForDatabase,
			setRenameDraftForDatabase,
			isLoading,
			loadDatabases,
			submitCreateDatabase,
			confirmRenameDatabase,
			confirmSwitchDatabase,
			confirmDeleteDatabase,
		],
	);
};
