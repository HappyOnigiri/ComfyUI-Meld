import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useGallery } from "../store/GalleryContext";
import type { Settings } from "../types";

type Category = "General" | "Sidebar" | "Search" | "View" | "Full Screen";

export const SettingsModal: React.FC = () => {
	const { state, dispatch, updateSetting } = useGallery();
	const [activeTab, setActiveTab] = useState<Category>("General");

	const settingsConfig: {
		key: keyof Settings;
		label: string;
		description: string;
		type: "boolean";
		category: Category;
	}[] = [
		{
			key: "gallery.hide_parent_images",
			label: "Hide Source Images",
			description:
				"Hide images that have been used as a basis for other images (sources).",
			type: "boolean",
			category: "General",
		},
		{
			key: "sidebar.show_filename",
			label: "Show Filename",
			description: "Display the filename on the card.",
			type: "boolean",
			category: "Sidebar",
		},
		{
			key: "gallery.show_parent_image",
			label: "Show Source Info",
			description:
				"Display source image information and lineage link on image cards.",
			type: "boolean",
			category: "Sidebar",
		},
		{
			key: "sidebar.show_model_name",
			label: "Show Model Name",
			description: "Display the model name on the card.",
			type: "boolean",
			category: "Sidebar",
		},
		{
			key: "sidebar.show_positive_prompt",
			label: "Show Positive Prompt",
			description: "Display the positive prompt on the card.",
			type: "boolean",
			category: "Sidebar",
		},
		{
			key: "sidebar.show_negative_prompt",
			label: "Show Negative Prompt",
			description: "Display the negative prompt on the card.",
			type: "boolean",
			category: "Sidebar",
		},
		{
			key: "sidebar.show_tags",
			label: "Show Tags",
			description: "Display tags on the card.",
			type: "boolean",
			category: "Sidebar",
		},
		{
			key: "search.quick_suggestions",
			label: "Quick Suggestions",
			description: "Show suggested keywords when the search field is empty.",
			type: "boolean",
			category: "Search",
		},
		{
			key: "search.input_suggest",
			label: "Input Suggest",
			description: "Show suggestions when typing search prefixes (e.g. pos:).",
			type: "boolean",
			category: "Search",
		},
		{
			key: "search.realtime_search",
			label: "Real-time Search",
			description:
				"Perform search automatically while typing without pressing Enter.",
			type: "boolean",
			category: "Search",
		},
		{
			key: "viewer.show_filename",
			label: "Show Filename",
			description: "Display the filename in the image viewer.",
			type: "boolean",
			category: "View",
		},
		{
			key: "fullscreen.show_filename",
			label: "Show Filename",
			description: "Display the filename in fullscreen mode.",
			type: "boolean",
			category: "Full Screen",
		},
	];

	const handleToggle = (key: keyof Settings, currentValue: boolean) => {
		updateSetting(key, !currentValue);
	};

	const filteredSettings = settingsConfig.filter(
		(config) => config.category === activeTab,
	);

	return createPortal(
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

				<div className="meld-tabs">
					<button
						type="button"
						className={`meld-tab ${activeTab === "General" ? "active" : ""}`}
						onClick={() => setActiveTab("General")}
					>
						General
					</button>
					<button
						type="button"
						className={`meld-tab ${activeTab === "Sidebar" ? "active" : ""}`}
						onClick={() => setActiveTab("Sidebar")}
					>
						Sidebar
					</button>
					<button
						type="button"
						className={`meld-tab ${activeTab === "Search" ? "active" : ""}`}
						onClick={() => setActiveTab("Search")}
					>
						Search
					</button>
					<button
						type="button"
						className={`meld-tab ${activeTab === "View" ? "active" : ""}`}
						onClick={() => setActiveTab("View")}
					>
						View
					</button>
					<button
						type="button"
						className={`meld-tab ${activeTab === "Full Screen" ? "active" : ""}`}
						onClick={() => setActiveTab("Full Screen")}
					>
						Full Screen
					</button>
				</div>

				<div className="meld-modal-body">
					<div className="meld-settings-list">
						{filteredSettings.map((config) => (
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
		</div>,
		document.body,
	);
};
