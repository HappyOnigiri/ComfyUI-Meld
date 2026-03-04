import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import type { Settings } from "../../../../types";
import { SystemTab } from "./SystemTab";

describe("SystemTab", () => {
	it("renders without crashing", () => {
		const dummySettings = {} as Settings;
		const { container } = render(
			<SystemTab
				localSettings={dummySettings}
				setLocalSettings={vi.fn()}
				handleNumberChange={vi.fn()}
				handleNumberBlur={vi.fn()}
				handleToggle={vi.fn()}
				handleViewTrash={vi.fn()}
				handleClearThumbnailCache={vi.fn()}
				lineageMaxDepthInput="5"
				trashRetentionDaysInput="30"
				autoLinkPhashThresholdInput="92"
				suggestPhashThresholdInput="82"
			/>,
		);
		expect(container).toBeTruthy();
	});
});
