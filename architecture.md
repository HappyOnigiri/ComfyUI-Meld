# ComfyUI-Meld Architecture Map

This document serves as a comprehensive guide for AI agents and developers to understand the structure, purpose, and logic of the ComfyUI-Meld project. It must be kept up-to-date with any structural changes.

## 1. Project Purpose
**ComfyUI-Meld** is a sophisticated Custom Node and Web Extension for ComfyUI. Its primary goal is to provide a robust **Image Management System (Meld Image Manager/Gallery)** directly within the ComfyUI interface. It enables users to:
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
| `image_manager/api.py` | **API Entry Point**. Integrates feature-specific routers and registers them with ComfyUI. |
| `image_manager/common/` | **Shared Backend Logic**. Database connection, constants, and common schemas. |
| `image_manager/features/` | **Feature Modules**. Modularized logic for images, tags, search, settings, and importer. |
| `image_manager/nodes/` | Custom nodes related to saving/management (e.g., `MeldSaveImage`). |
| `load_image_configs/` | Logic for loading images and parsing metadata (Unified Loader). |
| `auto_exposure/`, `pixelate/`, etc. | Standalone utility nodes for image processing. |

### Frontend (`ui/`)
| Directory | Responsibility |
|-----------|----------------|
| `src/index.ts` | **Web Extension Entry**. Registers the extension with `app.registerExtension`. |
| `src/api.ts` | **Global API Client**. Shared or minimal API utilities (e.g., `fetchHomeDir`). |
| `src/features/` | **Feature Modules**. Modularized components, hooks, and **API clients** organized by feature. |
| `src/features/images/` | **Shared Image Logic**. Core image CRUD API and common hooks (lineage, actions) used across the app. |
| `src/components/shared/` | **Reusable UI Components**. Shared parts like modals, buttons, and basic cards. |
| `src/store/` | State management (Context/Reducer) for the Gallery UI. |
| `src/styles/` | Global and component-specific CSS files. |

## 3. Key Logic & Functions Map

### Entry Points
- **Python Load**: `__init__.py` imports nodes from submodules and defines `NODE_CLASS_MAPPINGS`.
- **Web Load**: ComfyUI loads `web/js/gallery_extension.js` (compiled from `ui/src/index.ts`), which calls `app.registerExtension`.
- **API Routes**: Defined in `py/image_manager/features/*/router.py` and integrated into `py/image_manager/api.py`.

### Core Data Flow
1. **Image Generation**:
   - User runs a workflow.
   - `MeldSaveImage` node saves the image OR standard save node triggers `executed` event.
   - **Auto-Registration**: Frontend `src/index.ts` listens for `executed` event -> calls `registerImage` API -> Backend `features/images/router.py` calls `ImageService` to save metadata to DB.

2. **Data Retrieval (Gallery)**:
   - User opens Meld tab.
   - Frontend feature components (e.g., `GalleryPanel`) call `fetchImages` from `features/images/api/imagesApi.ts`.
   - Backend `search/router.py` receives request -> `SearchService` queries SQLite.
   - Results returned as JSON and rendered by `GalleryPanel`.

### Critical Files
- **Database Schema**: `py/image_manager/common/db/schema.py` (Defines tables: `images`, `tags`, `favorites`, etc.).
- **Metadata Extraction**: `py/load_image_configs/core/metadata_helper.py` (Parses PNG info, Exif, and ComfyUI workflows).
- **Search Logic**: `py/image_manager/features/search/service.py` (Parses search queries and builds SQL).

## 4. Implementation Rules

### Dependency Rules
- **Backend**:
  - `image_manager` is the central dependency. Other nodes (like `load_image_configs`) should NOT depend on `image_manager` if possible to avoid circular imports, but `image_manager` relies on `load_image_configs` for metadata parsing.
  - **NO** absolute imports of project root. Use relative imports (e.g., `from ..utils import X`) within packages.

- **Frontend**:
  - Use `api.fetchApi` for all network requests. **DO NOT** use native `fetch` directly for backend communication (to handle ComfyUI auth/routing).
  - **Strict Typing**: No `any`. Define interfaces in `src/types.ts`.

### API Protocols
- **Routes**: `@server.PromptServer.instance.routes.post("/meld/resource")` (NO `/api` prefix).
- **Response Format**: ALL `/meld/...` API responses MUST use the `ApiResponse` wrapper:
  - `success: boolean`: Mandatory success flag.
  - `data: Any | None`: Payload (if successful).
  - `error: str | None`: Error message (if `success` is False).
  - `count: int | None`: Total item count for list responses.
- **Naming**: Use `snake_case` for both Python and JSON keys to remain consistent with DB schema.

### Search Query Syntax
Meld supports a rich query syntax in the search bar. The available prefixes are managed in `py/image_manager/common/constants.py` and fetched dynamically by the frontend:
- **Free Text**: Partial match across positive prompts, tags, and model names.
- **Prefixes**:
  - `tag:name`: Exact or partial tag match.
  - `model:name`: Match by model name.
  - `pos:text`, `neg:text`: Match positive/negative prompts.
  - `date:YYYY-MM-DD`, `after:YYYY-MM-DD`, `before:YYYY-MM-DD`: Filter by date.
  - `has_source:yes/no`: Filter images that have/don't have a parent.
  - `has_derivatives:yes/no`: Filter images that have/don't have children.
  - `sort:created_at_desc/asc`: Change sort order.
- **Negation**: Prefix with `-` or `!` (e.g., `-tag:boy`).
- **Exact Match**: Wrap value in double quotes (e.g., `tag:"best"`).

### Modification Protocol
- When adding a new API endpoint:
  1. Define handler in a feature-specific router (e.g., `py/image_manager/features/X/router.py`) and ensure it's integrated in `api.py`.
  2. Add typed wrapper in the corresponding frontend feature directory (e.g., `ui/src/features/X/api/XApi.ts`).
  3. If the logic is shared across multiple features (like basic image operations), place it in `features/images`.
  4. Update `architecture.md` if a new major service/module is created.
