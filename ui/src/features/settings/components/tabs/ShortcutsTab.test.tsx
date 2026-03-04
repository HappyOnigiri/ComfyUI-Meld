import { render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { ShortcutsTab } from "./ShortcutsTab";

vi.mock("../../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { settings: {} },
		dispatch: vi.fn(),
	}),
}));

describe("ShortcutsTab", () => {
	it("renders", () => {
		expect(() =>
			render(
				<ShortcutsTab
					{...({
						localSettings: { "viewer.shortcut.1": "test" },
						setLocalSettings: vi.fn(),
						shortcutErrors: {},
						setShortcutErrors: vi.fn(),
						validateShortcut: vi.fn(),
						handleToggle: vi.fn(),
						handleResetShortcuts: vi.fn(),
					} as unknown as React.ComponentProps<typeof ShortcutsTab>)}
				/>,
			),
		).not.toThrow();
	});
});
