import { fireEvent, render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { ViewerThumbnailStrip } from "./ViewerThumbnailStrip";

describe("ViewerThumbnailStrip", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<ViewerThumbnailStrip
				{...({ windowedThumbnails: [], currentImage: { id: 1 } } as unknown as React.ComponentProps<
					typeof ViewerThumbnailStrip
				>)}
			/>,
		);
		expect(container).toBeTruthy();
	});

	it("renders with items and accepts interactions", () => {
		const dispatch = vi.fn();
		const currentImage = { id: 1, parent_id: 2 };
		const windowedThumbnails = [
			{ img: { id: 1, parent_id: 2, filename: "img1" }, absIndex: 0 },
			{ img: { id: 2, filename: "img2" }, absIndex: 1 },
			{ img: { id: 3, parent_id: 1, filename: "img3" }, absIndex: 2 },
		] as unknown[];

		render(
			<ViewerThumbnailStrip
				windowedThumbnails={windowedThumbnails}
				viewerImageId={1}
				currentImage={
					currentImage as React.ComponentProps<typeof ViewerThumbnailStrip>["currentImage"]
				}
				dispatch={dispatch}
				isLoadingLineage={false}
				isLoading={true}
				viewerMode="lighttable"
				lightTableSlotId="test-slot"
			/>,
		);

		const items = document.querySelectorAll(".meld-viewer-thumbnail");
		for (const item of Array.from(items)) {
			try {
				fireEvent.click(item);
			} catch (e) {}
		}
		expect(dispatch).toHaveBeenCalled();
	});
});
