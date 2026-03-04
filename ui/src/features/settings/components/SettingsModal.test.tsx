import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock the settings hook
const mockUseSettingsModalLogic = vi.fn();
vi.mock("../hooks/useSettingsModalLogic", () => ({
	useSettingsModalLogic: () => mockUseSettingsModalLogic(),
}));

// Mock useEscapeToClose
vi.mock("../../../hooks/useEscapeToClose", () => ({
	useEscapeToClose: vi.fn(),
}));

// Mock tab components to keep tests focused
vi.mock("./tabs/FullScreenTab", () => ({
	FullScreenTab: () => <div data-testid="fullscreen-tab" />,
}));
vi.mock("./tabs/GalleryTab", () => ({
	GalleryTab: () => <div data-testid="gallery-tab" />,
}));
vi.mock("./tabs/InformationTab", () => ({
	InformationTab: () => <div data-testid="information-tab" />,
}));
vi.mock("./tabs/ShortcutsTab", () => ({
	ShortcutsTab: () => <div data-testid="shortcuts-tab" />,
}));
vi.mock("./tabs/SystemTab", () => ({
	SystemTab: () => <div data-testid="system-tab" />,
}));
vi.mock("./tabs/ViewTab", () => ({
	ViewTab: () => <div data-testid="view-tab" />,
}));

// Mock createPortal to render inline
vi.mock("react-dom", async () => {
	const actual = await vi.importActual<typeof import("react-dom")>("react-dom");
	return {
		...actual,
		createPortal: (children: React.ReactNode) => children,
	};
});

import { SettingsModal } from "./SettingsModal";

function createMockLogic(overrides: Record<string, unknown> = {}) {
	return {
		activeTab: "Gallery",
		setActiveTab: vi.fn(),
		localSettings: {},
		setLocalSettings: vi.fn(),
		shortcutErrors: {},
		setShortcutErrors: vi.fn(),
		handleClose: vi.fn(),
		handleToggle: vi.fn(),
		handleNumberChange: vi.fn(),
		handleNumberBlur: vi.fn(),
		handleResetShortcuts: vi.fn(),
		handleViewTrash: vi.fn(),
		handleClearThumbnailCache: vi.fn(),
		validateShortcut: vi.fn(),
		initialLoadCountInput: "100",
		maxLoadCountInput: "10000",
		lineageMaxDepthInput: "5",
		thumbnailWindowSizeInput: "15",
		trashRetentionDaysInput: "30",
		autoLinkPhashThresholdInput: "92",
		suggestPhashThresholdInput: "82",
		maxPositivePromptLinesInput: "7",
		maxNegativePromptLinesInput: "7",
		fullscreenMaxPositivePromptLinesInput: "7",
		fullscreenMaxNegativePromptLinesInput: "7",
		thumbnailSizeInput: "100",
		...overrides,
	};
}

describe("SettingsModal", () => {
	beforeEach(() => {
		mockUseSettingsModalLogic.mockReturnValue(createMockLogic());
	});

	it("renders modal header with Settings title", () => {
		render(<SettingsModal />);
		expect(screen.getByText("Settings")).toBeInTheDocument();
	});

	it("renders all tab buttons", () => {
		render(<SettingsModal />);
		const tabLabels = ["Gallery", "View", "Full Screen", "Shortcuts", "System", "Information"];
		for (const label of tabLabels) {
			expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
		}
	});

	it("renders close button", () => {
		render(<SettingsModal />);
		const closeBtn = screen.getByRole("button", { name: /close/i });
		expect(closeBtn).toBeInTheDocument();
	});

	it("calls setActiveTab when a tab is clicked", () => {
		const mockSetActiveTab = vi.fn();
		mockUseSettingsModalLogic.mockReturnValue(createMockLogic({ setActiveTab: mockSetActiveTab }));
		render(<SettingsModal />);

		const viewTab = screen.getByRole("button", { name: "View" });
		fireEvent.click(viewTab);
		expect(mockSetActiveTab).toHaveBeenCalledWith("View");
	});

	it("renders Gallery tab content by default", () => {
		render(<SettingsModal />);
		expect(screen.getByTestId("gallery-tab")).toBeInTheDocument();
	});

	it("renders System tab when activeTab is System", () => {
		mockUseSettingsModalLogic.mockReturnValue(createMockLogic({ activeTab: "System" }));
		render(<SettingsModal />);
		expect(screen.getByTestId("system-tab")).toBeInTheDocument();
	});

	it("renders Information tab when activeTab is Information", () => {
		mockUseSettingsModalLogic.mockReturnValue(createMockLogic({ activeTab: "Information" }));
		render(<SettingsModal />);
		expect(screen.getByTestId("information-tab")).toBeInTheDocument();
	});
});
