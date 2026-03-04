import { render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it } from "vitest";
import { PromptPopup } from "./PromptPopup";

describe("PromptPopup", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<PromptPopup {...({} as React.ComponentProps<typeof PromptPopup>)} />,
		);
		expect(container).toBeTruthy();
	});
});
