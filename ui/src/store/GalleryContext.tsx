import type React from "react";
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useReducer,
} from "react";
import * as api from "../api";
import { logger } from "../logger";
import type { GalleryAction, GalleryState } from "../types";
import { galleryReducer, initialState } from "./galleryReducer";

interface GalleryContextType {
	state: GalleryState;
	dispatch: React.Dispatch<GalleryAction>;
	refreshImages: () => Promise<void>;
	loadMoreImages: () => Promise<void>;
	deleteSelected: () => Promise<void>;
	updateSetting: (
		key: string,
		value: string | number | boolean | null,
	) => Promise<void>;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(galleryReducer, initialState);

	const refreshImages = useCallback(async () => {
		dispatch({ type: "SET_LOADING", payload: true });
		try {
			const result = await api.fetchImages(0, state.pagination.limit);
			dispatch({ type: "SET_IMAGES", payload: result });
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [state.pagination.limit]);

	const loadMoreImages = useCallback(async () => {
		if (state.isLoading || !state.pagination.hasMore) return;

		dispatch({ type: "SET_LOADING", payload: true });
		try {
			const nextOffset = state.images.length;
			const result = await api.fetchImages(nextOffset, state.pagination.limit);
			dispatch({ type: "APPEND_IMAGES", payload: result });
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [
		state.isLoading,
		state.pagination.hasMore,
		state.pagination.limit,
		state.images.length,
	]);

	const deleteSelected = useCallback(async () => {
		if (state.selectedIds.size === 0) return;

		const ids = Array.from(state.selectedIds) as number[];
		const confirmMsg = `Are you sure you want to delete the selected ${ids.length} images?\n\n[WARNING]\nPhysical files will also be permanently deleted. This operation cannot be undone.`;

		if (window.confirm(confirmMsg)) {
			dispatch({ type: "SET_LOADING", payload: true });
			try {
				await api.deleteImages(ids, true);
				dispatch({ type: "CLEAR_SELECTION" });
				await refreshImages();
			} catch (err: unknown) {
				dispatch({
					type: "SET_ERROR",
					payload: err instanceof Error ? err.message : String(err),
				});
			}
		}
	}, [state.selectedIds, refreshImages]);

	const updateSetting = useCallback(
		async (key: string, value: string | number | boolean | null) => {
			try {
				await api.saveSetting(key, value);
				dispatch({ type: "SET_SETTINGS", payload: { [key]: value } });
			} catch (err: unknown) {
				dispatch({
					type: "SET_ERROR",
					payload: err instanceof Error ? err.message : String(err),
				});
			}
		},
		[],
	);

	useEffect(() => {
		const loadSettings = async () => {
			try {
				const settings = await api.fetchSettings();
				dispatch({ type: "SET_SETTINGS", payload: settings });
			} catch (err) {
				logger.error("Failed to load settings", err);
			}
		};
		loadSettings();
	}, []);

	useEffect(() => {
		const handleRefresh = () => {
			refreshImages();
		};
		const handleScanProgress = (e: Event) => {
			const detail = (e as CustomEvent).detail;
			dispatch({
				type: "SET_SCAN_STATUS",
				payload: { progress: detail },
			});
		};
		const handleScanFinished = () => {
			dispatch({
				type: "SET_SCAN_STATUS",
				payload: { isRunning: false, shouldCancel: false },
			});
			refreshImages();
		};

		window.addEventListener("meld-nexus-refresh", handleRefresh);
		window.addEventListener("meld-nexus-scan-progress", handleScanProgress);
		window.addEventListener("meld-nexus-scan-finished", handleScanFinished);

		return () => {
			window.removeEventListener("meld-nexus-refresh", handleRefresh);
			window.removeEventListener(
				"meld-nexus-scan-progress",
				handleScanProgress,
			);
			window.removeEventListener(
				"meld-nexus-scan-finished",
				handleScanFinished,
			);
		};
	}, [refreshImages]);

	useEffect(() => {
		refreshImages();
	}, [refreshImages]);

	return (
		<GalleryContext.Provider
			value={{
				state,
				dispatch,
				refreshImages,
				loadMoreImages,
				deleteSelected,
				updateSetting,
			}}
		>
			{children}
		</GalleryContext.Provider>
	);
};

export const useGallery = () => {
	const context = useContext(GalleryContext);
	if (context === undefined) {
		throw new Error("useGallery must be used within a GalleryProvider");
	}
	return context;
};
