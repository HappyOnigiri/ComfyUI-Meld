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
        let isWide = true;

        const contentDiv = $el("div", { style: { padding: "10px" } });

        const galleryDiv = $el("div", {
            id: "comfy-simple-manager-gallery",
            style: {
                position: "fixed",
                top: "0",
                right: "0",
                width: "100vw",
                height: "100vh",
                backgroundColor: "var(--comfy-menu-bg, #222)",
                borderLeft: "1px solid var(--border-color, #444)",
                zIndex: "9000",
                display: "none",
                overflowY: "auto",
                color: "var(--fg-color, #fff)",
                boxShadow: "-5px 0 15px rgba(0,0,0,0.5)",
                transition: "width 0.3s ease"
            }
        });

        const resizeBtn = $el("button", {
            text: "Minimize",
            style: { background: "transparent", border: "1px solid #555", color: "var(--fg-color, #fff)", cursor: "pointer", marginRight: "10px", padding: "2px 8px", borderRadius: "4px" },
            onclick: () => {
                isWide = !isWide;
                if (isWide) {
                    galleryDiv.style.width = "100vw";
                    resizeBtn.innerText = "Minimize";
                } else {
                    galleryDiv.style.width = "400px";
                    resizeBtn.innerText = "Maximize";
                }
            }
        });

        const header = $el("div", {
            style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 15px",
                borderBottom: "1px solid var(--border-color, #444)",
                backgroundColor: "var(--comfy-menu-bg, #222)",
                position: "sticky",
                top: "0",
                zIndex: "10"
            }
        }, [
            $el("h3", { text: "Gallery", style: { margin: 0 } }),
                $el("div", {}, [
                    resizeBtn,
                    $el("button", {
                        text: "Close",
                        style: { background: "transparent", border: "none", color: "var(--fg-color, #fff)", cursor: "pointer", fontSize: "16px" },
                        onclick: () => galleryDiv.style.display = "none"
                    })
                ])
        ]);

        galleryDiv.appendChild(header);
        galleryDiv.appendChild(contentDiv);
        document.body.appendChild(galleryDiv);

        const updateGallery = async () => {
            contentDiv.innerHTML = "Loading...";
            try {
                // Rule 2: Use api.fetchApi
                const res = await api.fetchApi("/simple-manager/list");
                if (res.status !== 200) throw new Error("API Error");
                const files = await res.json();

                contentDiv.innerHTML = "";
                if (!files.length) {
                    contentDiv.appendChild($el("p", { text: "No images found." }));
                    return;
                }

                files.forEach(f => {
                    const img = $el("img", {
                        src: `/view?filename=${f}&type=output`,
                        style: {
                            maxWidth: "100%",
                            maxHeight: "300px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            display: "block"
                        },
                        onclick: () => window.open(img.src, "_blank")
                    });

                    const row = $el("div", {
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
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
                            style: { width: "320px", flexShrink: 0, marginRight: "15px" }
                        }, [
                            img,
                            $el("div", { text: f, style: { fontSize: "11px", color: "#aaa", marginTop: "5px", wordBreak: "break-all" } })
                        ]),

                        $el("div", {
                            style: {
                                flex: 1,
                                minHeight: "100px",
                                borderLeft: "1px dashed #444",
                                paddingLeft: "15px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                color: "#666"
                            },
                            text: "(Details & Tags area)"
                        })
                    ]);

                    contentDiv.appendChild(row);
                });
            } catch(e) {
                console.error(e);
                contentDiv.innerText = "Error loading list.";
            }
        };

        // Expose to app.ui for external control
        app.ui.simpleManager = {
            refresh: updateGallery,
            isVisible: () => galleryDiv.style.display !== "none",
            toggle: () => {
                if (galleryDiv.style.display === "none") {
                    galleryDiv.style.display = "block";
                    updateGallery();
                } else {
                    galleryDiv.style.display = "none";
                }
            }
        };

        const addTopBarButton = () => {
            // Carefully check for existence of app.menu (Rule 6)
            const menu = app.menu || document.querySelector(".comfy-menu");
            if (menu) {
                const settingsGroup = app.menu?.settingsGroup?.element;
                const btn = $el("button.comfyui-button", {
                    text: "Gallery",
                    style: { cursor: "pointer", fontWeight: "bold" },
                    onclick: () => app.ui.simpleManager.toggle()
                });

                if (settingsGroup) {
                    settingsGroup.before(btn);
                } else {
                    // Fallback: append to end of menu
                    const parent = menu.element || menu;
                    if (parent instanceof Element) parent.appendChild(btn);
                }
            }
        };

        addTopBarButton();
    }
});
