# ComfyUI-Meld Architecture Map

This document serves as a comprehensive guide for AI agents and developers to understand the structure, purpose, and logic of the ComfyUI-Meld project. It must be kept up-to-date with any structural changes.

## 1. Project Purpose
**ComfyUI-Meld** is a sophisticated Custom Node and Web Extension for ComfyUI. Its primary goal is to provide a robust **Image Management System (Meld Nexus/Gallery)** directly within the ComfyUI interface. It enables users to:
- Automatically catalog generated images with full metadata (prompts, models, workflow).
- Search, tag, and organize images using a database-backed system.
- View image lineage (parent-child relationships based on img2img).
- Restore generation parameters easily.
- Use utility nodes for image manipulation and prompt construction.

**Tech Stack**:
- **Backend**: Python (ComfyUI Custom Node API), SQLite (Metadata Database), aiohttp (REST API).
- **Frontend**: TypeScript, React 19, Vite (Built into ComfyUI's web interface).

## 2. Module Directory & Responsibilities

### Root Level
- `__init__.py`: **Entry Point for ComfyUI**. Exports custom nodes and registers the web directory.
- `requirements.txt`: Python dependencies.
- `package.json` (in `ui/`): Frontend dependencies.

### Backend (`py/`)
| Directory | Responsibility |
|-----------|----------------|
| `image_manager/` | **Core System**. Handles database operations, REST API, and image management logic. |
| `image_manager/api.py` | **API Gateway**. Defines all REST endpoints (`/meld/...`) called by the frontend. |
| `image_manager/database.py` | Database connection and initialization (SQLite). |
| `image_manager/services/` | Business logic (scanning, image processing, cleanup). |
| `image_manager/repositories/`| Data access layer (CRUD operations for images, tags, settings). |
| `image_manager/nodes/` | Custom nodes related to saving/management (e.g., `MeldSaveImage`). |
| `load_image_configs/` | Logic for loading images and parsing metadata (Unified Loader). |
| `auto_exposure/`, `pixelate/`, etc. | Standalone utility nodes for image processing. |

### Frontend (`ui/`)
| Directory | Responsibility |
|-----------|----------------|
| `src/index.ts` | **Web Extension Entry**. Registers the extension with `app.registerExtension`. |
| `src/api.ts` | **API Client**. Typed functions to communicate with the backend (`api.fetchApi`). |
| `src/components/` | React components for the Gallery, Settings, and Image Cards. |
| `src/store/` | State management (Context/Reducer) for the Gallery UI. |
| `src/hooks/` | Custom React hooks for logic separation. |

## 3. Key Logic & Functions Map

### Entry Points
- **Python Load**: `__init__.py` imports nodes from submodules and defines `NODE_CLASS_MAPPINGS`.
- **Web Load**: ComfyUI loads `web/js/gallery_extension.js` (compiled from `ui/src/index.ts`), which calls `app.registerExtension`.
- **API Routes**: Registered in `py/image_manager/api.py` using `@server.PromptServer.instance.routes`.

### Core Data Flow
1. **Image Generation**:
   - User runs a workflow.
   - `MeldSaveImage` node saves the image OR standard save node triggers `executed` event.
   - **Auto-Registration**: Frontend `src/index.ts` listens for `executed` event -> calls `registerImage` API -> Backend `api.register_image` saves metadata to DB.

2. **Data Retrieval (Gallery)**:
   - User opens Meld tab.
   - Frontend calls `fetchImages` (`src/api.ts`).
   - Backend `list_images` (`py/image_manager/api.py`) queries SQLite via `SearchService`.
   - Results returned as JSON and rendered by `GalleryPanel`.

### Critical Files
- **Database Schema**: `py/image_manager/db/schema.py` (Defines tables: `images`, `tags`, `favorites`, etc.).
- **Metadata Extraction**: `py/load_image_configs/core/metadata_helper.py` (Parses PNG info, Exif, and ComfyUI workflows).
- **Search Logic**: `py/image_manager/search_service.py` (Parses search queries and builds SQL).

## 4. Implementation Rules

### Dependency Rules
- **Backend**:
  - `image_manager` is the central dependency. Other nodes (like `load_image_configs`) should NOT depend on `image_manager` if possible to avoid circular imports, but `image_manager` relies on `load_image_configs` for metadata parsing.
  - **NO** absolute imports of project root. Use relative imports (e.g., `from ..utils import X`) within packages.

- **Frontend**:
  - Use `api.fetchApi` for all network requests. **DO NOT** use native `fetch` directly for backend communication (to handle ComfyUI auth/routing).
  - **Strict Typing**: No `any`. Define interfaces in `src/types.ts`.

### Naming & Style
- **Python**: Snake case (`my_variable`). Class names PascalCase (`MyNode`).
- **TypeScript**: Camel case (`myVariable`). Component files PascalCase (`MyComponent.tsx`).
- **API Routes**:
  - Definition: `@server.PromptServer.instance.routes.post("/meld/resource")` (NO `/api` prefix).
  - Usage: `api.fetchApi("/meld/resource")`.

### Modification Protocol
- When adding a new API endpoint:
  1. Define handler in `py/image_manager/api.py`.
  2. Add typed wrapper in `ui/src/api.ts`.
  3. Update `architecture.md` if a new major service/module is created.
