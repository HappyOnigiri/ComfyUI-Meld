import { fireEvent, render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import type { MeldImage } from "../../../types";
import { ViewerThumbnailStrip } from "./ViewerThumbnailStrip";

describe("ViewerThumbnailStrip", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<ViewerThumbnailStrip
				windowedThumbnails={[]}
				viewerImageId={null}
				currentImage={{ id: 1 } as MeldImage}
				dispatch={vi.fn()}
				isLoadingLineage={false}
				isLoading={false}
				viewerMode="gallery"
			/>,
		);
		expect(container).toBeTruthy();
	});

	it("renders with items and accepts interactions", () => {
		const dispatch = vi.fn();
		const currentImage = { id: 1, parent_id: 2 };
		const windowedThumbnails: { img: MeldImage; absIndex: number }[] = [
			{
				img: { id: 1, parent_id: 2, filename: "img1" } as MeldImage,
				absIndex: 0,
			},
			{
				img: { id: 2, filename: "img2" } as MeldImage,
				absIndex: 1,
			},
			{
				img: { id: 3, parent_id: 1, filename: "img3" } as MeldImage,
				absIndex: 2,
			},
		];

		render(
			<ViewerThumbnailStrip
				windowedThumbnails={windowedThumbnails}
				viewerImageId={1}
				currentImage={currentImage as MeldImage}
				dispatch={dispatch}
				isLoadingLineage={false}
				isLoading={true}
				viewerMode="lighttable"
				lightTableSlotId="test-slot"
			/>,
		);

		const items = document.querySelectorAll(".meld-viewer-thumbnail");
		for (const item of Array.from(items)) {
			fireEvent.click(item);
		}
		expect(dispatch).toHaveBeenCalled();
	});
});
