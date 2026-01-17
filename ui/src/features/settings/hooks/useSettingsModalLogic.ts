import { useState } from "react";
import { useGallery } from "../../../store/GalleryContext";
import type { Settings } from "../../../types";

export type Category =
	| "General"
	| "Sidebar"
	| "Search"
	| "View"
	| "View Details"
	| "Full Screen"
	| "Full Screen Detail"
	| "Shortcuts";

export const useSettingsModalLogic = () => {
	const { state, dispatch, updateSetting } = useGallery();
	const [activeTab, setActiveTab] = useState<Category>("General");
	const [localSettings, setLocalSettings] = useState<Settings>({
		...state.settings,
	});
	const [shortcutErrors, setShortcutErrors] = useState<Record<string, boolean>>(
		{},
	);

	// Input states for numbers
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
	const [autoLinkPhashThresholdInput, setAutoLinkPhashThresholdInput] =
		useState<string>(
			state.settings["gallery.auto_link_phash_threshold"].toString(),
		);
	const [suggestPhashThresholdInput, setSuggestPhashThresholdInput] =
		useState<string>(
			state.settings["gallery.suggest_phash_threshold"].toString(),
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
	const [thumbnailSizeInput, setThumbnailSizeInput] = useState<string>(
		state.settings["sidebar.thumbnail_size"].toString(),
	);

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
			if (part === "next" || part === "prev" || part === "delete") return true;
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
		} else if (key === "gallery.auto_link_phash_threshold") {
			setAutoLinkPhashThresholdInput(value);
		} else if (key === "gallery.suggest_phash_threshold") {
			setSuggestPhashThresholdInput(value);
		} else if (key === "viewer.details.max_positive_prompt_lines") {
			setMaxPositivePromptLinesInput(value);
		} else if (key === "viewer.details.max_negative_prompt_lines") {
			setMaxNegativePromptLinesInput(value);
		} else if (key === "fullscreen.details.max_positive_prompt_lines") {
			setFullscreenMaxPositivePromptLinesInput(value);
		} else if (key === "fullscreen.details.max_negative_prompt_lines") {
			setFullscreenMaxNegativePromptLinesInput(value);
		} else if (key === "sidebar.thumbnail_size") {
			setThumbnailSizeInput(value);
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

	const handleNumberBlur = (config: { key: keyof Settings }) => {
		if (config.key === "gallery.initial_load_count") {
			setInitialLoadCountInput(
				localSettings["gallery.initial_load_count"].toString(),
			);
		} else if (config.key === "gallery.max_load_count") {
			setMaxLoadCountInput(localSettings["gallery.max_load_count"].toString());
		} else if (config.key === "gallery.lineage_max_depth") {
			setLineageMaxDepthInput(
				localSettings["gallery.lineage_max_depth"].toString(),
			);
		} else if (config.key === "viewer.thumbnail_window_size") {
			setThumbnailWindowSizeInput(
				localSettings["viewer.thumbnail_window_size"].toString(),
			);
		} else if (config.key === "gallery.trash_retention_days") {
			setTrashRetentionDaysInput(
				localSettings["gallery.trash_retention_days"].toString(),
			);
		} else if (config.key === "gallery.auto_link_phash_threshold") {
			setAutoLinkPhashThresholdInput(
				localSettings["gallery.auto_link_phash_threshold"].toString(),
			);
		} else if (config.key === "gallery.suggest_phash_threshold") {
			setSuggestPhashThresholdInput(
				localSettings["gallery.suggest_phash_threshold"].toString(),
			);
		} else if (config.key === "viewer.details.max_positive_prompt_lines") {
			setMaxPositivePromptLinesInput(
				localSettings["viewer.details.max_positive_prompt_lines"].toString(),
			);
		} else if (config.key === "viewer.details.max_negative_prompt_lines") {
			setMaxNegativePromptLinesInput(
				localSettings["viewer.details.max_negative_prompt_lines"].toString(),
			);
		} else if (config.key === "fullscreen.details.max_positive_prompt_lines") {
			setFullscreenMaxPositivePromptLinesInput(
				localSettings[
					"fullscreen.details.max_positive_prompt_lines"
				].toString(),
			);
		} else if (config.key === "fullscreen.details.max_negative_prompt_lines") {
			setFullscreenMaxNegativePromptLinesInput(
				localSettings[
					"fullscreen.details.max_negative_prompt_lines"
				].toString(),
			);
		} else if (config.key === "sidebar.thumbnail_size") {
			setThumbnailSizeInput(localSettings["sidebar.thumbnail_size"].toString());
		}
	};

	const handleResetShortcuts = () => {
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
	};

	const handleViewTrash = () => {
		dispatch({ type: "SET_VIEW_SCOPE", payload: "trash" });
		dispatch({ type: "CLOSE_MODAL" });
	};

	return {
		activeTab,
		setActiveTab,
		localSettings,
		setLocalSettings,
		shortcutErrors,
		setShortcutErrors,
		handleClose,
		handleToggle,
		handleNumberChange,
		handleNumberBlur,
		handleResetShortcuts,
		handleViewTrash,
		validateShortcut,
		// Input states
		initialLoadCountInput,
		maxLoadCountInput,
		lineageMaxDepthInput,
		thumbnailWindowSizeInput,
		trashRetentionDaysInput,
		autoLinkPhashThresholdInput,
		suggestPhashThresholdInput,
		maxPositivePromptLinesInput,
		maxNegativePromptLinesInput,
		fullscreenMaxPositivePromptLinesInput,
		fullscreenMaxNegativePromptLinesInput,
		thumbnailSizeInput,
	};
};
