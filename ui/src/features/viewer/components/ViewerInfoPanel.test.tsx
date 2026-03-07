import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { initialState } from "../../../store/galleryReducer";
import { createTestImage, resetImageIdCounter } from "../../../test/factories/image";
import type { GalleryAction, Settings } from "../../../types";
import { fetchAnalyticsCounts } from "../../analytics/api/analyticsApi";
import { ViewerInfoPanel } from "./ViewerInfoPanel";

vi.mock("../../analytics/api/analyticsApi", () => ({
	fetchAnalyticsCounts: vi.fn(),
}));

// Default settings for testing
const defaultSettings: Settings = { ...initialState.settings };

function renderPanel(overrides: Record<string, unknown> = {}) {
	const baseImage = createTestImage({
		filename: "test.png",
		subfolder: "subfolder",
		type: "output",
		width: 1024,
		height: 768,
		model_name: "sdxl-turbo",
		positive: "beautiful landscape",
		positive_prompt: "beautiful landscape, 4k",
		negative: "ugly",
		negative_prompt: "ugly, blurry",
		tags: ["nature", "landscape"],
		user_notes: "My favorite image",
		created_at: 1700000000,
	});

	const defaultProps = {
		image: baseImage,
		isFullscreen: false,
		settings: defaultSettings,
		showIcons: true,
		parentChain: [] as { id: number | null; imgSrc: string | null }[],
		dispatch: vi.fn() as React.Dispatch<GalleryAction>,
		onEditNotes: vi.fn(),
	};

	// Merge overrides (settings are deep merged)
	const mergedProps = { ...defaultProps, ...overrides };
	if (overrides.settings) {
		mergedProps.settings = overrides.settings as Settings;
	}
	if (overrides.image) {
		mergedProps.image = overrides.image as typeof baseImage;
	}

	return render(<ViewerInfoPanel {...mergedProps} />);
}

