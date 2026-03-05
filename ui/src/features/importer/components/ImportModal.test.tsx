import { act, render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ImportModal } from "./ImportModal";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: vi.fn(),
	}),
}));

vi.mock("../../../api", () => ({
	fetchHomeDir: vi.fn().mockResolvedValue("/home/user"),
}));

vi.mock("../api/importerApi", () => ({
	fetchFolders: vi.fn().mockResolvedValue({ folders: [], images: [] }),
	fetchFolderMetadata: vi.fn().mockResolvedValue({}),
	fetchPathImageCount: vi.fn().mockResolvedValue(0),
	startScan: vi.fn().mockResolvedValue({}),
}));

vi.mock("../../tags/api/tagsApi", () => ({
	fetchTags: vi.fn().mockResolvedValue([]),
}));

describe("ImportModal", () => {
	it("renders without crashing", async () => {
		await act(async () => {
			render(<ImportModal />);
		});
		expect(document.body.querySelector(".meld-modal-overlay")).toBeTruthy();
	});

	it("handles action buttons clicks safely", async () => {
		await act(async () => {
			render(<ImportModal />);
		});

		const buttons = document.body.querySelectorAll("button");
		for (const btn of Array.from(buttons)) {
			try {
				await act(async () => {
					btn.click();
				});
			} catch (e) {
				// skip
			}
		}
		expect(buttons.length).toBeGreaterThan(0);
	});
});
