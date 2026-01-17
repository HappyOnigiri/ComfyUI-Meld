import { X } from "lucide-react";
import type React from "react";
import { createPortal } from "react-dom";
import { useSettingsModalLogic } from "../hooks/useSettingsModalLogic";
import { FullScreenTab } from "./tabs/FullScreenTab";
import { GeneralTab } from "./tabs/GeneralTab";
import { SearchTab } from "./tabs/SearchTab";
import { ShortcutsTab } from "./tabs/ShortcutsTab";
import { SidebarTab } from "./tabs/SidebarTab";
import { ViewTab } from "./tabs/ViewTab";

export const SettingsModal: React.FC = () => {
	const {
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
	} = useSettingsModalLogic();

	const tabs: { id: typeof activeTab; label: string }[] = [
		{ id: "General", label: "General" },
		{ id: "Sidebar", label: "Sidebar" },
		{ id: "Search", label: "Search" },
		{ id: "View", label: "View" },
		{ id: "View Details", label: "View Details" },
		{ id: "Full Screen", label: "Full Screen" },
		{ id: "Full Screen Detail", label: "Full Screen Detail" },
		{ id: "Shortcuts", label: "Shortcuts" },
	];

	const renderActiveTab = () => {
		switch (activeTab) {
			case "General":
				return (
					<GeneralTab
						localSettings={localSettings}
						handleToggle={handleToggle}
						handleNumberChange={handleNumberChange}
						handleNumberBlur={handleNumberBlur}
						setLocalSettings={setLocalSettings}
						handleViewTrash={handleViewTrash}
						initialLoadCountInput={initialLoadCountInput}
						maxLoadCountInput={maxLoadCountInput}
						lineageMaxDepthInput={lineageMaxDepthInput}
						trashRetentionDaysInput={trashRetentionDaysInput}
						autoLinkPhashThresholdInput={autoLinkPhashThresholdInput}
						suggestPhashThresholdInput={suggestPhashThresholdInput}
					/>
				);
			case "Sidebar":
				return (
					<SidebarTab
						localSettings={localSettings}
						setLocalSettings={setLocalSettings}
						handleToggle={handleToggle}
					/>
				);
			case "Search":
				return (
					<SearchTab
						localSettings={localSettings}
						handleToggle={handleToggle}
					/>
				);
			case "View":
				return (
					<ViewTab
						localSettings={localSettings}
						setLocalSettings={setLocalSettings}
						handleToggle={handleToggle}
						handleNumberChange={handleNumberChange}
						handleNumberBlur={handleNumberBlur}
						thumbnailWindowSizeInput={thumbnailWindowSizeInput}
						maxPositivePromptLinesInput={maxPositivePromptLinesInput}
						maxNegativePromptLinesInput={maxNegativePromptLinesInput}
					/>
				);
			case "View Details":
				return (
					<ViewTab
						localSettings={localSettings}
						setLocalSettings={setLocalSettings}
						handleToggle={handleToggle}
						handleNumberChange={handleNumberChange}
						handleNumberBlur={handleNumberBlur}
						thumbnailWindowSizeInput={thumbnailWindowSizeInput}
						maxPositivePromptLinesInput={maxPositivePromptLinesInput}
						maxNegativePromptLinesInput={maxNegativePromptLinesInput}
						showDetailsOnly={true}
					/>
				);
			case "Full Screen":
				return (
					<FullScreenTab
						localSettings={localSettings}
						setLocalSettings={setLocalSettings}
						handleToggle={handleToggle}
						handleNumberChange={handleNumberChange}
						handleNumberBlur={handleNumberBlur}
						maxPositivePromptLinesInput={fullscreenMaxPositivePromptLinesInput}
						maxNegativePromptLinesInput={fullscreenMaxNegativePromptLinesInput}
					/>
				);
			case "Full Screen Detail":
				return (
					<FullScreenTab
						localSettings={localSettings}
						setLocalSettings={setLocalSettings}
						handleToggle={handleToggle}
						handleNumberChange={handleNumberChange}
						handleNumberBlur={handleNumberBlur}
						maxPositivePromptLinesInput={fullscreenMaxPositivePromptLinesInput}
						maxNegativePromptLinesInput={fullscreenMaxNegativePromptLinesInput}
						showDetailsOnly={true}
					/>
				);
			case "Shortcuts":
				return (
					<ShortcutsTab
						localSettings={localSettings}
						setLocalSettings={setLocalSettings}
						shortcutErrors={shortcutErrors}
						setShortcutErrors={setShortcutErrors}
						validateShortcut={validateShortcut}
						handleToggle={handleToggle}
						handleResetShortcuts={handleResetShortcuts}
					/>
				);
			default:
				return null;
		}
	};

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
							{tabs.map((tab) => (
								<button
									key={tab.id}
									type="button"
									className={`meld-tab ${activeTab === tab.id ? "active" : ""}`}
									onClick={() => setActiveTab(tab.id)}
								>
									{tab.label}
								</button>
							))}
						</div>
					</div>

					<div className="meld-modal-body">{renderActiveTab()}</div>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
