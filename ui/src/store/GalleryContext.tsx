import type React from "react";
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useReducer,
	useRef,
} from "react";
import * as imagesApi from "../features/images/api/imagesApi";
import { normalizeImagesResponse } from "../features/images/api/imagesApi";
import * as searchApi from "../features/search/api/searchApi";
import * as settingsApi from "../features/settings/api/settingsApi";
import { logger } from "../logger";
import type { GalleryAction, GalleryState, MeldImage } from "../types";
import { galleryReducer, initialState } from "./galleryReducer";

interface GalleryContextType {
	state: GalleryState;
	dispatch: React.Dispatch<GalleryAction>;
	refreshImages: () => Promise<void>;
	loadMoreImages: () => Promise<void>;
	refreshFavorites: () => Promise<void>;
	deleteSelected: () => Promise<void>;
	restoreSelected: () => Promise<void>;
	updateSetting: (key: string, value: string | number | boolean | null) => Promise<void>;
	fetchFullImageDetails: (id: number) => Promise<MeldImage>;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(galleryReducer, initialState);

	const imagesLengthRef = useRef(state.images.length);
	const backgroundFetchIdRef = useRef<number>(0);
	const detailsInFlightRef = useRef<Map<number, Promise<MeldImage>>>(new Map());

	useEffect(() => {
		imagesLengthRef.current = state.images.length;
	}, [state.images.length]);

	const startBackgroundFetch = useCallback(
		async (startOffset: number, total: number, fetchId: number) => {
			const maxItems = state.settings["gallery.max_load_count"];
			const chunkSize = 200; // Use 200 items per background request for efficiency
			let currentOffset = startOffset;

			while (
				currentOffset < Math.min(total, maxItems) &&
				fetchId === backgroundFetchIdRef.current
			) {
				try {
					const limit = Math.min(chunkSize, maxItems - currentOffset);
					logger.log("Background fetch: starting chunk", {
						offset: currentOffset,
						limit,
					});

					const result = await imagesApi.fetchImages(
						currentOffset,
						limit,
						state.searchQuery,
						state.viewScope,
						true, // minimal mode
					);

					if (fetchId !== backgroundFetchIdRef.current) break;

					const { images: chunkImages, total: chunkTotal } = normalizeImagesResponse(result, {
						total,
					});
					dispatch({
						type: "APPEND_IMAGES",
						payload: {
							images: chunkImages,
							total: chunkTotal,
							offset: currentOffset,
							limit,
						},
					});
					currentOffset += chunkImages.length;

					// If we reached the end or fetched nothing, stop
					if (chunkImages.length === 0 || currentOffset >= chunkTotal) break;

					// Sleep a bit to keep browser responsive (300ms)
					await new Promise((resolve) => setTimeout(resolve, 300));
				} catch (err) {
					logger.error("Background fetch failed", err);
					break;
				}
			}
		},
		[state.searchQuery, state.viewScope, state.settings],
	);

