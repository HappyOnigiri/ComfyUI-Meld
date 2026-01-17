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
	| "Full Screen Detail"
	| "Shortcuts";

export const SettingsModal: React.FC = () => {
	const { state, dispatch, updateSetting } = useGallery();
	const [activeTab, setActiveTab] = useState<Category>("General");
	const [localSettings, setLocalSettings] = useState<Settings>({
		...state.settings,
	});
	const [shortcutErrors, setShortcutErrors] = useState<Record<string, boolean>>(
		{},
	);
	const [initialLoadCountInput, setInitialLoadCountInput] = useState<string>(
		state.settings["gallery.initial_load_count"].toString(),
	);
	const [maxLoadCountInput, setMaxLoadCountInput] = useState<string>(
		state.settings["gallery.max_load_count"].toString(),
	);
	const [lineageMaxDepthInput, setLineageMaxDepthInput] = useState<string>(
		state.settings["gallery.lineage_max_depth"].toString(),
	);
	const [thumbnailWindowSizeInput, setThumbnailWindowSizeInput] =
		useState<string>(state.settings["viewer.thumbnail_window_size"].toString());
	const [trashRetentionDaysInput, setTrashRetentionDaysInput] =
		useState<string>(state.settings["gallery.trash_retention_days"].toString());
	const [suggestPhashThresholdInput, setSuggestPhashThresholdInput] =
		useState<string>(
			state.settings["gallery.suggest_phash_threshold"].toString(),
		);
	const [relatedPhashThresholdInput, setRelatedPhashThresholdInput] =
		useState<string>(
			state.settings["gallery.related_phash_threshold"].toString(),
		);
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
		type: "boolean" | "number" | "select" | "text";
		options?: { value: string; label: string }[];
		category: Category;
		min?: number;
		max?: number;
	}[] = [
		{
			key: "gallery.view_mode",
			label: "Gallery View Mode",
			description:
				"Choose between standard view with details or grid only view.",
			type: "select",
			category: "General",
			options: [
				{ value: "grid_details", label: "Details View" },
				{ value: "grid_only", label: "Grid Only View" },
			],
		},
		{
			key: "gallery.initial_load_count",
			label: "Initial Load Count",
			description:
				"Number of images to load and display immediately (10-1000).",
			type: "number",
			category: "General",
			min: 10,
			max: 1000,
		},
		{
			key: "gallery.max_load_count",
			label: "Maximum Load Count",
			description:
				"Maximum number of images to load in the background (10-1000000).",
			type: "number",
			category: "General",
			min: 10,
			max: 1000000,
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
			key: "gallery.trash_retention_days",
			label: "Trash Retention Period (Days)",
			description: "How many days to keep deleted items in trash (0-365).",
			type: "number",
			category: "General",
			min: 0,
			max: 365,
		},
		{
			key: "gallery.suggest_phash_threshold",
			label: "Parent Suggestion Threshold",
			description:
				"Maximum pHash distance for automatic parent linking (0-64). Default: 12. Recommended: 8-16. Smaller is stricter.",
			type: "number",
			category: "General",
			min: 0,
			max: 64,
		},
		{
			key: "gallery.related_phash_threshold",
			label: "Related Images Threshold",
			description:
				"Maximum pHash distance for 'Similar Images' view (0-64). Default: 8. Recommended: 4-12. Smaller is stricter.",
			type: "number",
			category: "General",
			min: 0,
			max: 64,
		},
		{
			key: "sidebar.show_filename",
			label: "Show Filename/Path",
			description: "Choose how to display the filename or path on the card.",
			type: "select",
			category: "Sidebar",
			options: [
				{ value: "filename", label: "Filename" },
				{ value: "filepath", label: "Filepath" },
				{ value: "none", label: "None" },
			],
		},
		{
			key: "sidebar.show_dimensions",
			label: "Show Dimensions",
			description: "Display the image dimensions (width x height) on the card.",
			type: "boolean",
			category: "Sidebar",
		},
		{
			key: "sidebar.show_created_at",
			label: "Show Created At",
			description: "Display the image creation date and time on the card.",
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
			key: "viewer.small_image_mode",
			label: "Small Image Display",
			description: "Choose how to display images smaller than the viewer area.",
			type: "select",
			category: "View",
			options: [
				{ value: "original", label: "Original Size" },
				{ value: "fit", label: "Fit to Screen" },
			],
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
			label: "Show Filename/Path",
			description: "Choose how to display the filename or path in the details.",
			type: "select",
			category: "View Details",
			options: [
				{ value: "filename", label: "Filename" },
				{ value: "filepath", label: "Filepath" },
				{ value: "none", label: "None" },
			],
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
			key: "viewer.details.show_source",
			label: "Show Source",
			description: "Display source image information in the details panel.",
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
			key: "viewer.delete_mode",
			label: "Delete Mode",
			description: "Choose how images are deleted in view mode.",
			type: "select",
			category: "View",
			options: [
				{ value: "confirm", label: "Confirmed" },
				{ value: "target_only", label: "Unconfirmed (Target Only)" },
				{ value: "lineage", label: "Unconfirmed (Include Lineage)" },
			],
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
			key: "fullscreen.delete_mode",
			label: "Delete Mode",
			description: "Choose how images are deleted in fullscreen mode.",
			type: "select",
			category: "Full Screen",
			options: [
				{ value: "confirm", label: "Confirmed" },
				{ value: "target_only", label: "Unconfirmed (Target Only)" },
				{ value: "lineage", label: "Unconfirmed (Include Lineage)" },
			],
		},
		{
			key: "fullscreen.loop",
			label: "Loop Navigation",
			description: "Loop to the beginning/end when navigating in fullscreen.",
			type: "boolean",
			category: "Full Screen",
		},
		{
			key: "fullscreen.small_image_mode",
			label: "Small Image Display",
			description:
				"Choose how to display images smaller than the screen in fullscreen.",
			type: "select",
			category: "Full Screen",
			options: [
				{ value: "original", label: "Original Size" },
				{ value: "fit", label: "Fit to Screen" },
			],
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
			label: "Show Filename/Path",
			description:
				"Choose how to display the filename or path in fullscreen details.",
			type: "select",
			category: "Full Screen Detail",
			options: [
				{ value: "filename", label: "Filename" },
				{ value: "filepath", label: "Filepath" },
				{ value: "none", label: "None" },
			],
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
			key: "fullscreen.details.show_source",
			label: "Show Source",
			description: "Display source image information in fullscreen details.",
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
		{
			key: "viewer.shortcut.1",
			label: "Shortcut 1 (Key: 1)",
			description:
				"Command to execute when pressing '1' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.2",
			label: "Shortcut 2 (Key: 2)",
			description:
				"Command to execute when pressing '2' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.3",
			label: "Shortcut 3 (Key: 3)",
			description:
				"Command to execute when pressing '3' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.4",
			label: "Shortcut 4 (Key: 4)",
			description:
				"Command to execute when pressing '4' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.5",
			label: "Shortcut 5 (Key: 5)",
			description:
				"Command to execute when pressing '5' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.6",
			label: "Shortcut 6 (Key: 6)",
			description:
				"Command to execute when pressing '6' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.7",
			label: "Shortcut 7 (Key: 7)",
			description:
				"Command to execute when pressing '7' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.8",
			label: "Shortcut 8 (Key: 8)",
			description:
				"Command to execute when pressing '8' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.9",
			label: "Shortcut 9 (Key: 9)",
			description:
				"Command to execute when pressing '9' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.0",
			label: "Shortcut 0 (Key: 0)",
			description:
				"Command to execute when pressing '0' in View/Full Screen mode.",
			type: "text",
			category: "Shortcuts",
		},
		{
			key: "viewer.shortcut.show_cheat_sheet",
			label: "Show Cheat Sheet",
			description: "Display shortcut key guide in View/Full Screen mode.",
			type: "boolean",
			category: "Shortcuts",
		},
	];

	const handleClose = async () => {
		// Identify changed settings
		// Only save keys that don't have validation errors
		const changedKeys = (
			Object.keys(localSettings) as (keyof Settings)[]
		).filter(
			(key) =>
				localSettings[key] !== state.settings[key] && !shortcutErrors[key],
		);

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

	const validateShortcut = (command: string) => {
		if (!command.trim()) return true;
		const parts = command.trim().split(/\s+/);
		return parts.every((part) => {
			if (part === "next" || part === "prev") return true;
			if (part.startsWith("tag:") && part.length > 4) return true;
			if (part.startsWith("-tag:") && part.length > 5) return true;
			if (part.startsWith("tag-toggle:") && part.length > 11) return true;
			return false;
		});
	};

	const handleNumberChange = (
		key: keyof Settings,
		value: string,
		min?: number,
		max?: number,
	) => {
		if (key === "gallery.initial_load_count") {
			setInitialLoadCountInput(value);
		} else if (key === "gallery.max_load_count") {
			setMaxLoadCountInput(value);
		} else if (key === "gallery.lineage_max_depth") {
			setLineageMaxDepthInput(value);
		} else if (key === "viewer.thumbnail_window_size") {
			setThumbnailWindowSizeInput(value);
		} else if (key === "gallery.trash_retention_days") {
			setTrashRetentionDaysInput(value);
		} else if (key === "gallery.suggest_phash_threshold") {
			setSuggestPhashThresholdInput(value);
		} else if (key === "gallery.related_phash_threshold") {
			setRelatedPhashThresholdInput(value);
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
							<button
								type="button"
								className={`meld-tab ${activeTab === "Shortcuts" ? "active" : ""}`}
								onClick={() => setActiveTab("Shortcuts")}
							>
								Shortcuts
							</button>
						</div>
					</div>

					<div className="meld-modal-body">
						{activeTab === "Shortcuts" && (
							<div className="meld-settings-help">
								<p>
									These shortcuts are available in both View and Full Screen
									modes.
								</p>
								<p>
									You can combine multiple commands with spaces.
									<br />
									Example: <code>tag:favorite next</code> (Add tag and move to
									next)
								</p>
								<div className="meld-settings-help__commands">
									<strong>Available commands:</strong>
									<ul>
										<li>
											<code>tag:NAME</code> - Add a tag
										</li>
										<li>
											<code>-tag:NAME</code> - Remove a tag
										</li>
										<li>
											<code>tag-toggle:NAME</code> - Toggle a tag
										</li>
										<li>
											<code>next</code> / <code>prev</code> - Navigate images
										</li>
									</ul>
								</div>
							</div>
						)}
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
													config.key === "gallery.initial_load_count"
														? initialLoadCountInput
														: config.key === "gallery.max_load_count"
															? maxLoadCountInput
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
																					: config.key ===
																							"gallery.trash_retention_days"
																						? trashRetentionDaysInput
																						: config.key ===
																								"gallery.suggest_phash_threshold"
																							? suggestPhashThresholdInput
																							: config.key ===
																									"gallery.related_phash_threshold"
																								? relatedPhashThresholdInput
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
													if (config.key === "gallery.initial_load_count") {
														setInitialLoadCountInput(
															localSettings[
																"gallery.initial_load_count"
															].toString(),
														);
													} else if (config.key === "gallery.max_load_count") {
														setMaxLoadCountInput(
															localSettings[
																"gallery.max_load_count"
															].toString(),
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
														config.key === "gallery.trash_retention_days"
													) {
														setTrashRetentionDaysInput(
															localSettings[
																"gallery.trash_retention_days"
															].toString(),
														);
													} else if (
														config.key === "gallery.suggest_phash_threshold"
													) {
														setSuggestPhashThresholdInput(
															localSettings[
																"gallery.suggest_phash_threshold"
															].toString(),
														);
													} else if (
														config.key === "gallery.related_phash_threshold"
													) {
														setRelatedPhashThresholdInput(
															localSettings[
																"gallery.related_phash_threshold"
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
										{config.type === "text" && (
											<input
												type="text"
												className={`meld-text-input ${shortcutErrors[config.key] ? "meld-text-input--error" : ""}`}
												value={(localSettings[config.key] as string) || ""}
												onChange={(e) => {
													setLocalSettings((prev) => ({
														...prev,
														[config.key]: e.target.value,
													}));
												}}
												onBlur={() => {
													if (config.key.startsWith("viewer.shortcut.")) {
														const isValid = validateShortcut(
															(localSettings[config.key] as string) || "",
														);
														setShortcutErrors((prev) => ({
															...prev,
															[config.key]: !isValid,
														}));
													}
												}}
											/>
										)}
									</div>
								</div>
							))}
						</div>

						{activeTab === "General" && (
							<div className="meld-settings-extra">
								<div className="meld-settings-item">
									<div className="meld-settings-item__info">
										<div className="meld-settings-item__label">
											Trash Management
										</div>
										<div className="meld-settings-item__description">
											View and manage items currently in the trash bin.
										</div>
									</div>
									<div className="meld-settings-item__control">
										<button
											type="button"
											className="meld-button meld-button--secondary"
											onClick={() => {
												dispatch({ type: "SET_VIEW_SCOPE", payload: "trash" });
												dispatch({ type: "CLOSE_MODAL" });
											}}
										>
											View Trash
										</button>
									</div>
								</div>
							</div>
						)}

						{activeTab === "Shortcuts" && (
							<div className="meld-settings-extra">
								<div className="meld-settings-item">
									<div className="meld-settings-item__info">
										<div className="meld-settings-item__label">
											Reset Shortcuts
										</div>
										<div className="meld-settings-item__description">
											Restore all shortcuts to their default values.
										</div>
									</div>
									<div className="meld-settings-item__control">
										<button
											type="button"
											className="meld-button meld-button--secondary"
											onClick={() => {
												setLocalSettings((prev) => ({
													...prev,
													"viewer.shortcut.1": "tag:keep next",
													"viewer.shortcut.2": "tag:best next",
													"viewer.shortcut.3": "tag:fix-needed next",
													"viewer.shortcut.4": "",
													"viewer.shortcut.5": "",
													"viewer.shortcut.6": "",
													"viewer.shortcut.7": "",
													"viewer.shortcut.8": "",
													"viewer.shortcut.9": "",
													"viewer.shortcut.0": "",
												}));
												setShortcutErrors({});
											}}
										>
											Reset to Defaults
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
