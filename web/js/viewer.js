import { app } from "../../../scripts/app.js";
import { ComfyWidgets } from "../../../scripts/widgets.js";

// --- Load Image Configs UI Display Extension ---

app.registerExtension({
    name: "Meld.MeldImageLoader",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "MeldImageLoader" || nodeData.name === "MeldImageLoaderBatch") {

            // 1. Add display widget when node is created
            const onNodeCreated = nodeType.prototype.onNodeCreated;
            nodeType.prototype.onNodeCreated = function () {
                const r = onNodeCreated ? onNodeCreated.apply(this, arguments) : undefined;

                // Create a read-only multi-line text widget
                const w = ComfyWidgets["STRING"](
                    this,
                    "summary_display",
                    ["STRING", { multiline: true, placeholder: "Metadata summary will appear here after execution..." }],
                    app
                ).widget;

                // Style adjustments: read-only, transparent background, smaller font
                if (w.inputEl) {
                    w.inputEl.readOnly = true;
                    w.inputEl.style.opacity = 0.8;
                    w.inputEl.style.fontSize = "11px";
                    w.inputEl.style.fontFamily = "monospace";
                    w.inputEl.style.backgroundColor = "rgba(0,0,0,0.2)";
                    w.inputEl.style.color = "#ccc";
                    w.inputEl.style.marginTop = "8px";
                    w.inputEl.style.padding = "4px";
                }

                // Increase the initial size of the node slightly
                this.size = [350, 450];

                return r;
            };

            // 2. Listen for execution completion messages and update the widget
            const onExecuted = nodeType.prototype.onExecuted;
            nodeType.prototype.onExecuted = function (message) {
                if (onExecuted) {
                    onExecuted.apply(this, arguments);
                }

                if (message?.text) {
                    const text = message.text[0];
                    const widget = this.widgets.find((w) => w.name === "summary_display");
                    if (widget) {
                        widget.value = text;

                        // Automatically adjust node height based on text content
                        const lines = text.split('\n').length;
                        const minHeight = 400;
                        const targetHeight = Math.max(minHeight, 200 + (lines * 16));

                        if (this.size[1] < targetHeight) {
                            this.size[1] = targetHeight;
                        }

                        this.setDirtyCanvas(true, true);
                    }
                }
            };
        }
    },
});
