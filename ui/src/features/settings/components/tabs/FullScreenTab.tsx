import type React from "react";
import type { Settings } from "../../../../types";
import { SettingItem } from "../SettingItem";

interface FullScreenTabProps {
	localSettings: Settings;
	setLocalSettings: React.Dispatch<React.SetStateAction<Settings>>;
	handleToggle: (key: keyof Settings, currentValue: boolean) => void;
	handleNumberChange: (key: keyof Settings, value: string, min?: number, max?: number) => void;
	handleNumberBlur: (config: { key: keyof Settings }) => void;
	// Input states
	maxPositivePromptLinesInput: string;
	maxNegativePromptLinesInput: string;
	fullscreenCorePromptCountInput: string;
}

export const FullScreenTab: React.FC<FullScreenTabProps> = ({
	localSettings,
	setLocalSettings,
	handleToggle,
	handleNumberChange,
	handleNumberBlur,
	maxPositivePromptLinesInput,
	maxNegativePromptLinesInput,
	fullscreenCorePromptCountInput,
}) => {
	return (
		<div className="meld-settings-list">
			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Navigation & Display</div>
				<SettingItem
					label="Show Tool Icons"
					description="Display navigation and close icons in fullscreen mode."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.show_icons"]}
							onChange={() =>
								handleToggle("fullscreen.show_icons", localSettings["fullscreen.show_icons"])
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Delete Mode"
					description="Choose how images are deleted in fullscreen mode."
				>
					<select
						className="meld-select"
						value={localSettings["fullscreen.delete_mode"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"fullscreen.delete_mode": e.target.value as Settings["fullscreen.delete_mode"],
							}))
						}
					>
						<option value="confirm">Confirmed</option>
						<option value="target_only">Unconfirmed (Target Only)</option>
						<option value="lineage">Unconfirmed (Include Lineage)</option>
					</select>
				</SettingItem>

				<SettingItem
					label="Loop Navigation"
					description="Loop to the beginning/end when navigating in fullscreen."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.loop"]}
							onChange={() => handleToggle("fullscreen.loop", localSettings["fullscreen.loop"])}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Small Image Display"
					description="Choose how to display images smaller than the screen in fullscreen."
				>
					<select
						className="meld-select"
						value={localSettings["fullscreen.small_image_mode"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"fullscreen.small_image_mode": e.target
									.value as Settings["fullscreen.small_image_mode"],
							}))
						}
					>
						<option value="original">Original Size</option>
						<option value="fit">Fit to Screen</option>
					</select>
				</SettingItem>
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Details Panel</div>
				<SettingItem
					label="Show Details by Default"
					description="Show the image details panel automatically when entering fullscreen."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.show_details_by_default"]}
							onChange={() =>
								handleToggle(
									"fullscreen.show_details_by_default",
									localSettings["fullscreen.show_details_by_default"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Filename/Path"
					description="Choose how to display the filename or path in fullscreen details."
				>
					<select
						className="meld-select"
						value={localSettings["fullscreen.details.show_filename"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"fullscreen.details.show_filename": e.target
									.value as Settings["fullscreen.details.show_filename"],
							}))
						}
					>
						<option value="filename">Filename</option>
						<option value="filepath">Filepath</option>
						<option value="none">None</option>
					</select>
				</SettingItem>

				<SettingItem
					label="Show Dimensions"
					description="Display dimensions in fullscreen details."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.details.show_dimensions"]}
							onChange={() =>
								handleToggle(
									"fullscreen.details.show_dimensions",
									localSettings["fullscreen.details.show_dimensions"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Created At"
					description="Display generation date/time in fullscreen details."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.details.show_created_at"]}
							onChange={() =>
								handleToggle(
									"fullscreen.details.show_created_at",
									localSettings["fullscreen.details.show_created_at"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Source Info"
					description="Display source image information in fullscreen details."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.details.show_source"]}
							onChange={() =>
								handleToggle(
									"fullscreen.details.show_source",
									localSettings["fullscreen.details.show_source"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem label="Show Model" description="Display model name in fullscreen details.">
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.details.show_model_name"]}
							onChange={() =>
								handleToggle(
									"fullscreen.details.show_model_name",
									localSettings["fullscreen.details.show_model_name"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Positive"
					description="Display positive prompt in fullscreen details."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.details.show_positive_prompt"]}
							onChange={() =>
								handleToggle(
									"fullscreen.details.show_positive_prompt",
									localSettings["fullscreen.details.show_positive_prompt"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Core Prompt"
					description="Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts)."
					labelId="fullscreen-show-core-prompt-label"
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							id="fullscreen-core-prompt-checkbox"
							aria-labelledby="fullscreen-show-core-prompt-label"
							checked={localSettings["fullscreen.details.show_core_prompt"]}
							onChange={() =>
								handleToggle(
									"fullscreen.details.show_core_prompt",
									localSettings["fullscreen.details.show_core_prompt"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Core Prompt Keyword Count"
					description="Number of rarity keywords to display in fullscreen."
					labelId="fullscreen-core-prompt-count-label"
				>
					<input
						type="number"
						id="fullscreen-core-prompt-count"
						aria-labelledby="fullscreen-core-prompt-count-label"
						className="meld-number-input"
						value={fullscreenCorePromptCountInput}
						min={1}
						max={100}
						onChange={(e) =>
							handleNumberChange("fullscreen.details.core_prompt_count", e.target.value, 1, 100)
						}
						onBlur={() =>
							handleNumberBlur({
								key: "fullscreen.details.core_prompt_count",
							})
						}
					/>
				</SettingItem>

				<SettingItem
					label="Max Positive Prompt Lines"
					description="Maximum number of lines to display for the positive prompt in fullscreen."
				>
					<input
						type="number"
						className="meld-number-input"
						value={maxPositivePromptLinesInput}
						min={1}
						max={100}
						onChange={(e) =>
							handleNumberChange(
								"fullscreen.details.max_positive_prompt_lines",
								e.target.value,
								1,
								100,
							)
						}
						onBlur={() =>
							handleNumberBlur({
								key: "fullscreen.details.max_positive_prompt_lines",
							})
						}
					/>
				</SettingItem>

				<SettingItem
					label="Show Negative"
					description="Display negative prompt in fullscreen details."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.details.show_negative_prompt"]}
							onChange={() =>
								handleToggle(
									"fullscreen.details.show_negative_prompt",
									localSettings["fullscreen.details.show_negative_prompt"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show User Notes"
					description="Display user notes in fullscreen details."
				>
					<select
						className="meld-select"
						value={localSettings["fullscreen.details.show_user_notes"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"fullscreen.details.show_user_notes": e.target
									.value as Settings["fullscreen.details.show_user_notes"],
							}))
						}
					>
						<option value="always">Always show</option>
						<option value="if_present">Show only when present</option>
						<option value="hidden">Always hide</option>
					</select>
				</SettingItem>

				<SettingItem
					label="Max Negative Prompt Lines"
					description="Maximum number of lines to display for the negative prompt in fullscreen."
				>
					<input
						type="number"
						className="meld-number-input"
						value={maxNegativePromptLinesInput}
						min={1}
						max={100}
						onChange={(e) =>
							handleNumberChange(
								"fullscreen.details.max_negative_prompt_lines",
								e.target.value,
								1,
								100,
							)
						}
						onBlur={() =>
							handleNumberBlur({
								key: "fullscreen.details.max_negative_prompt_lines",
							})
						}
					/>
				</SettingItem>

				<SettingItem label="Show Tags" description="Display tags in fullscreen details.">
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["fullscreen.details.show_tags"]}
							onChange={() =>
								handleToggle(
									"fullscreen.details.show_tags",
									localSettings["fullscreen.details.show_tags"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>
			</div>
		</div>
	);
};
