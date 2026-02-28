import type React from "react";
import type { Settings } from "../../../../types";
import { QUICK_SHORTCUT_ACTIONS } from "../../../viewer/utils/shortcutActions";
import { SettingItem } from "../SettingItem";

interface GalleryTabProps {
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
	thumbnailSizeInput: string;
	initialLoadCountInput: string;
	maxLoadCountInput: string;
}

export const GalleryTab: React.FC<GalleryTabProps> = ({
	localSettings,
	setLocalSettings,
	handleToggle,
	handleNumberChange,
	handleNumberBlur,
	thumbnailSizeInput,
	initialLoadCountInput,
	maxLoadCountInput,
}) => {
	return (
		<div className="meld-settings-list">
			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Card Appearance</div>
				<SettingItem
					label="Thumbnail Size"
					description="Size of the image thumbnails in the sidebar (50-500px)."
				>
					<input
						type="number"
						className="meld-number-input"
						value={thumbnailSizeInput}
						min={50}
						max={500}
						onChange={(e) =>
							handleNumberChange(
								"sidebar.thumbnail_size",
								e.target.value,
								50,
								500,
							)
						}
						onBlur={() => handleNumberBlur({ key: "sidebar.thumbnail_size" })}
					/>
				</SettingItem>

				<SettingItem
					label="Show Filename/Path"
					description="Choose how to display the filename or path on the card."
				>
					<select
						className="meld-select"
						value={localSettings["sidebar.show_filename"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"sidebar.show_filename": e.target
									.value as Settings["sidebar.show_filename"],
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
					description="Display the image dimensions (width x height) on the card."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["sidebar.show_dimensions"]}
							onChange={() =>
								handleToggle(
									"sidebar.show_dimensions",
									localSettings["sidebar.show_dimensions"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Created At"
					description="Display the image creation date and time on the card."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["sidebar.show_created_at"]}
							onChange={() =>
								handleToggle(
									"sidebar.show_created_at",
									localSettings["sidebar.show_created_at"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Source Images"
					description="Display images that have been used as a basis for other images (sources). (Note: This setting is ignored during searches)"
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["gallery.show_parent_images"]}
							onChange={() =>
								handleToggle(
									"gallery.show_parent_images",
									localSettings["gallery.show_parent_images"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Source Info"
					description="Display source image information and lineage link on image cards."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["gallery.show_parent_image"]}
							onChange={() =>
								handleToggle(
									"gallery.show_parent_image",
									localSettings["gallery.show_parent_image"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Model"
					description="Display the model name on the card."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["sidebar.show_model_name"]}
							onChange={() =>
								handleToggle(
									"sidebar.show_model_name",
									localSettings["sidebar.show_model_name"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Positive"
					description="Display the positive prompt on the card."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["sidebar.show_positive_prompt"]}
							onChange={() =>
								handleToggle(
									"sidebar.show_positive_prompt",
									localSettings["sidebar.show_positive_prompt"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Negative"
					description="Display the negative prompt on the card."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["sidebar.show_negative_prompt"]}
							onChange={() =>
								handleToggle(
									"sidebar.show_negative_prompt",
									localSettings["sidebar.show_negative_prompt"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show User Notes"
					description="Display user notes on the card."
				>
					<select
						className="meld-select"
						value={localSettings["sidebar.show_user_notes"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"sidebar.show_user_notes": e.target
									.value as Settings["sidebar.show_user_notes"],
							}))
						}
					>
						<option value="always">Always show</option>
						<option value="if_present">Show only when present</option>
						<option value="hidden">Always hide</option>
					</select>
				</SettingItem>

				<SettingItem label="Show Tags" description="Display tags on the card.">
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["sidebar.show_tags"]}
							onChange={() =>
								handleToggle(
									"sidebar.show_tags",
									localSettings["sidebar.show_tags"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Search Behavior</div>
				<SettingItem
					label="Show Quick Suggestions"
					description="Show suggested keywords when the search field is empty."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["search.quick_suggestions"]}
							onChange={() =>
								handleToggle(
									"search.quick_suggestions",
									localSettings["search.quick_suggestions"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>

				<SettingItem
					label="Show Input Suggestions"
					description="Show suggestions when typing search prefixes (e.g. pos:)."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["search.input_suggest"]}
							onChange={() =>
								handleToggle(
									"search.input_suggest",
									localSettings["search.input_suggest"],
								)
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">List Behavior</div>
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
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Quick Shortcuts (Card)</div>
				{[1, 2, 3].map((slot) => (
					<SettingItem
						key={slot}
						label={`Quick Shortcut Slot ${slot}`}
						description={`Choose an action for shortcut slot ${slot}.`}
					>
						<select
							className="meld-select"
							value={
								localSettings[
									`gallery.quick_shortcut.${slot}` as keyof Settings
								] as string
							}
							onChange={(e) =>
								setLocalSettings((prev) => ({
									...prev,
									[`gallery.quick_shortcut.${slot}`]: e.target.value,
								}))
							}
						>
							{QUICK_SHORTCUT_ACTIONS.map((action) => (
								<option key={action.id} value={action.id}>
									{action.label}
								</option>
							))}
						</select>
					</SettingItem>
				))}
			</div>
		</div>
	);
};
