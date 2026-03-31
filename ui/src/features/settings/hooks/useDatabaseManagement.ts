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
		setIsLoading(true);
		const result = await databasesApi.fetchDatabases();
		setIsLoading(false);
		if (!result.ok) {
			logger.error("Failed to fetch databases", result.error);
			dispatch({ type: "SET_ERROR", payload: result.error });
			return;
		}
		setPayload(result.data);
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
					const result = await databasesApi.createDatabase(trimmed, false);
					setIsLoading(false);
					if (!result.ok) {
						logger.error("Failed to create database", result.error);
						dispatch({ type: "SET_ERROR", payload: result.error });
						throw new Error(result.error);
					}
					setPayload(result.data);
					setDatabaseNameInput("");
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
						const result = await databasesApi.switchDatabase(database.name);
						setIsLoading(false);
						if (!result.ok) {
							logger.error("Failed to switch database", result.error);
							dispatch({ type: "SET_ERROR", payload: result.error });
							throw new Error(result.error);
						}
						setPayload(result.data);
						emitDatabaseChanged(result.data);
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
						const result = await databasesApi.deleteDatabase(database.name, inputValue ?? "");
						setIsLoading(false);
						if (!result.ok) {
							logger.error("Failed to delete database", result.error);
							dispatch({ type: "SET_ERROR", payload: result.error });
							throw new Error(result.error);
						}
						setPayload(result.data);
						if (
							database.is_active ||
							payload?.active_database !== result.data.active_database ||
							payload?.database_generation !== result.data.database_generation
						) {
							emitDatabaseChanged(result.data);
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
						const result = await databasesApi.renameDatabase(database.name, nextName);
						setIsLoading(false);
						if (!result.ok) {
							logger.error("Failed to rename database", result.error);
							dispatch({ type: "SET_ERROR", payload: result.error });
							throw new Error(result.error);
						}
						setPayload(result.data);
						setRenameDrafts((prev) => {
							const { [database.name]: _, ...rest } = prev;
							return { ...rest, [nextName]: nextName };
						});
						if (database.is_active) {
							emitDatabaseChanged(result.data);
						}
					},
				},
			});
		},
		[dispatch, emitDatabaseChanged, getRenameDraftForDatabase],
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
