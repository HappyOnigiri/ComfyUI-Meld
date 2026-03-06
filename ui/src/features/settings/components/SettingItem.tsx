import type React from "react";

interface SettingItemProps {
	label: string;
	description: string;
	children: React.ReactNode;
}

export const SettingItem: React.FC<SettingItemProps> = ({ label, description, children }) => {
	return (
		<div className="meld-settings-item">
			<div className="meld-settings-item__info">
				<div className="meld-settings-item__label">{label}</div>
				<div className="meld-settings-item__description">{description}</div>
			</div>
			<div className="meld-settings-item__control">{children}</div>
		</div>
	);
};
