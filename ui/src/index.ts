import React from "react";
import { createRoot, type Root } from "react-dom/client";
// @ts-expect-error
import { api } from "/scripts/api.js";
// @ts-expect-error
import { app } from "/scripts/app.js";
import { GalleryPanel } from "./features/gallery/components/GalleryPanel";
import * as imagesApi from "./features/images/api/imagesApi";
import * as settingsApi from "./features/settings/api/settingsApi";
import { logger } from "./logger";
import { startPortalRootAutoAttach } from "./portals/portalRoots";
import { GalleryProvider } from "./store/GalleryContext";
import type { ComfyApp } from "./types";
import "./meld_unified_loader_ui";

// Load the bundled stylesheet from the same directory as this module.
//
// IMPORTANT:
// Do not hardcode `/extensions/<name>/...` because the actual extension mount path
// depends on the custom_nodes folder name (and can differ between WebUI and Desktop builds).
const existingStyle = document.getElementById("meld-gallery-style") as HTMLLinkElement | null;

if (!existingStyle) {
	const style = document.createElement("link");
	style.id = "meld-gallery-style";
	style.rel = "stylesheet";
	style.type = "text/css";
	try {
		// Vite warns that the file may not exist at build time; it is resolved at runtime.
		style.href = new URL(/* @vite-ignore */ "./style.css", import.meta.url).toString();
	} catch {
		// Fallback (legacy). Keep for safety if `import.meta.url` is unavailable for some reason.
		style.href = "/extensions/ComfyUI-Meld/js/style.css";
	}
	document.head.appendChild(style);
}

let galleryRoot: Root | null = null;
let galleryContainer: HTMLDivElement | null = null;

app.registerExtension({
	name: "ComfyUI.Meld",

	async beforeRegisterNodeDef(nodeType: unknown, nodeData: { name: string }, app: ComfyApp) {
		if (nodeData.name === "MeldSaveImage") {
			const onExecuted = (nodeType as { prototype: { onExecuted: (...args: unknown[]) => void } })
				.prototype.onExecuted;
			(
				nodeType as { prototype: { onExecuted: (...args: unknown[]) => void } }
			).prototype.onExecuted = function (...args: unknown[]) {
				onExecuted?.apply(this, args);

				// Refresh content if the gallery is visible
				const meld = app.ui.meld;
				if (meld?.isVisible()) {
					meld.refresh();
				}
			};
		}
	},

	async setup(app: ComfyApp) {
		startPortalRootAutoAttach();

		// Initialize logger from server settings
		try {
			const settings = await settingsApi.fetchSettings();
			logger.init(settings.dev_mode);
			logger.log("Settings received:", settings);
		} catch (e) {
			logger.error("Failed to fetch settings", e);
			logger.init(false);
		}

		if (!app.extensionManager?.registerSidebarTab) {
			return;
		}

		// Expose to app.ui for external control
		app.ui.meld = {
			refresh: () => {
				// Mechanism needed to update via React Context
				// Trigger custom event to be detected on the React side
				window.dispatchEvent(new CustomEvent("meld-refresh"));
			},
			isVisible: () => {
				const el = document.getElementById("meld-gallery-container");
				return el && el.offsetParent !== null;
			},
			toggle: () => {
				try {
					app.extensionManager?.setSidebarTabActive("meld-gallery");
				} catch (e) {
					logger.error("Error toggling sidebar:", e);
				}
			},
		};

		// Real-time update notification from backend
		api.addEventListener("meld-image-saved", () => {
			app.ui.meld?.refresh();
		});

		api.addEventListener("meld-scan-progress", (e: CustomEvent) => {
			window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: e.detail }));
		});

		api.addEventListener("meld-scan-finished", (e: CustomEvent) => {
			window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: e.detail }));
			app.ui.meld?.refresh();
			// Show toast if available (ComfyUI doesn't have a standard toast API easily accessible, but we can alert or log)
			logger.log("Import completed.");
		});

		// Auto-register when image generation is complete
		api.addEventListener(
			"executed",
			async ({
				detail,
			}: CustomEvent<{
				output?: {
					images?: Array<{ filename: string; subfolder: string; type: string }>;
				};
			}>) => {
				if (detail?.output?.images) {
					for (const img of detail.output.images) {
						if (img.type === "output") {
							try {
								await imagesApi.registerImage({
									filename: img.filename,
									subfolder: img.subfolder,
									type: img.type,
								});
							} catch (e) {
								logger.error("Failed to auto-register image:", e);
							}
						}
					}
				}
			},
		);

		try {
			app.extensionManager.registerSidebarTab({
				id: "meld-gallery",
				// NOTE: Use both the legacy mask-based icon and a PrimeIcons fallback.
				// - Web browsers typically render mask-image/data-URL icons correctly (legacy look).
				// - Some desktop WebViews (notably macOS desktop builds) may fail to render them reliably,
				//   so we keep PrimeIcons as a fallback.
				// The CSS decides which one is visible via @supports().
				icon: "meld-icon pi pi-images",
				title: "Meld",
				tooltip: "Meld Image Manager",
				type: "custom",
				render: (el: HTMLElement) => {
					logger.log("render called", {
						el,
						galleryRoot,
						galleryContainer,
					});

					// Configure height constraints for the ComfyUI sidebar parent chain.
					// height: 100% is required for all elements in the chain:
					// sidebar-content-container -> intermediate div -> el
					el.style.height = "100%";
					el.style.overflow = "hidden";
					let parent = el.parentElement;
					while (parent && !parent.classList.contains("sidebar-content-container")) {
						parent.style.height = "100%";
						parent.style.overflow = "hidden";
						parent = parent.parentElement;
					}
					if (parent) {
						parent.style.overflow = "hidden";
					}

					if (!galleryContainer) {
						logger.log("galleryContainer not found, creating new one");
						galleryContainer = document.createElement("div");
						galleryContainer.id = "meld-gallery-container";
						galleryContainer.style.height = "100%";
						galleryContainer.style.width = "100%";
						galleryContainer.style.display = "flex";
						galleryContainer.style.flexDirection = "column";
						// Prevent the ComfyUI sidebar from stretching to the content height
						galleryContainer.style.overflow = "hidden";
					}

					if (!el.contains(galleryContainer)) {
						logger.log("Appending galleryContainer to el");
						el.appendChild(galleryContainer);
					}

					if (!galleryRoot) {
						logger.log("Creating new gallery root");
						galleryRoot = createRoot(galleryContainer);
						galleryRoot.render(
							React.createElement(GalleryProvider, null, React.createElement(GalleryPanel)),
						);
					} else {
						logger.log("Gallery root already exists, React should handle re-render if needed");
					}
				},
			});
		} catch (e) {
			logger.error("Error during sidebar registration:", e);
		}
	},
});
