import { useCallback, useEffect, useState } from "react";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";
import type { Favorite } from "../../../types";
import * as searchApi from "../api/searchApi";

export const useFavoritesLogic = () => {
	const { state, refreshFavorites } = useGallery();
	const [isSaving, setIsSaving] = useState(false);
	const [toastMessage, setToastMessage] = useState<string | null>(null);
	const [toastType, setToastType] = useState<"info" | "error">("info");
	const [editingFavorite, setEditingFavorite] = useState<Favorite | null>(null);
	const [editFavoriteName, setEditFavoriteName] = useState("");
	const [editFavoriteQuery, setEditFavoriteQuery] = useState("");

	// Clear toast after 3 seconds
	useEffect(() => {
		if (toastMessage) {
			const timer = setTimeout(() => setToastMessage(null), 3000);
			return () => clearTimeout(timer);
		}
	}, [toastMessage]);

	const handleDeleteFavorite = useCallback(
		async (e: React.MouseEvent, id: number, name: string) => {
			e.stopPropagation();

			const confirmMsg = `Are you sure you want to delete the favorite "${name}"?`;
			if (!window.confirm(confirmMsg)) return;

			const result = await searchApi.deleteFavorite(id);
			if (!result.ok) {
				logger.error("Failed to delete favorite", result.error);
				return;
			}
			await refreshFavorites();
		},
		[refreshFavorites],
	);

	const handleEditFavorite = useCallback((e: React.MouseEvent, fav: Favorite) => {
		e.stopPropagation();
		setEditingFavorite(fav);
		setEditFavoriteName(fav.name);
		setEditFavoriteQuery(fav.query);
	}, []);

	const handleSaveEditFavorite = useCallback(async () => {
		if (!editingFavorite || !editFavoriteName.trim() || !editFavoriteQuery.trim()) return;

		setIsSaving(true);
		const result = await searchApi.updateFavorite(
			editingFavorite.id,
			editFavoriteName,
			editFavoriteQuery,
		);
		setIsSaving(false);
		if (!result.ok) {
			logger.error("Failed to update favorite", result.error);
			setToastMessage("Failed to update favorite.");
			setToastType("error");
			return;
		}
		await refreshFavorites();
		setEditingFavorite(null);
	}, [editingFavorite, editFavoriteName, editFavoriteQuery, refreshFavorites]);

	const handleSaveFavorite = useCallback(async (): Promise<boolean> => {
		if (!state.searchQuery || isSaving) return false;

		const isAlreadyFavorite = state.favorites.some((f) => f.query === state.searchQuery);
		if (isAlreadyFavorite) {
			const fav = state.favorites.find((f) => f.query === state.searchQuery);
			if (fav) {
				setIsSaving(true);
				const result = await searchApi.deleteFavorite(fav.id);
				setIsSaving(false);
				if (!result.ok) {
					logger.error("Failed to delete favorite:", result.error);
					return false;
				}
				await refreshFavorites();
				return true;
			}
			return false;
		}

		setIsSaving(true);
		const result = await searchApi.saveFavorite(state.searchQuery, state.searchQuery);
		setIsSaving(false);
		if (!result.ok) {
			logger.error("Failed to save favorite:", result.error);
			return false;
		}
		await refreshFavorites();
		return true;
	}, [state.searchQuery, state.favorites, isSaving, refreshFavorites]);

	return {
		isSaving,
		toastMessage,
		toastType,
		editingFavorite,
		setEditingFavorite,
		editFavoriteName,
		setEditFavoriteName,
		editFavoriteQuery,
		setEditFavoriteQuery,
		handleDeleteFavorite,
		handleEditFavorite,
		handleSaveEditFavorite,
		handleSaveFavorite,
		setToastMessage: (msg: string | null, type: "info" | "error" = "info") => {
			setToastMessage(msg);
			setToastType(type);
		},
	};
};
