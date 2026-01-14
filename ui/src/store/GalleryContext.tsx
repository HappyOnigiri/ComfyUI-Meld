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
	refreshFavorites: () => Promise<void>;
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
			const result = await api.fetchImages(
				0,
				state.pagination.limit,
				state.searchQuery,
			);
			dispatch({ type: "SET_IMAGES", payload: result });
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [state.pagination.limit, state.searchQuery]);

	const loadMoreImages = useCallback(async () => {
		if (state.isLoading || !state.pagination.hasMore) return;

		dispatch({ type: "SET_LOADING", payload: true });
		try {
			const nextOffset = state.images.length;
			const result = await api.fetchImages(
				nextOffset,
				state.pagination.limit,
				state.searchQuery,
			);
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
		state.searchQuery,
	]);

	const refreshFavorites = useCallback(async () => {
		try {
			const favorites = await api.fetchFavorites();
			dispatch({ type: "SET_FAVORITES", payload: favorites });
		} catch (err) {
			logger.error("Failed to load favorites", err);
		}
	}, []);

	const deleteSelected = useCallback(async () => {
		if (state.selectedIds.size === 0) return;

		const ids = Array.from(state.selectedIds) as number[];
		const selectedImages = state.images.filter((img) =>
			state.selectedIds.has(img.id),
		);

		const hasLineage = selectedImages.some(
			(img) => img.parent_id || img.has_children,
		);

		dispatch({
			type: "OPEN_MODAL",
			payload: { type: "delete_confirm", imageIds: ids, hasLineage },
		});
	}, [state.selectedIds, state.images]);

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
		refreshFavorites();
	}, [refreshFavorites]);

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
		const handleScanFinished = (e: Event) => {
			const detail = (e as CustomEvent).detail;
			dispatch({
				type: "SET_SCAN_STATUS",
				payload: {
					isRunning: false,
					isFinished: true,
					shouldCancel: false,
					newCount: detail.new_count || 0,
					totalCount: detail.total_count || 0,
					progress: {
						current: detail.total_count || state.scanStatus.progress.total,
						total: detail.total_count || state.scanStatus.progress.total,
						phase: "completed",
					},
				},
			});
			refreshImages();
		};

		window.addEventListener("meld-refresh", handleRefresh);
		window.addEventListener("meld-scan-progress", handleScanProgress);
		window.addEventListener("meld-scan-finished", handleScanFinished);

		return () => {
			window.removeEventListener("meld-refresh", handleRefresh);
			window.removeEventListener("meld-scan-progress", handleScanProgress);
			window.removeEventListener("meld-scan-finished", handleScanFinished);
		};
	}, [refreshImages, state.scanStatus.progress.total]);

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
				refreshFavorites,
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
