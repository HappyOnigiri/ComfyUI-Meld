import type React from "react";
import type { Settings } from "../../../../types";
import { SettingItem } from "../SettingItem";

interface SearchTabProps {
	localSettings: Settings;
	handleToggle: (key: keyof Settings, currentValue: boolean) => void;
}

export const SearchTab: React.FC<SearchTabProps> = ({
	localSettings,
	handleToggle,
}) => {
	return (
		<div className="meld-settings-list">
			<SettingItem
				label="Quick Suggestions"
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
				label="Input Suggest"
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
	);
};
