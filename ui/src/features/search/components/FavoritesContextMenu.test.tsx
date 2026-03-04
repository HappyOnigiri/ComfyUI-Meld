import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FavoritesContextMenu } from "./FavoritesContextMenu";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { favorites: [] },
	}),
}));

vi.mock("../hooks/useFavoritesLogic", () => ({
	useFavoritesLogic: () => ({
		isSaving: false,
		toastMessage: null,
		editingFavorite: null,
		setEditingFavorite: vi.fn(),
		editFavoriteName: "",
		setEditFavoriteName: vi.fn(),
		editFavoriteQuery: "",
		setEditFavoriteQuery: vi.fn(),
		handleDeleteFavorite: vi.fn(),
		handleEditFavorite: vi.fn(),
		handleSaveEditFavorite: vi.fn(),
	}),
}));

describe("FavoritesContextMenu", () => {
	it("renders without crashing", () => {
		const anchorRect = {
			bottom: 100,
			height: 20,
			left: 100,
			right: 120,
			top: 80,
			width: 20,
			x: 100,
			y: 80,
			toJSON: () => {},
		} as DOMRect;

		expect(() =>
			render(<FavoritesContextMenu anchorRect={anchorRect} onClose={vi.fn()} onSelect={vi.fn()} />),
		).not.toThrow();
	});
});
