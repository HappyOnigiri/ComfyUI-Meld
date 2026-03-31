import type React from "react";
import { viewerShortcutKey } from "../../../settings";
import type { Settings } from "../../../types";

interface ViewerCheatSheetProps {
	settings: Settings;
	activeShortcutKey: string | null;
}

export const ViewerCheatSheet: React.FC<ViewerCheatSheetProps> = ({
	settings,
	activeShortcutKey,
}) => {
	if (!settings["viewer.shortcut.show_cheat_sheet"]) return null;

	return (
		<div className="meld-viewer-cheat-sheet">
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
				const numStr = String(num);
				const cmd = settings[viewerShortcutKey(numStr)];
				if (typeof cmd === "string" && cmd) {
					return (
						<div
							key={num}
							className={`meld-viewer-cheat-sheet__item ${activeShortcutKey === numStr ? "meld-viewer-cheat-sheet__item--active" : ""}`}
						>
							<span className="meld-viewer-cheat-sheet__key">{num}</span>
							<span className="meld-viewer-cheat-sheet__cmd">
								{cmd.replace("tag-toggle:", "+/- ")}
							</span>
						</div>
					);
				}
				return null;
			})}
		</div>
	);
};
