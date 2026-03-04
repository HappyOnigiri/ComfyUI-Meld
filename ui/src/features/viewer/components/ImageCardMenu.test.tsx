import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ImageCardMenu } from "./ImageCardMenu";

describe("ImageCardMenu", () => {
	it("renders without crashing when open", () => {
		const { container } = render(
			<ImageCardMenu
				isMenuOpen={true}
				setIsMenuOpen={vi.fn()}
				menuRef={{ current: null }}
				settings={{} as never}
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
		expect(container).toBeTruthy();
	});

	it("renders without crashing when closed", () => {
		const { container } = render(
			<ImageCardMenu
				isMenuOpen={false}
				setIsMenuOpen={vi.fn()}
				menuRef={{ current: null }}
				settings={{} as never}
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
		expect(container).toBeTruthy();
	});
});
