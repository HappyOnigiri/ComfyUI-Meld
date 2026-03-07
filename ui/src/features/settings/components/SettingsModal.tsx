import { X } from "lucide-react";
import type React from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useSettingsModalLogic } from "../hooks/useSettingsModalLogic";
import { FullScreenTab } from "./tabs/FullScreenTab";
import { GalleryTab } from "./tabs/GalleryTab";
import { InformationTab } from "./tabs/InformationTab";
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
		handleClearThumbnailCache,
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
		viewerCorePromptCountInput,
		fullscreenCorePromptCountInput,
		thumbnailSizeInput,
	} = useSettingsModalLogic();

	useEscapeToClose({ onEscape: handleClose });

	const overlayMouseDownRef = useRef(false);

	const handleOverlayMouseDown = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	};

	const handleOverlayMouseUp = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget && overlayMouseDownRef.current) {
			handleClose();
		}
		overlayMouseDownRef.current = false;
	};

	const tabs: { id: typeof activeTab; label: string }[] = [
		{ id: "Gallery", label: "Gallery" },
		{ id: "View", label: "View" },
		{ id: "Full Screen", label: "Full Screen" },
		{ id: "Shortcuts", label: "Shortcuts" },
		{ id: "System", label: "System" },
		{ id: "Information", label: "Information" },
	];

	const sanitizeId = (id: string) =>
		id
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace(/[^a-z0-9-]/g, "");

	const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
		if (e.key === "ArrowDown" || e.key === "ArrowRight") {
			e.preventDefault();
			const next = tabs[(index + 1) % tabs.length];
			if (next) setActiveTab(next.id);
		} else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
			e.preventDefault();
			const prev = tabs[(index - 1 + tabs.length) % tabs.length];
			if (prev) setActiveTab(prev.id);
		}
	};

	const renderActiveTab = () => {
		switch (activeTab) {
			case "System":
				return (
					<SystemTab
						localSettings={localSettings}
						handleNumberChange={handleNumberChange}
						handleNumberBlur={handleNumberBlur}
						handleToggle={handleToggle}
						setLocalSettings={setLocalSettings}
						handleViewTrash={handleViewTrash}
						handleClearThumbnailCache={handleClearThumbnailCache}
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
						viewerCorePromptCountInput={viewerCorePromptCountInput}
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
						fullscreenCorePromptCountInput={fullscreenCorePromptCountInput}
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
			case "Information":
				return <InformationTab />;
			default:
				return null;
		}
	};

	return createPortal(
		<div
			className="meld-modal-overlay"
			onMouseDown={handleOverlayMouseDown}
			onMouseUp={handleOverlayMouseUp}
		>
			<div className="meld-modal-content meld-settings-modal" onClick={(e) => e.stopPropagation()}>
				<div className="meld-modal-header">
					<h2>Settings</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={handleClose}
						aria-label="Close"
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-settings-layout">
					<div className="meld-settings-sidebar">
						<div className="meld-tabs" role="tablist">
							{tabs.map((tab, index) => (
								<button
									key={tab.id}
									id={`meld-settings-tab-${sanitizeId(tab.id)}`}
									type="button"
									role="tab"
									aria-selected={activeTab === tab.id}
									tabIndex={activeTab === tab.id ? 0 : -1}
									aria-controls={`meld-settings-tabpanel-${sanitizeId(tab.id)}`}
									className={`meld-tab ${activeTab === tab.id ? "active" : ""}`}
									onClick={() => setActiveTab(tab.id)}
									onKeyDown={(e) => handleTabKeyDown(e, index)}
								>
									{tab.label}
								</button>
							))}
						</div>
					</div>

					<div
						className="meld-modal-body"
						role="tabpanel"
						id={`meld-settings-tabpanel-${sanitizeId(activeTab)}`}
						aria-labelledby={`meld-settings-tab-${sanitizeId(activeTab)}`}
					>
						{renderActiveTab()}
					</div>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
