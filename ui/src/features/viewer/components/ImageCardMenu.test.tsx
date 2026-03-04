import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ImageCardMenu } from "./ImageCardMenu";

describe("ImageCardMenu", () => {
	it("renders without crashing when open", () => {
		const { getByText } = render(
			<ImageCardMenu
				isMenuOpen={true}
				setIsMenuOpen={vi.fn()}
				menuRef={{ current: null }}
				settings={{ "gallery.quick_shortcut.1": "add_unified_loader" } as any}
				onAddUnifiedLoader={vi.fn()}
				onRestoreWorkflow={vi.fn()}
				onSendToWorkflow={vi.fn()}
				onRunWithWorkflow={vi.fn()}
				onRunWithMask={vi.fn()}
				onEditSource={vi.fn()}
				onEditTags={vi.fn()}
				onEditNotes={vi.fn()}
				onDelete={vi.fn()}
				deleteLabel="Delete"
			/>,
		);
		expect(getByText("Delete")).not.toBeNull();
		expect(getByText("Add Unified Loader")).not.toBeNull();
	});

	it("renders without crashing when closed", () => {
		const { queryByText } = render(
			<ImageCardMenu
				isMenuOpen={false}
				setIsMenuOpen={vi.fn()}
				menuRef={{ current: null }}
				settings={{ "gallery.quick_shortcut.1": "add_unified_loader" } as any}
				onAddUnifiedLoader={vi.fn()}
				onRestoreWorkflow={vi.fn()}
				onSendToWorkflow={vi.fn()}
				onRunWithWorkflow={vi.fn()}
				onRunWithMask={vi.fn()}
				onEditSource={vi.fn()}
				onEditTags={vi.fn()}
				onEditNotes={vi.fn()}
				onDelete={vi.fn()}
				deleteLabel="Delete"
			/>,
		);
		expect(queryByText("Add Unified Loader")).toBeNull();
	});
});