describe("ViewerInfoPanel", () => {
	beforeEach(() => {
		resetImageIdCounter();
	});

	it("renders filename when setting is 'filename'", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_filename": "filename" },
		});
		expect(screen.getByText("Filename")).toBeInTheDocument();
		expect(screen.getByText("test.png")).toBeInTheDocument();
	});

	it("renders filepath when setting is 'filepath'", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_filename": "filepath" },
		});
		expect(screen.getByText("Filepath")).toBeInTheDocument();
		expect(screen.getByText("output/subfolder/test.png")).toBeInTheDocument();
	});

	it("hides filename when setting is 'none'", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_filename": "none" },
		});
		expect(screen.queryByText("Filename")).not.toBeInTheDocument();
		expect(screen.queryByText("Filepath")).not.toBeInTheDocument();
	});

	it("renders dimensions when image has width and height", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_dimensions": true },
		});
		expect(screen.getByText("Dimensions")).toBeInTheDocument();
	});

	it("hides dimensions when setting is false", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_dimensions": false },
		});
		expect(screen.queryByText("Dimensions")).not.toBeInTheDocument();
	});

	it("hides dimensions when image has no width/height", () => {
		renderPanel({
			image: createTestImage({ width: undefined, height: undefined }),
			settings: { ...defaultSettings, "viewer.details.show_dimensions": true },
		});
		expect(screen.queryByText("Dimensions")).not.toBeInTheDocument();
	});

	it("renders model name when present and setting is true", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_model_name": true },
		});
		expect(screen.getByText("Model")).toBeInTheDocument();
		expect(screen.getByText("sdxl-turbo")).toBeInTheDocument();
	});

	it("hides model name when setting is false", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_model_name": false },
		});
		expect(screen.queryByText("sdxl-turbo")).not.toBeInTheDocument();
	});

	it("renders positive prompt", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_positive_prompt": true },
		});
		expect(screen.getByText("Positive")).toBeInTheDocument();
	});

	it("hides positive prompt when setting is false", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_positive_prompt": false },
		});
		expect(screen.queryByText("Positive")).not.toBeInTheDocument();
	});

	it("renders negative prompt", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_negative_prompt": true },
		});
		expect(screen.getByText("Negative")).toBeInTheDocument();
	});

	it("renders tags when present and setting is true", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_tags": true },
		});
		expect(screen.getByText("Tags")).toBeInTheDocument();
		expect(screen.getByText("nature")).toBeInTheDocument();
		expect(screen.getByText("landscape")).toBeInTheDocument();
	});

	it("hides tags when setting is false", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_tags": false },
		});
		expect(screen.queryByText("Tags")).not.toBeInTheDocument();
	});

	it("renders notes when show_user_notes is 'always'", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_user_notes": "always" },
		});
		expect(screen.getByText("Notes")).toBeInTheDocument();
		expect(screen.getByText("My favorite image")).toBeInTheDocument();
	});

	it("renders placeholder when notes are empty and setting is 'always'", () => {
		renderPanel({
			image: createTestImage({ user_notes: undefined }),
			settings: { ...defaultSettings, "viewer.details.show_user_notes": "always" },
		});
		expect(screen.getByText("Add notes...")).toBeInTheDocument();
	});

	it("hides notes when show_user_notes is false", () => {
		renderPanel({
			settings: {
				...defaultSettings,
				"viewer.details.show_user_notes": false as unknown as string,
			},
		});
		// Notes label should not appear
		const notesItems = document.querySelectorAll(".meld-viewer-details-item--notes");
		expect(notesItems).toHaveLength(0);
	});

	it("shows notes when 'if_present' and notes exist", () => {
		renderPanel({
			settings: { ...defaultSettings, "viewer.details.show_user_notes": "if_present" },
		});
		expect(screen.getByText("My favorite image")).toBeInTheDocument();
	});

	it("hides notes when 'if_present' and notes are empty", () => {
		renderPanel({
			image: createTestImage({ user_notes: undefined }),
			settings: { ...defaultSettings, "viewer.details.show_user_notes": "if_present" },
		});
		const notesItems = document.querySelectorAll(".meld-viewer-details-item--notes");
		expect(notesItems).toHaveLength(0);
	});

	it("renders Deleted At when image has deleted_at", () => {
		renderPanel({
			image: createTestImage({ deleted_at: 1700100000 }),
		});
		expect(screen.getByText("Deleted At")).toBeInTheDocument();
	});

	it("renders source thumbnails when parentChain is provided", () => {
		renderPanel({
			parentChain: [
				{ id: 1, imgSrc: "/view?id=1" },
				{ id: 2, imgSrc: "/view?id=2" },
			],
			settings: { ...defaultSettings, "viewer.details.show_source": true },
		});
		expect(screen.getByText("Source")).toBeInTheDocument();
		const thumbBtns = screen.getAllByRole("button", {
			name: /View (source|grand-source|ancestor) image/i,
		});
		expect(thumbBtns).toHaveLength(2);
	});

	it("invokes copy buttons to cover handleCopy and inline callbacks", async () => {
		// Save navigator.clipboard and replace with test stub to prevent test leakage
		const originalClipboard = navigator.clipboard;
		const writeTextMock = vi.fn().mockResolvedValue(undefined);
		Object.assign(navigator, { clipboard: { writeText: writeTextMock } });

		const onEditNotesMock = vi.fn();
		const { container } = renderPanel({
			onEditNotes: onEditNotesMock,
			settings: {
				...defaultSettings,
				"viewer.details.show_filename": "filename",
				"viewer.details.show_dimensions": true,
				"viewer.details.show_created_at": true,
				"viewer.details.show_model_name": true,
				"viewer.details.show_positive_prompt": true,
				"viewer.details.show_negative_prompt": true,
				"viewer.details.show_tags": true,
				"viewer.details.show_user_notes": "always",
			},
		});

		// Click all copy buttons and verify writeText is called once per button
		// Known payloads based on component implementation (in rendering order)
		const expectedPayloads = [
			"test.png", // filename
			"1024 x 768 px", // dimensions
			new Date(1700000000 * 1000).toLocaleString(), // created_at
			"sdxl-turbo", // model
			"beautiful landscape, 4k", // positive_prompt
			"ugly, blurry", // negative_prompt
			"nature, landscape", // tags (join(", "))
			"My favorite image", // user_notes
		];
		const copyBtns = container.querySelectorAll(".meld-viewer-details-copy-btn");
		expect(copyBtns.length).toBe(expectedPayloads.length);
		Array.from(copyBtns).forEach((btn, i) => {
			fireEvent.click(btn);
			expect(writeTextMock).toHaveBeenLastCalledWith(expectedPayloads[i]);
		});
		expect(writeTextMock).toHaveBeenCalledTimes(copyBtns.length);

		// Verify onEditNotes is called when clicking the notes preview area
		const notesPreview = container.querySelector(".meld-viewer-notes-preview");
		if (notesPreview) {
			fireEvent.click(notesPreview);
		}
		expect(onEditNotesMock).toHaveBeenCalled();

		// Restore navigator.clipboard to its original state
		Object.assign(navigator, { clipboard: originalClipboard });
	});

	it("covers filepath copy and source thumb click paths", () => {
		const mockDispatch = vi.fn();
		const { container } = renderPanel({
			settings: {
				...defaultSettings,
				"viewer.details.show_filename": "filepath",
				"viewer.details.show_source": true,
			},
			parentChain: [{ id: 10, imgSrc: "/view?id=10" }],
			dispatch: mockDispatch,
		});

		// Copy the filepath value
		const copyBtns = container.querySelectorAll(".meld-viewer-details-copy-btn");
		if (copyBtns[0]) fireEvent.click(copyBtns[0]);

		// Click source thumb to dispatch OPEN_VIEWER
		const thumbBtn = screen.getByRole("button", { name: /View source image/i });
		fireEvent.click(thumbBtn);
		expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining({ type: "OPEN_VIEWER" }));
	});

	it("renders in fullscreen mode with fullscreen settings", () => {
		renderPanel({
			isFullscreen: true,
			settings: {
				...defaultSettings,
				"fullscreen.details.show_filename": "filename",
				"fullscreen.details.show_dimensions": true,
				"fullscreen.details.show_model_name": true,
				"fullscreen.details.show_positive_prompt": true,
				"fullscreen.details.show_negative_prompt": true,
				"fullscreen.details.show_tags": true,
				"fullscreen.details.show_user_notes": "always",
				"fullscreen.details.show_created_at": true,
			},
		});
		expect(screen.getByText("Filename")).toBeInTheDocument();
	});

	it("renders core prompt tags sorted by usage count", async () => {
		vi.mocked(fetchAnalyticsCounts).mockResolvedValue({
			"1girl": 100,
			solo: 50,
			masterpiece: 10,
		});

		renderPanel({
			image: createTestImage({
				positive_prompt_keywords: ["1girl", "solo", "masterpiece"],
			}),
			settings: {
				...defaultSettings,
				"viewer.details.show_core_prompt": true,
				"viewer.details.core_prompt_count": 2, // Only show top 2 least used
			},
		});

		// Ensure Core Prompt section appears
		expect(await screen.findByText("Core Prompt")).toBeInTheDocument();
		// masterpiece (10) should be first, solo (50) second. 1girl (100) should be sliced out.
		expect(await screen.findByText("masterpiece")).toBeInTheDocument();
		expect(await screen.findByText("(10)")).toBeInTheDocument();
		expect(await screen.findByText("solo")).toBeInTheDocument();
		expect(await screen.findByText("(50)")).toBeInTheDocument();
		expect(screen.queryByText("1girl")).not.toBeInTheDocument();
	});

	it("hides core prompt when show_core_prompt setting is false", () => {
		renderPanel({
			image: createTestImage({
				positive_prompt_keywords: ["1girl"],
			}),
			settings: {
				...defaultSettings,
				"viewer.details.show_core_prompt": false,
			},
		});
		expect(screen.queryByText("Core Prompt")).not.toBeInTheDocument();
	});
});
