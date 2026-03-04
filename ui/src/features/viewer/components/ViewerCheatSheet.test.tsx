import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { ViewerCheatSheet } from "./ViewerCheatSheet";

describe("ViewerCheatSheet", () => {
	it("renders without crashing", () => {
		const { container } = render(<ViewerCheatSheet {...({ settings: {} } as any)} />);
		expect(container).toBeTruthy();
	});
});
