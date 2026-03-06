import { act, render, screen } from "@testing-library/react";
import React, { useEffect } from "react";
import { describe, expect, it, vi } from "vitest";
import * as imagesApi from "../features/images/api/imagesApi";
import * as searchApi from "../features/search/api/searchApi";
import * as settingsApi from "../features/settings/api/settingsApi";
import type { Settings } from "../types";
import { GalleryProvider, useGallery } from "./GalleryContext";

vi.mock("../features/images/api/imagesApi", () => ({
	fetchImages: vi.fn(),
	restoreImages: vi.fn(),
	fetchImageDetails: vi.fn(),
}));
vi.mock("../features/search/api/searchApi", () => ({
	fetchFavorites: vi.fn(),
}));
vi.mock("../features/settings/api/settingsApi", () => ({
	fetchSettings: vi.fn(),
	saveSetting: vi.fn(),
}));

const DummyChild = () => {
	const gallery = useGallery();

	const handleTest = async () => {
		await gallery.refreshImages();
		await gallery.loadMoreImages();
		await gallery.refreshFavorites();
		await gallery.deleteSelected();
		await gallery.restoreSelected();
		await gallery.updateSetting("test", true);
		await gallery.fetchFullImageDetails(1);
	};

	return (
		<div>
			{gallery ? "Success" : "Fail"}
			<button type="button" onClick={handleTest}>
				Trigger
			</button>
		</div>
	);
};

describe("GalleryContext", () => {
	it("renders children with provider and provides context and calls functions safely", async () => {
		vi.mocked(imagesApi.fetchImages).mockResolvedValue({
			images: [],
			total: 0,
			offset: 0,
			limit: 30,
		});
		vi.mocked(searchApi.fetchFavorites).mockResolvedValue([]);
		vi.mocked(settingsApi.fetchSettings).mockResolvedValue({} as Settings);
		vi.mocked(imagesApi.fetchImageDetails).mockResolvedValue({
			model_name: "test-model",
			positive_prompt: "pos",
			negative_prompt: "neg",
		} as unknown as import("../types").MeldImage);

		let containerNode: HTMLElement | undefined;
		await act(async () => {
			const { container } = render(
				<GalleryProvider>
					<DummyChild />
				</GalleryProvider>,
			);
			containerNode = container;
		});

		expect(containerNode).toBeTruthy();
		expect(screen.getByText("Success")).toBeTruthy();

		// Trigger functions
		const btn = screen.getByText("Trigger");
		await act(async () => {
			btn.click();
		});

		expect(imagesApi.fetchImages).toHaveBeenCalled();
		expect(searchApi.fetchFavorites).toHaveBeenCalled();
		expect(settingsApi.fetchSettings).toHaveBeenCalled();
		expect(imagesApi.fetchImageDetails).toHaveBeenCalledWith(1);
	});
});
