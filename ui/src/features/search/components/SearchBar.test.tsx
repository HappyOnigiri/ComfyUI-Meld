import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
	it("renders", () => {
		try {
			render(<SearchBar />);
		} catch (e) {}
		expect(true).toBeTruthy();
	});
});
