import type React from "react";
import type { Settings } from "../../../types";
import { SettingItem } from "../SettingItem";

interface ViewTabProps {
	localSettings: Settings;
	setLocalSettings: React.Dispatch<React.SetStateAction<Settings>>;
	handleToggle: (key: keyof Settings, currentValue: boolean) => void;
	handleNumberChange: (
		key: keyof Settings,
		value: string,
		min?: number,
		max?: number,
	) => void;
	handleNumberBlur: (config: { key: keyof Settings }) => void;
	// Input states
	thumbnailWindowSizeInput: string;
	maxPositivePromptLinesInput: string;
	maxNegativePromptLinesInput: string;
	showDetailsOnly?: boolean;
}

export const ViewTab: React.FC<ViewTabProps> = ({
	localSettings,
	setLocalSettings,
	handleToggle,
	handleNumberChange,
	handleNumberBlur,
	thumbnailWindowSizeInput,
	maxPositivePromptLinesInput,
	maxNegativePromptLinesInput,
	showDetailsOnly = false,
}) => {
	const renderViewSettings = () => (
		<>
			<SettingItem
				label="Loop Navigation"
				description="Loop to the beginning/end when navigating in the viewer."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.loop"]}
						onChange={() =>
							handleToggle("viewer.loop", localSettings["viewer.loop"])
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Small Image Display"
				description="Choose how to display images smaller than the viewer area."
			>
				<select
					className="meld-select"
					value={localSettings["viewer.small_image_mode"]}
					onChange={(e) =>
						setLocalSettings((prev) => ({
							...prev,
							"viewer.small_image_mode": e.target
								.value as Settings["viewer.small_image_mode"],
						}))
					}
				>
					<option value="original">Original Size</option>
					<option value="fit">Fit to Screen</option>
				</select>
			</SettingItem>

			<SettingItem
				label="Show Tool Icons"
				description="Display navigation and action icons in view mode."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.show_icons"]}
						onChange={() =>
							handleToggle(
								"viewer.show_icons",
								localSettings["viewer.show_icons"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Show Thumbnails"
				description="Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.show_thumbnails"]}
						onChange={() =>
							handleToggle(
								"viewer.show_thumbnails",
								localSettings["viewer.show_thumbnails"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Delete Mode"
				description="Choose how images are deleted in view mode."
			>
				<select
					className="meld-select"
					value={localSettings["viewer.delete_mode"]}
					onChange={(e) =>
						setLocalSettings((prev) => ({
							...prev,
							"viewer.delete_mode": e.target
								.value as Settings["viewer.delete_mode"],
						}))
					}
				>
					<option value="confirm">Confirmed</option>
					<option value="target_only">Unconfirmed (Target Only)</option>
					<option value="lineage">Unconfirmed (Include Lineage)</option>
				</select>
			</SettingItem>

			<SettingItem
				label="Thumbnail Window Size"
				description="Number of thumbnails to keep in the viewer (1-10000)."
			>
				<input
					type="number"
					className="meld-number-input"
					value={thumbnailWindowSizeInput}
					min={1}
					max={10000}
					onChange={(e) =>
						handleNumberChange(
							"viewer.thumbnail_window_size",
							e.target.value,
							1,
							10000,
						)
					}
					onBlur={() =>
						handleNumberBlur({ key: "viewer.thumbnail_window_size" })
					}
				/>
			</SettingItem>
		</>
	);

	const renderDetailSettings = () => (
		<>
			<SettingItem
				label="Show by Default"
				description="Show the image details panel automatically when opening the viewer."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.show_details_by_default"]}
						onChange={() =>
							handleToggle(
								"viewer.show_details_by_default",
								localSettings["viewer.show_details_by_default"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Show Filename/Path"
				description="Choose how to display the filename or path in the details."
			>
				<select
					className="meld-select"
					value={localSettings["viewer.details.show_filename"]}
					onChange={(e) =>
						setLocalSettings((prev) => ({
							...prev,
							"viewer.details.show_filename": e.target
								.value as Settings["viewer.details.show_filename"],
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
				description="Display dimensions in the details panel."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.details.show_dimensions"]}
						onChange={() =>
							handleToggle(
								"viewer.details.show_dimensions",
								localSettings["viewer.details.show_dimensions"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Show Created At"
				description="Display generation date/time in the details panel."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.details.show_created_at"]}
						onChange={() =>
							handleToggle(
								"viewer.details.show_created_at",
								localSettings["viewer.details.show_created_at"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Show Model"
				description="Display model name in the details panel."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.details.show_model_name"]}
						onChange={() =>
							handleToggle(
								"viewer.details.show_model_name",
								localSettings["viewer.details.show_model_name"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Show Positive"
				description="Display positive prompt in the details panel."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.details.show_positive_prompt"]}
						onChange={() =>
							handleToggle(
								"viewer.details.show_positive_prompt",
								localSettings["viewer.details.show_positive_prompt"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Show Negative"
				description="Display negative prompt in the details panel."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.details.show_negative_prompt"]}
						onChange={() =>
							handleToggle(
								"viewer.details.show_negative_prompt",
								localSettings["viewer.details.show_negative_prompt"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Show Source"
				description="Display source image information in the details panel."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.details.show_source"]}
						onChange={() =>
							handleToggle(
								"viewer.details.show_source",
								localSettings["viewer.details.show_source"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>

			<SettingItem
				label="Max Positive Prompt Lines"
				description="Maximum number of lines to display for the positive prompt."
			>
				<input
					type="number"
					className="meld-number-input"
					value={maxPositivePromptLinesInput}
					min={1}
					max={100}
					onChange={(e) =>
						handleNumberChange(
							"viewer.details.max_positive_prompt_lines",
							e.target.value,
							1,
							100,
						)
					}
					onBlur={() =>
						handleNumberBlur({
							key: "viewer.details.max_positive_prompt_lines",
						})
					}
				/>
			</SettingItem>

			<SettingItem
				label="Max Negative Prompt Lines"
				description="Maximum number of lines to display for the negative prompt."
			>
				<input
					type="number"
					className="meld-number-input"
					value={maxNegativePromptLinesInput}
					min={1}
					max={100}
					onChange={(e) =>
						handleNumberChange(
							"viewer.details.max_negative_prompt_lines",
							e.target.value,
							1,
							100,
						)
					}
					onBlur={() =>
						handleNumberBlur({
							key: "viewer.details.max_negative_prompt_lines",
						})
					}
				/>
			</SettingItem>

			<SettingItem
				label="Show Tags"
				description="Display tags in the details panel."
			>
				<label className="meld-switch">
					<input
						type="checkbox"
						checked={localSettings["viewer.details.show_tags"]}
						onChange={() =>
							handleToggle(
								"viewer.details.show_tags",
								localSettings["viewer.details.show_tags"],
							)
						}
					/>
					<span className="meld-switch__slider" />
				</label>
			</SettingItem>
		</>
	);

	return (
		<div className="meld-settings-list">
			{!showDetailsOnly && renderViewSettings()}
			{renderDetailSettings()}
		</div>
	);
};
