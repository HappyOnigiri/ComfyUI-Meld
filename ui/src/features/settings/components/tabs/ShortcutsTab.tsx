import type React from "react";
import type { Settings } from "../../../../types";
import { SettingItem } from "../SettingItem";

interface ShortcutsTabProps {
	localSettings: Settings;
	setLocalSettings: React.Dispatch<React.SetStateAction<Settings>>;
	shortcutErrors: Record<string, boolean>;
	setShortcutErrors: React.Dispatch<
		React.SetStateAction<Record<string, boolean>>
	>;
	validateShortcut: (command: string) => boolean;
	handleToggle: (key: keyof Settings, currentValue: boolean) => void;
	handleResetShortcuts: () => void;
}

export const ShortcutsTab: React.FC<ShortcutsTabProps> = ({
	localSettings,
	setLocalSettings,
	shortcutErrors,
	setShortcutErrors,
	validateShortcut,
	handleToggle,
	handleResetShortcuts,
}) => {
	const shortcutKeys: (keyof Settings)[] = [
		"viewer.shortcut.1",
		"viewer.shortcut.2",
		"viewer.shortcut.3",
		"viewer.shortcut.4",
		"viewer.shortcut.5",
		"viewer.shortcut.6",
		"viewer.shortcut.7",
		"viewer.shortcut.8",
		"viewer.shortcut.9",
		"viewer.shortcut.0",
	];

	return (
		<>
			<div className="meld-settings-help">
				<p>These shortcuts are available in both View and Full Screen modes.</p>
				<p>
					You can combine multiple commands with spaces.
					<br />
					Example: <code>tag:favorite next</code> (Add tag and move to next)
				</p>
				<div className="meld-settings-help__commands">
					<strong>Available commands:</strong>
					<ul>
						<li>
							<code>tag:NAME</code> - Add a tag
						</li>
						<li>
							<code>-tag:NAME</code> - Remove a tag
						</li>
						<li>
							<code>tag-toggle:NAME</code> - Toggle a tag
						</li>
						<li>
							<code>next</code> / <code>prev</code> - Navigate images
						</li>
						<li>
							<code>delete</code> - Delete image immediately (No confirm)
						</li>
					</ul>
				</div>
			</div>

			<div className="meld-settings-list">
				{shortcutKeys.map((key, index) => (
					<SettingItem
						key={key}
						label={`Shortcut ${index === 9 ? 0 : index + 1} (Key: ${index === 9 ? 0 : index + 1})`}
						description={`Command to execute when pressing '${index === 9 ? 0 : index + 1}' in View/Full Screen mode.`}
					>
						<input
							type="text"
							className={`meld-text-input ${shortcutErrors[key] ? "meld-text-input--error" : ""}`}
							value={(localSettings[key] as string) || ""}
							onChange={(e) => {
								setLocalSettings((prev) => ({
									...prev,
									[key]: e.target.value,
								}));
							}}
							onBlur={() => {
								const isValid = validateShortcut(
									(localSettings[key] as string) || "",
								);
								setShortcutErrors((prev) => ({
									...prev,
									[key]: !isValid,
								}));
							}}
						/>
					</SettingItem>
				))}

				<SettingItem
					label="Show Cheat Sheet"
					description="Display shortcut key guide in View/Full Screen mode."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={!!localSettings["viewer.shortcut.show_cheat_sheet"]}
							onChange={() =>
								handleToggle(
									"viewer.shortcut.show_cheat_sheet",
									!!localSettings["viewer.shortcut.show_cheat_sheet"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>
			</div>

			<div className="meld-settings-extra">
				<SettingItem
					label="Reset Shortcuts"
					description="Restore all shortcuts to their default values."
				>
					<button
						type="button"
						className="meld-button meld-button--secondary"
						onClick={handleResetShortcuts}
					>
						Reset to Defaults
					</button>
				</SettingItem>
			</div>
		</>
	);
};
