import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { InformationTab } from "./InformationTab";

// We need to define __APP_VERSION__ since it's used in InformationTab
vi.stubGlobal("__APP_VERSION__", "1.0.0");

describe("InformationTab", () => {
	it("renders key information elements visibly", () => {
		render(<InformationTab />);

		expect(screen.getByText("Version")).toBeVisible();
		expect(screen.getByText("1.0.0")).toBeVisible();

		expect(screen.getByText("Author")).toBeVisible();
		expect(screen.getByText("HappyOnigiri")).toBeVisible();

		const links = screen.getAllByRole("link");
		expect(links.length).toBeGreaterThanOrEqual(3);
		expect(links[0]).toHaveAttribute("href", "https://github.com/HappyOnigiri/ComfyUI-Meld");
		expect(links[1]).toHaveAttribute(
			"href",
			"https://github.com/HappyOnigiri/ComfyUI-Meld/issues/new/choose",
		);
		expect(links[2]).toHaveAttribute("href", "https://x.com/H_OnigiriWorks");
	});
});
