import React from "react";
import { createRoot, type Root } from "react-dom/client";
// @ts-expect-error
import { api } from "../../../scripts/api.js";
// @ts-expect-error
import { app } from "../../../scripts/app.js";
import * as apiLayer from "./api";
import { GalleryPanel } from "./components/GalleryPanel";
import { logger } from "./logger";
import { GalleryProvider } from "./store/GalleryContext";
import type { ComfyApp } from "./types";

const style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(style);

let galleryRoot: Root | null = null;
let galleryContainer: HTMLDivElement | null = null;

app.registerExtension({
	name: "ComfyUI.MeldNexus",

	async beforeRegisterNodeDef(
		nodeType: unknown,
		nodeData: { name: string },
		app: ComfyApp,
	) {
		if (nodeData.name === "MeldNexus") {
			const onExecuted = (
				nodeType as { prototype: { onExecuted: (...args: unknown[]) => void } }
			).prototype.onExecuted;
			(
				nodeType as { prototype: { onExecuted: (...args: unknown[]) => void } }
			).prototype.onExecuted = function (...args: unknown[]) {
				onExecuted?.apply(this, args);

				// Refresh content if the gallery is visible
				const meldNexus = app.ui.meldNexus;
				if (meldNexus?.isVisible()) {
					meldNexus.refresh();
				}
			};
		}
	},

	async setup(app: ComfyApp) {
		// Initialize logger from server settings
		try {
			const settings = await apiLayer.fetchSettings();
			logger.init(settings.dev_mode);
			logger.log("Settings received:", settings);
		} catch (e) {
			console.error("[Meld-Flow] Failed to fetch settings", e);
			logger.init(false);
		}

		if (!app.extensionManager?.registerSidebarTab) {
			return;
		}

		// Expose to app.ui for external control
		app.ui.meldNexus = {
			refresh: () => {
				// Mechanism needed to update via React Context
				// Trigger custom event to be detected on the React side
				window.dispatchEvent(new CustomEvent("meld-nexus-refresh"));
			},
			isVisible: () => {
				const el = document.getElementById("meld-flow-gallery-container");
				return el && el.offsetParent !== null;
			},
			toggle: () => {
				try {
					app.extensionManager?.setSidebarTabActive("meld-flow-gallery");
				} catch (e) {
					console.error("Error toggling sidebar:", e);
				}
			},
		};

		// Real-time update notification from backend
		api.addEventListener("meld-nexus-image-saved", () => {
			app.ui.meldNexus?.refresh();
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
								await apiLayer.registerImage({
									filename: img.filename,
									subfolder: img.subfolder,
									type: img.type,
								});
							} catch (e) {
								console.error("Failed to auto-register image:", e);
							}
						}
					}
				}
			},
		);

		try {
			app.extensionManager.registerSidebarTab({
				id: "meld-flow-gallery",
				icon: "meld-nexus-icon",
				title: "Nexus",
				tooltip: "Meld Flow: Nexus",
				type: "custom",
				render: (el: HTMLElement) => {
					logger.log("MeldNexus: render called", {
						el,
						galleryRoot,
						galleryContainer,
					});

					if (!galleryContainer) {
						logger.log(
							"MeldNexus: galleryContainer not found, creating new one",
						);
						galleryContainer = document.createElement("div");
						galleryContainer.id = "meld-flow-gallery-container";
						galleryContainer.style.height = "100%";
						galleryContainer.style.width = "100%";
						galleryContainer.style.display = "flex";
						galleryContainer.style.flexDirection = "column";
					}

					if (!el.contains(galleryContainer)) {
						logger.log("MeldNexus: Appending galleryContainer to el");
						el.appendChild(galleryContainer);
					}

					if (!galleryRoot) {
						logger.log("MeldNexus: Creating new gallery root");
						galleryRoot = createRoot(galleryContainer);
						galleryRoot.render(
							React.createElement(
								GalleryProvider,
								null,
								React.createElement(GalleryPanel),
							),
						);
					} else {
						logger.log(
							"MeldNexus: Gallery root already exists, React should handle re-render if needed",
						);
					}
				},
			});
		} catch (e) {
			console.error("Error during sidebar registration:", e);
		}
	},
});
