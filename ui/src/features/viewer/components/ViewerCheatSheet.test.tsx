import { render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it } from "vitest";
import { ViewerCheatSheet } from "./ViewerCheatSheet";

describe("ViewerCheatSheet", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<ViewerCheatSheet
				{...({ settings: {} } as unknown as React.ComponentProps<typeof ViewerCheatSheet>)}
			/>,
		);
		expect(container).toBeTruthy();
	});
});
