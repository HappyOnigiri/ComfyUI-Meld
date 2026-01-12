import { X } from "lucide-react";
import type React from "react";
import { useGallery } from "../store/GalleryContext";
import type { Settings } from "../types";

export const SettingsModal: React.FC = () => {
	const { state, dispatch, updateSetting } = useGallery();

	const settingsConfig: {
		key: keyof Settings;
		label: string;
		description: string;
		type: "boolean";
	}[] = [
		{
			key: "gallery.show_parent_image",
			label: "Show Source Info",
			description:
				"Display source image information and lineage link on image cards.",
			type: "boolean",
		},
		{
			key: "gallery.hide_parent_images",
			label: "Hide Source Images",
			description:
				"Hide images that have been used as a basis for other images (sources).",
			type: "boolean",
		},
	];

	const handleToggle = (key: keyof Settings, currentValue: boolean) => {
		updateSetting(key, !currentValue);
	};

	return (
		<div
			className="meld-modal-overlay"
			onClick={() => dispatch({ type: "CLOSE_MODAL" })}
		>
			<div
				className="meld-modal-content meld-settings-modal"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h2>Settings</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={() => dispatch({ type: "CLOSE_MODAL" })}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					<div className="meld-settings-list">
						{settingsConfig.map((config) => (
							<div key={config.key} className="meld-settings-item">
								<div className="meld-settings-item__info">
									<div className="meld-settings-item__label">
										{config.label}
									</div>
									<div className="meld-settings-item__description">
										{config.description}
									</div>
								</div>
								<div className="meld-settings-item__control">
									{config.type === "boolean" && (
										<label className="meld-switch">
											<input
												type="checkbox"
												checked={!!state.settings[config.key]}
												onChange={() =>
													handleToggle(config.key, !!state.settings[config.key])
												}
											/>
											<span className="meld-switch__slider" />
										</label>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
