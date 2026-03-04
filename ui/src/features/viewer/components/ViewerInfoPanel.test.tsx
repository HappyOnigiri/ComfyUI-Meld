import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { initialState } from "../../../store/galleryReducer";
import { createTestImage, resetImageIdCounter } from "../../../test/factories/image";
import type { GalleryAction, Settings } from "../../../types";
import { ViewerInfoPanel } from "./ViewerInfoPanel";

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
		const imgs = screen.getAllByAltText("source thumb");
		expect(imgs).toHaveLength(2);
	});
});
