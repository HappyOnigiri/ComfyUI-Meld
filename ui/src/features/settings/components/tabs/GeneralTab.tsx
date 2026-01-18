import type React from "react";
import type { Settings } from "../../../../types";
import { SettingItem } from "../SettingItem";

interface GeneralTabProps {
	localSettings: Settings;
	handleToggle: (key: keyof Settings, currentValue: boolean) => void;
	handleNumberChange: (
		key: keyof Settings,
		value: string,
		min?: number,
		max?: number,
	) => void;
	handleNumberBlur: (config: { key: keyof Settings }) => void;
	setLocalSettings: React.Dispatch<React.SetStateAction<Settings>>;
	handleViewTrash: () => void;
	// Input states
	initialLoadCountInput: string;
	maxLoadCountInput: string;
	lineageMaxDepthInput: string;
	trashRetentionDaysInput: string;
	autoLinkPhashThresholdInput: string;
	suggestPhashThresholdInput: string;
}

export const GeneralTab: React.FC<GeneralTabProps> = ({
	localSettings,
	handleToggle,
	handleNumberChange,
	handleNumberBlur,
	setLocalSettings,
	handleViewTrash,
	initialLoadCountInput,
	maxLoadCountInput,
	lineageMaxDepthInput,
	trashRetentionDaysInput,
	autoLinkPhashThresholdInput,
	suggestPhashThresholdInput,
}) => {
	return (
		<>
			<div className="meld-settings-list">
				<SettingItem
					label="Gallery View Mode"
					description="Choose between standard view with details or grid only view."
				>
					<select
						className="meld-select"
						value={localSettings["gallery.view_mode"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"gallery.view_mode": e.target
									.value as Settings["gallery.view_mode"],
							}))
						}
					>
						<option value="grid_details">Details View</option>
						<option value="grid_only">Grid Only View</option>
					</select>
				</SettingItem>

				<SettingItem
					label="Initial Load Count"
					description="Number of images to load and display immediately (10-1000)."
				>
					<input
						type="number"
						className="meld-number-input"
						value={initialLoadCountInput}
						min={10}
						max={1000}
						onChange={(e) =>
							handleNumberChange(
								"gallery.initial_load_count",
								e.target.value,
								10,
								1000,
							)
						}
						onBlur={() =>
							handleNumberBlur({ key: "gallery.initial_load_count" })
						}
					/>
				</SettingItem>

				<SettingItem
					label="Maximum Load Count"
					description="Maximum number of images to load in the background (10-1000000)."
				>
					<input
						type="number"
						className="meld-number-input"
						value={maxLoadCountInput}
						min={10}
						max={1000000}
						onChange={(e) =>
							handleNumberChange(
								"gallery.max_load_count",
								e.target.value,
								10,
								1000000,
							)
						}
						onBlur={() => handleNumberBlur({ key: "gallery.max_load_count" })}
					/>
				</SettingItem>

				<SettingItem
					label="Hide Parent Images"
					description="Hide images that have been used as a basis for other images (sources)."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["gallery.hide_parent_images"]}
							onChange={() =>
								handleToggle(
									"gallery.hide_parent_images",
									localSettings["gallery.hide_parent_images"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Source Matching Strategy"
					description="Algorithm used to identify the source image."
				>
					<select
						className="meld-select"
						value={localSettings["gallery.matching_strategy"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"gallery.matching_strategy": e.target
									.value as Settings["gallery.matching_strategy"],
							}))
						}
					>
						<option value="phash_created">pHash &amp; Created Time</option>
						<option value="filename_phash">Filename -&gt; pHash</option>
						<option value="phash_only">pHash Only</option>
					</select>
				</SettingItem>

				<SettingItem
					label="Max Lineage Depth"
					description="Maximum number of ancestor levels to fetch and display (1-10)."
				>
					<input
						type="number"
						className="meld-number-input"
						value={lineageMaxDepthInput}
						min={1}
						max={10}
						onChange={(e) =>
							handleNumberChange(
								"gallery.lineage_max_depth",
								e.target.value,
								1,
								10,
							)
						}
						onBlur={() =>
							handleNumberBlur({ key: "gallery.lineage_max_depth" })
						}
					/>
				</SettingItem>

				<SettingItem
					label="Trash Retention Period (Days)"
					description="How many days to keep deleted items in trash (0-365)."
				>
					<input
						type="number"
						className="meld-number-input"
						value={trashRetentionDaysInput}
						min={0}
						max={365}
						onChange={(e) =>
							handleNumberChange(
								"gallery.trash_retention_days",
								e.target.value,
								0,
								365,
							)
						}
						onBlur={() =>
							handleNumberBlur({ key: "gallery.trash_retention_days" })
						}
					/>
				</SettingItem>

				<SettingItem
					label="Auto Linking Threshold (%)"
					description="Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links."
				>
					<input
						type="number"
						className="meld-number-input"
						value={autoLinkPhashThresholdInput}
						min={0}
						max={100}
						onChange={(e) =>
							handleNumberChange(
								"gallery.auto_link_phash_threshold",
								e.target.value,
								0,
								100,
							)
						}
						onBlur={() =>
							handleNumberBlur({ key: "gallery.auto_link_phash_threshold" })
						}
					/>
				</SettingItem>

				<SettingItem
					label="Parent Suggestion Threshold (%)"
					description="Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors."
				>
					<input
						type="number"
						className="meld-number-input"
						value={suggestPhashThresholdInput}
						min={0}
						max={100}
						onChange={(e) =>
							handleNumberChange(
								"gallery.suggest_phash_threshold",
								e.target.value,
								0,
								100,
							)
						}
						onBlur={() =>
							handleNumberBlur({ key: "gallery.suggest_phash_threshold" })
						}
					/>
				</SettingItem>
			</div>

			<div className="meld-settings-extra">
				<SettingItem
					label="Trash Management"
					description="View and manage items currently in the trash bin."
				>
					<button
						type="button"
						className="meld-button meld-button--secondary"
						onClick={handleViewTrash}
					>
						View Trash
					</button>
				</SettingItem>
			</div>
		</>
	);
};
