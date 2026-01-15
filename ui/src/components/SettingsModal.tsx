import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useGallery } from "../store/GalleryContext";
import type { Settings } from "../types";

type Category =
	| "General"
	| "Sidebar"
	| "Search"
	| "View"
	| "View Details"
	| "Full Screen"
	| "Full Screen Detail";

export const SettingsModal: React.FC = () => {
	const { state, dispatch, updateSetting } = useGallery();
	const [activeTab, setActiveTab] = useState<Category>("General");
	const [localSettings, setLocalSettings] = useState<Settings>({
		...state.settings,
	});
	const [pageSizeInput, setPageSizeInput] = useState<string>(
		state.settings["gallery.page_size"].toString(),
	);
	const [lineageMaxDepthInput, setLineageMaxDepthInput] = useState<string>(
		state.settings["gallery.lineage_max_depth"].toString(),
	);
	const [thumbnailWindowSizeInput, setThumbnailWindowSizeInput] =
		useState<string>(state.settings["viewer.thumbnail_window_size"].toString());
	const [maxPositivePromptLinesInput, setMaxPositivePromptLinesInput] =
		useState<string>(
			state.settings["viewer.details.max_positive_prompt_lines"].toString(),
		);
	const [maxNegativePromptLinesInput, setMaxNegativePromptLinesInput] =
		useState<string>(
			state.settings["viewer.details.max_negative_prompt_lines"].toString(),
		);
	const [
		fullscreenMaxPositivePromptLinesInput,
		setFullscreenMaxPositivePromptLinesInput,
	] = useState<string>(
		state.settings["fullscreen.details.max_positive_prompt_lines"].toString(),
	);
	const [
		fullscreenMaxNegativePromptLinesInput,
		setFullscreenMaxNegativePromptLinesInput,
	] = useState<string>(
		state.settings["fullscreen.details.max_negative_prompt_lines"].toString(),
	);

	const settingsConfig: {
		key: keyof Settings;
		label: string;
		description: string;
		type: "boolean" | "number" | "select";
		options?: { value: string; label: string }[];
		category: Category;
		min?: number;
		max?: number;
	}[] = [
		{
			key: "gallery.page_size",
			label: "Page Size",
			description: "Number of images to display per page (10-10000).",
			type: "number",
			category: "General",
			min: 10,
			max: 10000,
		},
		{
			key: "gallery.hide_parent_images",
			label: "Hide Source Images",
			description:
				"Hide images that have been used as a basis for other images (sources).",
			type: "boolean",
			category: "General",
		},
		{
			key: "gallery.matching_strategy",
			label: "Source Matching Strategy",
			description: "Algorithm used to identify the source image.",
			type: "select",
			category: "General",
			options: [
				{ value: "phash_created", label: "pHash & Created Time" },
				{ value: "filename_phash", label: "Filename -> pHash" },
				{ value: "phash_only", label: "pHash Only" },
			],
		},
		{
			key: "gallery.lineage_max_depth",
			label: "Max Lineage Depth",
			description:
				"Maximum number of ancestor levels to fetch and display (1-10).",
			type: "number",
			category: "General",
			min: 1,
			max: 10,
		},
		{
			key: "sidebar.show_filename",
			label: "Show Filename",
			description: "Display the filename on the card.",
			type: "boolean",
			category: "Sidebar",
		},
		{
			key: "sidebar.show_dimensions",
			label: "Show Dimensions",
			description: "Display the image dimensions (width x height) on the card.",
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
			key: "viewer.loop",
			label: "Loop Navigation",
			description: "Loop to the beginning/end when navigating in the viewer.",
			type: "boolean",
			category: "View",
		},
		{
			key: "viewer.show_details_by_default",
			label: "Show by Default",
			description:
				"Show the image details panel automatically when opening the viewer.",
			type: "boolean",
			category: "View Details",
		},
		{
			key: "viewer.details.show_filename",
			label: "Show Filename",
			description: "Display the filename in the details panel.",
			type: "boolean",
			category: "View Details",
		},
		{
			key: "viewer.details.show_dimensions",
			label: "Show Dimensions",
			description: "Display dimensions in the details panel.",
			type: "boolean",
			category: "View Details",
		},
		{
			key: "viewer.details.show_created_at",
			label: "Show Created At",
			description: "Display generation date/time in the details panel.",
			type: "boolean",
			category: "View Details",
		},
		{
			key: "viewer.details.show_model_name",
			label: "Show Model",
			description: "Display model name in the details panel.",
			type: "boolean",
			category: "View Details",
		},
		{
			key: "viewer.details.show_positive_prompt",
			label: "Show Positive",
			description: "Display positive prompt in the details panel.",
			type: "boolean",
			category: "View Details",
		},
		{
			key: "viewer.details.show_negative_prompt",
			label: "Show Negative",
			description: "Display negative prompt in the details panel.",
			type: "boolean",
			category: "View Details",
		},
		{
			key: "viewer.details.max_positive_prompt_lines",
			label: "Max Positive Prompt Lines",
			description:
				"Maximum number of lines to display for the positive prompt.",
			type: "number",
			category: "View Details",
			min: 1,
			max: 100,
		},
		{
			key: "viewer.details.max_negative_prompt_lines",
			label: "Max Negative Prompt Lines",
			description:
				"Maximum number of lines to display for the negative prompt.",
			type: "number",
			category: "View Details",
			min: 1,
			max: 100,
		},
		{
			key: "viewer.details.show_tags",
			label: "Show Tags",
			description: "Display tags in the details panel.",
			type: "boolean",
			category: "View Details",
		},
		{
			key: "viewer.show_icons",
			label: "Show Tool Icons",
			description: "Display navigation and action icons in view mode.",
			type: "boolean",
			category: "View",
		},
		{
			key: "viewer.show_thumbnails",
			label: "Show Thumbnails",
			description:
				"Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
			type: "boolean",
			category: "View",
		},
		{
			key: "viewer.thumbnail_window_size",
			label: "Thumbnail Window Size",
			description: "Number of thumbnails to keep in the viewer (1-10000).",
			type: "number",
			category: "View",
			min: 1,
			max: 10000,
		},
		{
			key: "fullscreen.show_icons",
			label: "Show Tool Icons",
			description: "Display navigation and close icons in fullscreen mode.",
			type: "boolean",
			category: "Full Screen",
		},
		{
			key: "fullscreen.loop",
			label: "Loop Navigation",
			description: "Loop to the beginning/end when navigating in fullscreen.",
			type: "boolean",
			category: "Full Screen",
		},
		{
			key: "fullscreen.show_details_by_default",
			label: "Show Detail by Default",
			description:
				"Show the image details panel automatically when entering fullscreen.",
			type: "boolean",
			category: "Full Screen Detail",
		},
		{
			key: "fullscreen.details.show_filename",
			label: "Show Filename",
			description: "Display the filename in fullscreen details.",
			type: "boolean",
			category: "Full Screen Detail",
		},
		{
			key: "fullscreen.details.show_dimensions",
			label: "Show Dimensions",
			description: "Display dimensions in fullscreen details.",
			type: "boolean",
			category: "Full Screen Detail",
		},
		{
			key: "fullscreen.details.show_created_at",
			label: "Show Created At",
			description: "Display generation date/time in fullscreen details.",
			type: "boolean",
			category: "Full Screen Detail",
		},
		{
			key: "fullscreen.details.show_model_name",
			label: "Show Model",
			description: "Display model name in fullscreen details.",
			type: "boolean",
			category: "Full Screen Detail",
		},
		{
			key: "fullscreen.details.show_positive_prompt",
			label: "Show Positive",
			description: "Display positive prompt in fullscreen details.",
			type: "boolean",
			category: "Full Screen Detail",
		},
		{
			key: "fullscreen.details.show_negative_prompt",
			label: "Show Negative",
			description: "Display negative prompt in fullscreen details.",
			type: "boolean",
			category: "Full Screen Detail",
		},
		{
			key: "fullscreen.details.max_positive_prompt_lines",
			label: "Max Positive Prompt Lines",
			description:
				"Maximum number of lines to display for the positive prompt in fullscreen.",
			type: "number",
			category: "Full Screen Detail",
			min: 1,
			max: 100,
		},
		{
			key: "fullscreen.details.max_negative_prompt_lines",
			label: "Max Negative Prompt Lines",
			description:
				"Maximum number of lines to display for the negative prompt in fullscreen.",
			type: "number",
			category: "Full Screen Detail",
			min: 1,
			max: 100,
		},
		{
			key: "fullscreen.details.show_tags",
			label: "Show Tags",
			description: "Display tags in fullscreen details.",
			type: "boolean",
			category: "Full Screen Detail",
		},
	];

	const handleClose = async () => {
		// Identify changed settings
		const changedKeys = (
			Object.keys(localSettings) as (keyof Settings)[]
		).filter((key) => localSettings[key] !== state.settings[key]);

		if (changedKeys.length > 0) {
			// Save each changed setting
			// Note: We process them sequentially to avoid race conditions in the state updates
			for (const key of changedKeys) {
				await updateSetting(key, localSettings[key]);
			}
		}

		dispatch({ type: "CLOSE_MODAL" });
	};

	const handleToggle = (key: keyof Settings, currentValue: boolean) => {
		setLocalSettings((prev) => ({
			...prev,
			[key]: !currentValue,
		}));
	};

	const handleNumberChange = (
		key: keyof Settings,
		value: string,
		min?: number,
		max?: number,
	) => {
		if (key === "gallery.page_size") {
			setPageSizeInput(value);
		} else if (key === "gallery.lineage_max_depth") {
			setLineageMaxDepthInput(value);
		} else if (key === "viewer.thumbnail_window_size") {
			setThumbnailWindowSizeInput(value);
		} else if (key === "viewer.details.max_positive_prompt_lines") {
			setMaxPositivePromptLinesInput(value);
		} else if (key === "viewer.details.max_negative_prompt_lines") {
			setMaxNegativePromptLinesInput(value);
		} else if (key === "fullscreen.details.max_positive_prompt_lines") {
			setFullscreenMaxPositivePromptLinesInput(value);
		} else if (key === "fullscreen.details.max_negative_prompt_lines") {
			setFullscreenMaxNegativePromptLinesInput(value);
		}

		const num = Number.parseInt(value, 10);
		if (!Number.isNaN(num)) {
			let val = num;
			if (min !== undefined && val < min) val = min;
			if (max !== undefined && val > max) val = max;
			setLocalSettings((prev) => ({
				...prev,
				[key]: val,
			}));
		}
	};

	const filteredSettings = settingsConfig.filter(
		(config) => config.category === activeTab,
	);

	return createPortal(
		<div className="meld-modal-overlay" onClick={handleClose}>
			<div
				className="meld-modal-content meld-settings-modal"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h2>Settings</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={handleClose}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-settings-layout">
					<div className="meld-settings-sidebar">
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
								className={`meld-tab ${activeTab === "View Details" ? "active" : ""}`}
								onClick={() => setActiveTab("View Details")}
							>
								View Details
							</button>
							<button
								type="button"
								className={`meld-tab ${activeTab === "Full Screen" ? "active" : ""}`}
								onClick={() => setActiveTab("Full Screen")}
							>
								Full Screen
							</button>
							<button
								type="button"
								className={`meld-tab ${activeTab === "Full Screen Detail" ? "active" : ""}`}
								onClick={() => setActiveTab("Full Screen Detail")}
							>
								Full Screen Detail
							</button>
						</div>
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
													checked={!!localSettings[config.key]}
													onChange={() =>
														handleToggle(
															config.key,
															!!localSettings[config.key],
														)
													}
												/>
												<span className="meld-switch__slider" />
											</label>
										)}
										{config.type === "number" && (
											<input
												type="number"
												className="meld-number-input"
												value={
													config.key === "gallery.page_size"
														? pageSizeInput
														: config.key === "gallery.lineage_max_depth"
															? lineageMaxDepthInput
															: config.key === "viewer.thumbnail_window_size"
																? thumbnailWindowSizeInput
																: config.key ===
																		"viewer.details.max_positive_prompt_lines"
																	? maxPositivePromptLinesInput
																	: config.key ===
																			"viewer.details.max_negative_prompt_lines"
																		? maxNegativePromptLinesInput
																		: config.key ===
																				"fullscreen.details.max_positive_prompt_lines"
																			? fullscreenMaxPositivePromptLinesInput
																			: config.key ===
																					"fullscreen.details.max_negative_prompt_lines"
																				? fullscreenMaxNegativePromptLinesInput
																				: (localSettings[
																						config.key
																					] as unknown as number)
												}
												min={config.min}
												max={config.max}
												onChange={(e) =>
													handleNumberChange(
														config.key,
														e.target.value,
														config.min,
														config.max,
													)
												}
												onBlur={() => {
													if (config.key === "gallery.page_size") {
														setPageSizeInput(
															localSettings["gallery.page_size"].toString(),
														);
													} else if (
														config.key === "gallery.lineage_max_depth"
													) {
														setLineageMaxDepthInput(
															localSettings[
																"gallery.lineage_max_depth"
															].toString(),
														);
													} else if (
														config.key === "viewer.thumbnail_window_size"
													) {
														setThumbnailWindowSizeInput(
															localSettings[
																"viewer.thumbnail_window_size"
															].toString(),
														);
													} else if (
														config.key ===
														"viewer.details.max_positive_prompt_lines"
													) {
														setMaxPositivePromptLinesInput(
															localSettings[
																"viewer.details.max_positive_prompt_lines"
															].toString(),
														);
													} else if (
														config.key ===
														"viewer.details.max_negative_prompt_lines"
													) {
														setMaxNegativePromptLinesInput(
															localSettings[
																"viewer.details.max_negative_prompt_lines"
															].toString(),
														);
													} else if (
														config.key ===
														"fullscreen.details.max_positive_prompt_lines"
													) {
														setFullscreenMaxPositivePromptLinesInput(
															localSettings[
																"fullscreen.details.max_positive_prompt_lines"
															].toString(),
														);
													} else if (
														config.key ===
														"fullscreen.details.max_negative_prompt_lines"
													) {
														setFullscreenMaxNegativePromptLinesInput(
															localSettings[
																"fullscreen.details.max_negative_prompt_lines"
															].toString(),
														);
													}
												}}
											/>
										)}
										{config.type === "select" && (
											<select
												className="meld-select"
												value={localSettings[config.key] as string}
												onChange={(e) =>
													setLocalSettings((prev) => ({
														...prev,
														[config.key]: e.target
															.value as Settings[keyof Settings],
													}))
												}
											>
												{config.options?.map((opt) => (
													<option key={opt.value} value={opt.value}>
														{opt.label}
													</option>
												))}
											</select>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.body,
	);
};
