---
name: web-development
description: >
  TypeScript/React web extension development rules for ComfyUI.
  Reference when editing files under ui/src/ or web/.
---

# ComfyUI Web Extension Development Rules (TypeScript/Strict)

You are an expert TypeScript developer specializing in **ComfyUI Web Extensions**.
Your goal is to build robust, type-safe, and maintainable extensions that interact with the untyped `LiteGraph.js` library and ComfyUI's core.

## 1. Core Philosophy: Type Safety First
The project enforces strict linting via **Biome** and **TypeScript Strict Mode**.

* **NO `any`**: Explicit usage of `any` is prohibited. Use `unknown` for uncertain data structures.
* **NO `@ts-ignore`**: Do not suppress type errors. Fix the definitions in `types/comfy.d.ts` or use Type Guards.
* **Linting Compliance**: Code must pass `biome check`. Remove unused imports and variables immediately.

## 2. Extension Architecture

### Entry Point
Extensions must be registered via `app.registerExtension`. Keep the entry point clean and delegate logic to separate modules or React components.

```typescript
import { app } from "/scripts/app.js";
import { api } from "/scripts/api.js";
import type { ComfyApp, ComfyNode, ComfyExtension } from "./types/comfy";

const ext: ComfyExtension = {
    name: "My.Unique.ExtensionName",

    async setup(app) {
        // Initialize React UI or Event Listeners here
    },

    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "MyTargetNode") {
            // Safe prototype patching
            const orig = nodeType.prototype.onExecuted;
            nodeType.prototype.onExecuted = function(this: ComfyNode, message: unknown) {
                orig?.apply(this, arguments);
                // logic...
            };
        }
    }
};

app.registerExtension(ext);

```

## 3. Handling Untyped Data (The "Unknown" Pattern)

Since ComfyUI internals are untyped, incoming data is often chaotic. Never cast to `any`.

**BAD:**

```typescript
const val: any = node.widgets[0].value;
console.log(val.toFixed(2)); // Might crash if val is string

```

**GOOD (Type Guard):**

```typescript
const val: unknown = node.widgets?.[0]?.value;

if (typeof val === "number") {
    console.log(val.toFixed(2));
} else {
    console.warn("Expected number, got:", typeof val);
}

```

## 4. UI Development Strategy

Distinguish between **Canvas UI** (Nodes/LiteGraph) and **DOM UI** (Sidebars/Dialogs).

### A. DOM UI (Sidebars, Panels) -> Use React

* Do not manipulate DOM manually (`document.createElement`).
* Use the existing **React + Vite** setup in the `ui/` directory.
* Bridge ComfyUI events to React using `CustomEvent` or a global store.

### B. Canvas UI (Nodes, Widgets) -> Use LiteGraph

* Use `ComfyWidgets` for standard inputs.
* For custom drawing, implement `onDrawForeground`.
* **Performance**: Do NOT create objects or heavy calculations inside the `draw` loop (60fps). Cache values in `this.properties`.

## 5. API Communication & Routing

### Python <-> TypeScript Communication

* **Receiving Data**: Use `api.addEventListener` with a typed event handler.
```typescript
interface MyEventDetail {
    count: number;
    filename: string;
}

api.addEventListener("my-plugin-event", (event: CustomEvent) => {
    const detail = event.detail as MyEventDetail; // Type assertion only at the boundary
    // ...
});

```

* **Sending Data**: Use `api.fetchApi` for commands. Ensure endpoints are typed in `types/api.ts` if possible.

### /api Prefix Handling (Important)

- **`api.fetchApi("/xxx")` actually sends a request to `/api/xxx`.**
  - Example: `api.fetchApi("/meld/register")` → `POST /api/meld/register`
- The frontend should specify paths **without** the `/api` prefix.

### Common Pitfalls & Solutions

1. **`app.graph` Availability**:
* `app.graph` is `null` during `init()`. Access it only in `setup()` or later.

2. **Widget Index Stability**:
* Do not rely on `widgets[0]`. Search by name: `node.widgets.find(w => w.name === "seed")`.

3. **Reactivity**:
* If you change a widget value programmatically, you MUST call:
`app.graph.setDirtyCanvas(true, true);`

4. **Global Namespace**:
* Do not pollute `window`. If you must expose an API for other nodes, attach it to `app.ui.myExtensionName` and type it in `d.ts`.

### Basic Troubleshooting for 405 (Method Not Allowed)

- **A `405` error typically means "The URL exists, but the HTTP method used is not allowed."**
- Steps to verify:
  - **Does `GET /api/<endpoint>` return a 200 OK?**
  - **Is `POST /api/<endpoint>` actually registered?**
- Registration status can be verified via startup logs or by temporarily dumping the route list for debugging purposes.

## 6. API Response Format

When using `api.fetchApi`, the response will be wrapped in `ApiResponse`. Create a helper or consistently check `success`.

```typescript
const res = await api.fetchApi("/meld/...");
const result = await res.json();
if (!result.success) {
    throw new Error(result.error || "Unknown error");
}
return result.data; // The actual payload is in .data
```

