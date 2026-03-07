import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import type { Settings } from "../../../../types";
import { FullScreenTab } from "./FullScreenTab";

describe("FullScreenTab", () => {
	it("renders without crashing", () => {
		const dummySettings = {} as Settings;
		const { container } = render(
			<FullScreenTab
				localSettings={dummySettings}
				setLocalSettings={vi.fn()}
				handleToggle={vi.fn()}
				handleNumberChange={vi.fn()}
				handleNumberBlur={vi.fn()}
				fullscreenCorePromptCountInput="30"
				maxPositivePromptLinesInput="5"
				maxNegativePromptLinesInput="5"
			/>,
		);
		expect(container).toBeTruthy();
	});
});
