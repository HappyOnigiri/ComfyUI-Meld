import React from "react";
import { createRoot, type Root } from "react-dom/client";
// @ts-expect-error
import { api } from "../../../scripts/api.js";
// @ts-expect-error
import { app } from "../../../scripts/app.js";
import * as apiLayer from "./api";
import { GalleryPanel } from "./components/GalleryPanel";
import { GalleryProvider } from "./store/GalleryContext";

const style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(style);

let galleryRoot: Root | null = null;

app.registerExtension({
    name: "ComfyUI.MeldNexus",

    // biome-ignore lint/suspicious/noExplicitAny: ComfyUI interop
    async beforeRegisterNodeDef(nodeType: any, nodeData: { name: string }, app: any) {
        if (nodeData.name === "MeldNexus") {
            const onExecuted = nodeType.prototype.onExecuted;
            nodeType.prototype.onExecuted = function (...args: unknown[]) {
                onExecuted?.apply(this, args);

                // Refresh content if the gallery is visible
                if (app.ui.meldNexus?.isVisible()) {
                    app.ui.meldNexus.refresh();
                }
            };
        }
    },

    // biome-ignore lint/suspicious/noExplicitAny: ComfyUI interop
    async setup(app: any) {
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
                    app.extensionManager.setSidebarTabActive("meld-flow-gallery");
                } catch (e) {
                    console.error("Error toggling sidebar:", e);
                }
            },
        };

        // Real-time update notification from backend
        api.addEventListener("meld-nexus-image-saved", () => {
            app.ui.meldNexus.refresh();
        });

        // Auto-register when image generation is complete
        // biome-ignore lint/suspicious/noExplicitAny: ComfyUI interop
        api.addEventListener("executed", async ({ detail }: { detail: any }) => {
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
        });

        try {
            app.extensionManager.registerSidebarTab({
                id: "meld-flow-gallery",
                icon: "pi pi-images",
                title: "Gallery",
                tooltip: "Meld Flow: View generated images",
                type: "custom",
                render: (el: HTMLElement) => {
                    if (!galleryRoot) {
                        const container = document.createElement("div");
                        container.id = "meld-flow-gallery-container";
                        container.style.height = "100%";
                        container.style.width = "100%";
                        container.style.display = "flex";
                        container.style.flexDirection = "column";

                        el.appendChild(container);
                        galleryRoot = createRoot(container);

                        // Mount React application
                        galleryRoot.render(
                            React.createElement(
                                GalleryProvider,
                                null,
                                React.createElement(GalleryPanel),
                            ),
                        );
                    }
                },
            });
        } catch (e) {
            console.error("Error during sidebar registration:", e);
        }
    },
});
