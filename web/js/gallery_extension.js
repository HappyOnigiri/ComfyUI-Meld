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
    name: "ComfyUI.SimpleManager",

    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "MeldNexus") {
            // Prototype Patching: Update gallery when node execution is complete (Rule 2)
            const onExecuted = nodeType.prototype.onExecuted;
            nodeType.prototype.onExecuted = function (message) {
                onExecuted?.apply(this, arguments);

                // Refresh content if the gallery is visible
                if (app.ui.simpleManager?.isVisible()) {
                    app.ui.simpleManager.refresh();
                }
            };
        }
    },

    async setup(app) {
        if (!app.extensionManager?.registerSidebarTab) {
            console.warn("Sidebar API not available. Skipping Gallery sidebar registration.");
            return;
        }

        const contentDiv = $el("div", { style: { padding: "10px" } });

        const updateGallery = async (targetEl) => {
            const displayEl = targetEl || contentDiv;
            displayEl.innerHTML = "Loading...";
            try {
                // Rule 2: Use api.fetchApi
                const res = await api.fetchApi("/simple-manager/list");
                if (res.status !== 200) throw new Error("API Error");
                const files = await res.json();

                displayEl.innerHTML = "";
                if (!files.length) {
                    displayEl.appendChild($el("p", { text: "No images found." }));
                    return;
                }

                files.forEach(f => {
                    const img = $el("img", {
                        src: `/view?filename=${f}&type=output`,
                        style: {
                            maxWidth: "100%",
                            borderRadius: "4px",
                            cursor: "pointer",
                            display: "block"
                        },
                        onclick: () => window.open(img.src, "_blank")
                    });

                    const row = $el("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                            background: "rgba(255,255,255,0.05)",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "5px",
                            border: "1px solid transparent"
                        },
                        onmouseenter: () => row.style.borderColor = "#666",
                        onmouseleave: () => row.style.borderColor = "transparent"
                    }, [
                        $el("div", {
                            style: { width: "100%", marginBottom: "5px" }
                        }, [
                            img,
                            $el("div", { text: f, style: { fontSize: "11px", color: "#aaa", marginTop: "5px", wordBreak: "break-all" } })
                        ]),

                        $el("div", {
                            style: {
                                borderTop: "1px dashed #444",
                                paddingTop: "5px",
                                color: "#666",
                                fontSize: "11px"
                            },
                            text: "(Details & Tags area)"
                        })
                    ]);

                    displayEl.appendChild(row);
                });
            } catch(e) {
                console.error(e);
                displayEl.innerText = "Error loading list.";
            }
        };

        // Expose to app.ui for external control (Rule 6)
        app.ui.simpleManager = {
            refresh: () => updateGallery(contentDiv),
            isVisible: () => {
                // Check if our sidebar tab is active
                return document.querySelector(`.comfy-sidebar-tab-content[data-tab-id="meld-flow-gallery"]:not([style*="display: none"])`) !== null;
            },
            toggle: () => {
                // In new UI, we usually just activate the tab
                app.extensionManager.setSidebarTabActive("meld-flow-gallery");
            }
        };

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