Response keys use `snake_case` — handle them directly without camelCase conversion.

## 7. Feature-Based Frontend Architecture

The frontend is organized by feature modules in `ui/src/features/`.

### A. Feature Structure
Each feature (e.g., `gallery`, `viewer`, `search`) should contain its own:
*   `components/`: UI components specific to the feature.
*   `hooks/`: React hooks for local feature logic.
*   `api/`: Feature-specific API client (e.g., `searchApi.ts`).

### B. Shared Image Logic (`features/images/`)
Logic related to **image data operations** (CRUD, lineage, common actions) must be centralized in `features/images/`.
*   **DO NOT** duplicate image manipulation logic (like deleting, tagging, or fetching lineage) in other features.
*   Use `useImageActions` and `useImageLineage` hooks for shared functionality.
*   Keep `imagesApi.ts` as the single source of truth for core image-related backend communication.

### C. Import Paths
*   Always use **absolute paths** for ComfyUI scripts: `/scripts/api.js` and `/scripts/app.js`.
*   **DO NOT** use relative paths (e.g., `../../../scripts/api.js`) as they break during the build process when files are moved.

## 8. CSS & BEM Policy

Styling conventions to improve CSS maintainability and prevent selector conflicts (cascade pollution).

### Prefer CSS Modules
- **New components**: Always use CSS Modules (`*.module.css`) to keep selectors locally scoped.
- Direct additions to global CSS are not recommended to avoid selector conflicts.

### Plain CSS Usage (Existing Files)
- When modifying existing `ui/src/styles/gallery/*.css`, write styles in the appropriate feature-split file (`import.css`, `tree.css`, `tags.css`, etc.).
- Do not add styles to unrelated feature files to prevent unintended cascade pollution.

### BEM Naming Convention (Strict)
When using plain CSS, strictly follow these naming rules:
- **Block**: Use the `meld-` prefix (e.g., `.meld-btn`)
- **Element**: Connect with double underscores `__` (e.g., `.meld-btn__text`)
- **Modifier**: Connect with double hyphens `--` (e.g., `.meld-btn--primary`)
- Single-hyphen concatenation (e.g., `meld-btn-placeholder`) is not an Element; use `__` when expressing structure.

## 9. Keybinding Policy: Prevent Propagation

- When implementing keybindings for UI elements (especially within `input`, `textarea`, or modals), you MUST prevent the event from propagating to ComfyUI's core shortcuts.
- For "Confirm" or "Save" actions using `Ctrl+Enter` or `Cmd+Enter` inside input elements:
  - You MUST call `e.preventDefault()`, `e.stopPropagation()`, and `e.stopImmediatePropagation()`.
  - When using global keydown listeners, use the **capture phase** (`{ capture: true }`) to intercept the event before it reaches ComfyUI's global handlers.
- This is critical to prevent unintended side effects, such as triggering ComfyUI's "Queue Prompt" while the user is typing in a custom modal or field.

## 10. Modal Policy: Escape-to-Close

- Any modal/overlay UI MUST close on `Escape`.
- A "modal" includes UI using `createPortal`, `meld-modal-overlay`, or `*Modal*` components.
- Implementation details are intentionally not prescribed here; decide per change.

## 11. Z-index Layer Policy

Use centralized z-index tokens for global UI layers to avoid stacking conflicts and click-blocking overlays.

### Source of Truth
- Define and maintain global z-index tokens in `ui/src/styles/gallery/base.css` under `:root`.
- Token naming convention: `--meld-z-*`.
- Use the exact lowercase path `ui/src/styles/gallery/base.css`; the `:root` block in that file is the canonical location for all `--meld-z-*` token definitions.

### Required Usage
- For global layers (viewer, modal, toast, dropdown, overlay, light table), always use `var(--meld-z-...)`.
- Do not add new magic-number z-index values for global layers.
- If a new layer is needed, add a token first and then consume it from component styles.

### Inline Style Restriction
- Do not set `zIndex` in inline React styles for global layers.
- Use CSS classes that reference `--meld-z-*` tokens instead.

### Local Layer Exceptions
- Small local layering values (e.g., `1/2/3`) are allowed only for internal, component-scoped stacking that does not represent global layer ordering.
- If local stacking grows or interacts with overlays/modals, migrate it to global tokens.

## 12. Workflow Checklist

Before marking a task as complete:

1. Run `npm run check` (Biome Lint).
2. Run `npm run build` (TypeScript Check).
3. Verify no `console.log` remains (use explicit logging utils if needed).

## 13. Documentation Updates (Mandatory)

When modifying Web Extension features, update user-facing docs only when the change is visible to users.

- **Trigger**: Update `docs/{lang}/ImageManager.md` only for user-visible behavior/UI changes. Do not require docs updates for internal refactors, implementation-only changes, or development-only guidance.
- **Scope**: For user-visible Image Manager changes, update both Japanese (`docs/ja/ImageManager.md`) and English (`docs/en/ImageManager.md`).
- **Development guidance**: Reflect development-related notes in source code comments or under `.ai/rules/` instead of user-facing docs.
