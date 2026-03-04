import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { InformationTab } from "./InformationTab";

// We need to define __APP_VERSION__ since it's used in InformationTab
vi.stubGlobal("__APP_VERSION__", "1.0.0");

describe("InformationTab", () => {
	it("renders without crashing", () => {
		expect(() => render(<InformationTab />)).not.toThrow();
	});
});
