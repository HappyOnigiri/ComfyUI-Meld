import type React from "react";
import type { Settings } from "../../../types";
import { SettingItem } from "../SettingItem";

interface SidebarTabProps {
	localSettings: Settings;
	setLocalSettings: React.Dispatch<React.SetStateAction<Settings>>;
	handleToggle: (key: keyof Settings, currentValue: boolean) => void;
}

export const SidebarTab: React.FC<SidebarTabProps> = ({
	localSettings,
	setLocalSettings,
	handleToggle,
}) => {
	return (
		<div className="meld-settings-list">
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
				label="Show Model Name"
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
				label="Show Positive Prompt"
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
				label="Show Negative Prompt"
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
	);
};
