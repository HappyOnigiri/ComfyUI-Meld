import { app } from "../../../scripts/app.js";
import { api } from "../../../scripts/api.js";

function $el(tag, propsOrChildren, children) {
    const split = tag.split(".");
    const element = document.createElement(split.shift());
    if (split.length > 0) {
        element.classList.add(...split);
    }

    if (propsOrChildren) {
        if (Array.isArray(propsOrChildren) || propsOrChildren instanceof Element) {
            children = propsOrChildren;
            propsOrChildren = {};
        }
    }

    if (propsOrChildren) {
        for (const [key, value] of Object.entries(propsOrChildren)) {
            if (key === "text") element.innerText = value;
            else if (key === "html") element.innerHTML = value;
            else if (key === "style") Object.assign(element.style, value);
            else if (key.startsWith("on")) element[key.toLowerCase()] = value;
            else element.setAttribute(key, value);
        }
    }

    if (children) {
        const kids = Array.isArray(children) ? children : [children];
        for (const kid of kids) {
            if (typeof kid === "string") element.appendChild(document.createTextNode(kid));
            else element.appendChild(kid);
        }
    }
    return element;
}

app.registerExtension({
    name: "ComfyUI.MeldNexus",

    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "MeldNexus") {
            // Prototype Patching: Update gallery when node execution is complete (Rule 2)
            const onExecuted = nodeType.prototype.onExecuted;
            nodeType.prototype.onExecuted = function (message) {
                onExecuted?.apply(this, arguments);

                // Refresh content if the gallery is visible
                if (app.ui.meldNexus?.isVisible()) {
                    app.ui.meldNexus.refresh();
                }
            };
        }
    },

    async setup(app) {
        if (!app.extensionManager?.registerSidebarTab) {
            console.warn("Sidebar API not available. Skipping Gallery sidebar registration.");
            return;
        }

        const contentDiv = $el("div", { style: { padding: "10px", paddingBottom: "60px" } });
        let selectedIds = new Set();
        let bulkBar = null;

        const updateBulkBar = () => {
            if (selectedIds.size > 0) {
                if (!bulkBar) {
                    bulkBar = $el("div", {
                        style: {
                            position: "fixed",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            height: "50px",
                            background: "#222",
                            borderTop: "1px solid #444",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 20px",
                            zIndex: "1000",
                            boxShadow: "0 -2px 10px rgba(0,0,0,0.5)",
                            gap: "15px"
                        }
                    }, [
                        $el("span", {
                            text: `${selectedIds.size} selected`,
                            style: { color: "#eee", fontSize: "14px", fontWeight: "bold", marginRight: "10px" }
                        }),
                        $el("button", {
                            text: "Delete",
                            style: {
                                background: "#ff4444",
                                color: "white",
                                border: "none",
                                padding: "8px 20px",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                fontSize: "14px"
                            },
                            onclick: async () => {
                                const count = selectedIds.size;
                                if (confirm(`選択した ${count} 枚の画像を削除しますか？\n\n【警告】\n物理ファイルも完全に削除されます。この操作は取り消せません。`)) {
                                    try {
                                        const res = await api.fetchApi("/meld-nexus/bulk-delete", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify({
                                                ids: Array.from(selectedIds),
                                                delete_files: true
                                            })
                                        });
                                        if (res.ok) {
                                            selectedIds.clear();
                                            await updateGallery(contentDiv);
                                            updateBulkBar();
                                        } else {
                                            const errData = await res.json();
                                            alert("Failed to delete images: " + (errData.error || "Unknown error"));
                                        }
                                    } catch (err) {
                                        console.error(err);
                                        alert("An error occurred during deletion.");
                                    }
                                }
                            }
                        }),
                        $el("button", {
                            text: "Cancel",
                            style: {
                                background: "#444",
                                color: "#ccc",
                                border: "none",
                                padding: "8px 15px",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontSize: "14px"
                            },
                            onclick: () => {
                                selectedIds.clear();
                                updateGallery(contentDiv);
                                updateBulkBar();
                            }
                        })
                    ]);
                    document.body.appendChild(bulkBar);
                } else {
                    bulkBar.querySelector("span").innerText = `${selectedIds.size} items selected`;
                }
            } else {
                if (bulkBar) {
                    bulkBar.remove();
                    bulkBar = null;
                }
            }
        };

        const updateGallery = async (targetEl) => {
            const displayEl = targetEl || contentDiv;
            displayEl.innerHTML = "Loading...";
            try {
                // Rule 2: Use api.fetchApi
                const res = await api.fetchApi("/meld-nexus/list");
                if (res.status !== 200) throw new Error("API Error");
                const files = await res.json();

                displayEl.innerHTML = "";
                if (!files.length) {
                    displayEl.appendChild($el("p", { text: "No images found." }));
                    return;
                }

                files.forEach(f => {
                    const filename = f.filename || f; // Fallback if string
                    const subfolder = f.subfolder || "";
                    const fullFilename = subfolder ? `${subfolder}/${filename}` : filename;
                    const isSelected = selectedIds.has(f.id);

                    const img = $el("img", {
                        src: `/view?filename=${encodeURIComponent(fullFilename)}&type=output`,
                        style: {
                            maxWidth: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                            borderRadius: "4px",
                            cursor: "pointer",
                            display: "block"
                        },
                        onclick: (e) => {
                            if (e.ctrlKey || e.metaKey || selectedIds.size > 0) {
                                // Toggle selection if already selecting or using ctrl
                                e.preventDefault();
                                e.stopPropagation();
                                if (selectedIds.has(f.id)) selectedIds.delete(f.id);
                                else selectedIds.add(f.id);
                                updateGallery(displayEl);
                                updateBulkBar();
                            } else {
                                window.open(img.src, "_blank");
                            }
                        }
                    });

                    // Metadata Section
                    const tagsHtml = (f.tags && f.tags.length) ?
                        f.tags.map(t => `<span style="background: #555; padding: 2px 6px; margin-right: 4px; border-radius: 4px; font-size: 10px; display: inline-block; margin-bottom: 2px;">${t}</span>`).join("") :
                        "<span style='color: #666;'>-</span>";

                    const details = $el("div", {
                        style: {
                            color: "#ccc",
                            fontSize: "11px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px"
                        },
                        html: `
                            <div style="font-size: 10px; color: #aaa; word-break: break-all; margin-bottom: 4px;">${fullFilename}</div>

                            <div style="font-weight: bold; color: #888; font-size: 10px;">Positive</div>
                            <div style="max-height: 60px; overflow-y: auto; white-space: pre-wrap; font-size: 10px; background: rgba(0,0,0,0.2); padding: 4px; border-radius: 3px;">${f.positive || "-"}</div>

                            <div style="font-weight: bold; color: #888; font-size: 10px;">Negative</div>
                            <div style="max-height: 40px; overflow-y: auto; white-space: pre-wrap; font-size: 10px; background: rgba(0,0,0,0.2); padding: 4px; border-radius: 3px;">${f.negative || "-"}</div>

                            <div style="font-weight: bold; color: #888; font-size: 10px;">Tags</div>
                            <div style="font-size: 10px;">${tagsHtml}</div>
                        `
                    });

                    const row = $el("div", {
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            background: isSelected ? "rgba(100, 150, 255, 0.2)" : "rgba(255,255,255,0.05)",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "5px",
                            border: "1px solid",
                            borderColor: isSelected ? "#4488ff" : "transparent",
                            position: "relative",
                            gap: "10px",
                            cursor: "pointer"
                        },
                        onclick: (e) => {
                            if (selectedIds.has(f.id)) selectedIds.delete(f.id);
                            else selectedIds.add(f.id);
                            updateGallery(displayEl);
                            updateBulkBar();
                        },
                        onmouseenter: () => {
                            if (!isSelected) row.style.borderColor = "#666";
                        },
                        onmouseleave: () => {
                            if (!isSelected) row.style.borderColor = "transparent";
                        }
                    }, [
                        $el("div", {
                            style: { flex: "0 0 120px", minWidth: "120px" }
                        }, [img]),
                        $el("div", {
                            style: { flex: "1", minWidth: "0" }
                        }, [details])
                    ]);

                    displayEl.appendChild(row);
                });
            } catch(e) {
                console.error(e);
                displayEl.innerText = "Error loading list.";
            }
        };

        // Expose to app.ui for external control (Rule 6)
        app.ui.meldNexus = {
            refresh: () => updateGallery(contentDiv),
            isVisible: () => {
                // More robust check for visibility: if the element is attached to the DOM and not hidden
                return contentDiv.offsetParent !== null;
            },
            toggle: () => {
                app.extensionManager.setSidebarTabActive("meld-flow-gallery");
            }
        };

        // Rule 2: Listen for real-time updates from backend
        // Use app.api to ensure we're using the correct instance
        app.api.addEventListener("meld-nexus-image-saved", (ev) => {
            // Refresh regardless of visibility so it's ready when the user opens it
            app.ui.meldNexus.refresh();
        });

        // Auto-register images from any node execution
        api.addEventListener("executed", async ({ detail }) => {
            if (detail?.output?.images) {
                for (const img of detail.output.images) {
                    if (img.type === "output") {
                        try {
                            const response = await api.fetchApi("/meld-nexus/register", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    filename: img.filename,
                                    subfolder: img.subfolder,
                                    type: img.type
                                })
                            });
                        } catch (e) {
                            console.error("Failed to auto-register image:", e);
                        }
                    }
                }
            }
        });

        app.extensionManager.registerSidebarTab({
            id: 'meld-flow-gallery',
            icon: 'pi pi-images',
            title: 'Gallery',
            tooltip: 'Meld Flow: View generated images',
            type: 'custom',
            render: async (el) => {
                el.innerHTML = "";
                el.appendChild(contentDiv);
                await updateGallery(contentDiv);
            }
        });
    }
});
