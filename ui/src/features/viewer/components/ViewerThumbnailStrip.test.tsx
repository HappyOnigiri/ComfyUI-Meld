import { render } from "@testing-library/react";
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
});
