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

	return useMemo(
		() => ({
			databases,
			activeDatabaseName,
			databaseNameInput,
			setDatabaseNameInput,
			isLoading,
			loadDatabases,
			submitCreateDatabase,
			confirmSwitchDatabase,
			confirmDeleteDatabase,
		}),
		[
			databases,
			activeDatabaseName,
			databaseNameInput,
			isLoading,
			loadDatabases,
			submitCreateDatabase,
			confirmSwitchDatabase,
			confirmDeleteDatabase,
		],
	);
};
