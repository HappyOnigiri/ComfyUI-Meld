import { X } from "lucide-react";
import type React from "react";
import { createPortal } from "react-dom";
import { useSettingsModalLogic } from "../hooks/useSettingsModalLogic";
import { FullScreenTab } from "./tabs/FullScreenTab";
import { GalleryTab } from "./tabs/GalleryTab";
import { ShortcutsTab } from "./tabs/ShortcutsTab";
import { SystemTab } from "./tabs/SystemTab";
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
		thumbnailSizeInput,
	} = useSettingsModalLogic();

	const tabs: { id: typeof activeTab; label: string }[] = [
		{ id: "Gallery", label: "Gallery" },
		{ id: "View", label: "View" },
		{ id: "Full Screen", label: "Full Screen" },
		{ id: "Shortcuts", label: "Shortcuts" },
		{ id: "System", label: "System" },
	];

	const renderActiveTab = () => {
		switch (activeTab) {
			case "System":
				return (
					<SystemTab
						localSettings={localSettings}
						handleNumberChange={handleNumberChange}
						handleNumberBlur={handleNumberBlur}
						setLocalSettings={setLocalSettings}
						handleViewTrash={handleViewTrash}
						lineageMaxDepthInput={lineageMaxDepthInput}
						trashRetentionDaysInput={trashRetentionDaysInput}
						autoLinkPhashThresholdInput={autoLinkPhashThresholdInput}
						suggestPhashThresholdInput={suggestPhashThresholdInput}
					/>
				);
			case "Gallery":
				return (
					<GalleryTab
						localSettings={localSettings}
						setLocalSettings={setLocalSettings}
						handleToggle={handleToggle}
						handleNumberChange={handleNumberChange}
						handleNumberBlur={handleNumberBlur}
						thumbnailSizeInput={thumbnailSizeInput}
						initialLoadCountInput={initialLoadCountInput}
						maxLoadCountInput={maxLoadCountInput}
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
