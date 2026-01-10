import React from 'react';
import { createRoot } from 'react-dom/client';
// @ts-ignore
import { app } from '../../../scripts/app.js';
// @ts-ignore
import { api } from '../../../scripts/api.js';
import { GalleryProvider } from './store/GalleryContext';
import { GalleryPanel } from './components/GalleryPanel';
import * as apiLayer from './api';

const style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(style);

let galleryRoot: any = null;

app.registerExtension({
    name: "ComfyUI.MeldNexus",

    async beforeRegisterNodeDef(nodeType: any, nodeData: any, app: any) {
        if (nodeData.name === "MeldNexus") {
            const onExecuted = nodeType.prototype.onExecuted;
            nodeType.prototype.onExecuted = function (message: any) {
                onExecuted?.apply(this, arguments);

                // Refresh content if the gallery is visible
                // @ts-ignore
                if (app.ui.meldNexus?.isVisible()) {
                    // @ts-ignore
                    app.ui.meldNexus.refresh();
                }
            };
        }
    },

    async setup(app: any) {
        if (!app.extensionManager?.registerSidebarTab) {
            return;
        }

        // Expose to app.ui for external control
        // @ts-ignore
        app.ui.meldNexus = {
            refresh: () => {
                // ReactのContext経由で更新するための仕組みが必要
                // ここではカスタムイベントを発火させて React 側で検知する
                window.dispatchEvent(new CustomEvent('meld-nexus-refresh'));
            },
            isVisible: () => {
                const el = document.getElementById('meld-flow-gallery-container');
                return el && el.offsetParent !== null;
            },
            toggle: () => {
                try {
                    app.extensionManager.setSidebarTabActive("meld-flow-gallery");
                } catch (e) {
                    console.error("Error toggling sidebar:", e);
                }
            }
        };

        // backend からのリアルタイム更新通知
        api.addEventListener("meld-nexus-image-saved", () => {
            // @ts-ignore
            app.ui.meldNexus.refresh();
        });

        // 画像生成完了時の自動登録
        api.addEventListener("executed", async ({ detail }: any) => {
            if (detail?.output?.images) {
                for (const img of detail.output.images) {
                    if (img.type === "output") {
                        try {
                            await apiLayer.registerImage({
                                filename: img.filename,
                                subfolder: img.subfolder,
                                type: img.type
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
                id: 'meld-flow-gallery',
                icon: 'pi pi-images',
                title: 'Gallery',
                tooltip: 'Meld Flow: View generated images',
                type: 'custom',
                render: (el: HTMLElement) => {
                    if (!galleryRoot) {
                        const container = document.createElement('div');
                        container.id = 'meld-flow-gallery-container';
                        container.style.height = "100%";
                        container.style.width = "100%";
                        container.style.display = "flex";
                        container.style.flexDirection = "column";

                        el.appendChild(container);
                        galleryRoot = createRoot(container);

                        // React アプリのマウント
                        galleryRoot.render(
                            React.createElement(
                                GalleryProvider,
                                null,
                                React.createElement(GalleryPanel)
                            )
                        );
                    }
                }
            });
        } catch (e) {
            console.error("Error during sidebar registration:", e);
        }
    }
});