	const refreshImages = useCallback(async () => {
		dispatch({ type: "SET_LOADING", payload: true });
		const startTime = performance.now();
		// Increment fetch ID to cancel previous background fetches
		const fetchId = ++backgroundFetchIdRef.current;

		try {
			const isSearch = state.searchQuery.trim() !== "";
			// Initial load from settings
			const initialLimit = state.settings["gallery.initial_load_count"];

			logger.log("refreshImages: starting initial fetch", {
				isSearch,
				fetchLimit: initialLimit,
				query: state.searchQuery,
				scope: state.viewScope,
			});

			const result = await imagesApi.fetchImages(
				0,
				initialLimit,
				state.searchQuery,
				state.viewScope,
				false, // not minimal for initial load
			);
			const payload = normalizeImagesResponse(result, {
				total: state.pagination.total,
				offset: 0,
				limit: initialLimit,
			});
			const fetchTime = performance.now() - startTime;
			logger.log("refreshImages: initial fetch complete", {
				count: payload.images.length,
				total: payload.total,
				offset: payload.offset,
				durationMs: fetchTime.toFixed(2),
			});
			dispatch({ type: "SET_IMAGES", payload });

			// Start background fetch if there's more
			if (payload.total > initialLimit) {
				startBackgroundFetch(initialLimit, payload.total, fetchId);
			}
		} catch (err: unknown) {
			logger.error("refreshImages: fetch failed", err);
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [
		state.searchQuery,
		state.viewScope,
		state.settings,
		state.pagination.total,
		startBackgroundFetch,
	]);

	const loadMoreImages = useCallback(async () => {
		if (state.isLoading || !state.pagination.hasMore) return;

		dispatch({ type: "SET_LOADING", payload: true });
		const startTime = performance.now();
		try {
			const nextOffset = imagesLengthRef.current;
			const isSearch = state.searchQuery.trim() !== "";
			const fetchLimit = state.pagination.limit;

			logger.log("loadMoreImages: starting fetch", {
				nextOffset,
				fetchLimit,
				isSearch,
			});

			const result = await imagesApi.fetchImages(
				nextOffset,
				fetchLimit,
				state.searchQuery,
				state.viewScope,
				true, // use minimal mode for scroll-triggered loads
			);
			const payload = normalizeImagesResponse(result, {
				total: state.pagination.total,
				offset: nextOffset,
				limit: fetchLimit,
			});
			const fetchTime = performance.now() - startTime;
			logger.log("loadMoreImages: fetch complete", {
				count: payload.images.length,
				total: payload.total,
				offset: payload.offset,
				durationMs: fetchTime.toFixed(2),
			});
			dispatch({ type: "APPEND_IMAGES", payload });
		} catch (err: unknown) {
			logger.error("loadMoreImages: fetch failed", err);
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [
		state.isLoading,
		state.pagination.hasMore,
		state.pagination.limit,
		state.pagination.total,
		state.searchQuery,
		state.viewScope,
	]);

	const refreshFavorites = useCallback(async () => {
		try {
			const favorites = await searchApi.fetchFavorites();
			dispatch({ type: "SET_FAVORITES", payload: favorites });
		} catch (err) {
			logger.error("Failed to load favorites", err);
		}
	}, []);

	const deleteSelected = useCallback(async () => {
		if (state.selectedIds.size === 0) return;

		const ids = Array.from(state.selectedIds) as number[];
		const selectedImages = state.images.filter((img) => state.selectedIds.has(img.id));

		const hasLineage = selectedImages.some((img) => img.parent_id || img.has_children);

		dispatch({
			type: "OPEN_MODAL",
			payload: {
				type: "delete_confirm",
				imageIds: ids,
				hasLineage,
				isPermanent: state.viewScope === "trash",
			},
		});
	}, [state.selectedIds, state.images, state.viewScope]);

	const restoreSelected = useCallback(async () => {
		if (state.selectedIds.size === 0) return;
		const ids = Array.from(state.selectedIds) as number[];
		try {
			dispatch({ type: "SET_LOADING", payload: true });
			const result = await imagesApi.restoreImages(ids);
			const restoredIds = result.restored_ids || ids;
			if (state.viewScope === "trash") {
				dispatch({ type: "REMOVE_IMAGES", payload: restoredIds });
			}
			dispatch({ type: "CLEAR_SELECTION" });
			dispatch({ type: "SET_LOADING", payload: false });
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [state.selectedIds, state.viewScope]);

	const updateSetting = useCallback(
		async (key: string, value: string | number | boolean | null) => {
			try {
				await settingsApi.saveSetting(key, value);
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

	const fetchFullImageDetails = useCallback(
		async (id: number): Promise<MeldImage> => {
			// 1. Check current images for non-minimal version
			const existing = state.images.find((img) => img.id === id);
			if (existing && !existing.is_minimal) {
				return existing;
			}

			// 2. Check lineage images for non-minimal version
			const existingLineage = state.lineageImages.find((img) => img.id === id);
			if (existingLineage && !existingLineage.is_minimal) {
				return existingLineage;
			}

			// 3. Check for in-flight promise
			const inFlight = detailsInFlightRef.current.get(id);
			if (inFlight) {
				return inFlight;
			}

			// 4. Fetch from API
			const fetchPromise = (async () => {
				try {
					logger.log("fetchFullImageDetails: fetching full data", { id });
					const fullImage = await imagesApi.fetchImageDetails(id);
					dispatch({ type: "UPDATE_IMAGE", payload: fullImage });
					return fullImage;
				} finally {
					detailsInFlightRef.current.delete(id);
				}
			})();

			detailsInFlightRef.current.set(id, fetchPromise);
			return fetchPromise;
		},
		[state.images, state.lineageImages],
	);

	useEffect(() => {
		const loadSettings = async () => {
			try {
				const settings = await settingsApi.fetchSettings();
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
					updatedCount: detail.updated_count || 0,
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
				restoreSelected,
				updateSetting,
				fetchFullImageDetails,
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
