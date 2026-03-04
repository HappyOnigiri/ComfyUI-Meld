import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { PromptPopup } from "./PromptPopup";

describe("PromptPopup", () => {
	it("renders without crashing", () => {
		const { container } = render(<PromptPopup {...({} as any)} />);
		expect(container).toBeTruthy();
	});
});
