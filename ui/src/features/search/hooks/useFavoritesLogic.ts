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

			try {
				await searchApi.deleteFavorite(id);
				await refreshFavorites();
			} catch (err) {
				logger.error("Failed to delete favorite", err);
			}
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

		try {
			setIsSaving(true);
			await searchApi.updateFavorite(editingFavorite.id, editFavoriteName, editFavoriteQuery);
			await refreshFavorites();
			setEditingFavorite(null);
		} catch (err) {
			logger.error("Failed to update favorite", err);
			setToastMessage("Failed to update favorite.");
			setToastType("error");
		} finally {
			setIsSaving(false);
		}
	}, [editingFavorite, editFavoriteName, editFavoriteQuery, refreshFavorites]);

	const handleSaveFavorite = useCallback(async () => {
		if (!state.searchQuery || isSaving) return;

		const isAlreadyFavorite = state.favorites.some((f) => f.query === state.searchQuery);
		if (isAlreadyFavorite) {
			const fav = state.favorites.find((f) => f.query === state.searchQuery);
			if (fav) {
				setIsSaving(true);
				try {
					await searchApi.deleteFavorite(fav.id);
					await refreshFavorites();
				} catch (err) {
					logger.error("Failed to delete favorite:", err);
				} finally {
					setIsSaving(false);
				}
			}
			return;
		}

		setIsSaving(true);
		try {
			await searchApi.saveFavorite(state.searchQuery, state.searchQuery);
			await refreshFavorites();
		} catch (err) {
			logger.error("Failed to save favorite:", err);
		} finally {
			setIsSaving(false);
		}
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
