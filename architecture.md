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
- `.ai/`: **Source of truth for AI agent configuration** (rules, skills, ignore patterns). Run `make sync-rule` or `make setup` to fetch and run [ShareSettings `SyncRule/run.sh`](https://github.com/HappyOnigiri/ShareSettings/blob/main/SyncRule/run.sh) (aligned with [Refix](https://github.com/HappyOnigiri/Refix) `make setup`): propagates per upstream script (requires `curl`, `bash`, network, and `rsync` for skills). Git hooks are optional: `make install-hooks` (same idea as Refix); `make setup-hooks` is an alias.

### Backend (`py/`)
| Directory | Responsibility |
|-----------|----------------|
| `image_manager/` | **Core System**. Handles database operations, REST API, and image management logic. |
| `image_manager/api.py` | **API Entry Point**. Integrates feature-specific routers and registers them with ComfyUI. |
| `image_manager/common/` | **Shared Backend Logic**. Database connection, constants, and common schemas. |
| `image_manager/features/` | **Feature Modules**. Modularized logic for images, tags, search, settings, importer, and workflows. |
| `image_manager/features/databases/` | **Database Management**. Lists, creates, renames, switches, and deletes SQLite databases and coordinates active DB state. |
| `image_manager/nodes/` | Custom nodes related to saving/management (e.g., `MeldSaveImage`). |
| `load_image_configs/` | Logic for loading images and parsing metadata (Unified Loader). |
| `auto_exposure/`, `pixelate/`, etc. | Standalone utility nodes for image processing. |

### Frontend (`ui/`)
| Directory | Responsibility |
|-----------|----------------|
| `src/index.ts` | **Web Extension Entry**. Registers the extension with `app.registerExtension`. |
| `src/api.ts` | **Global API Client**. Shared or minimal API utilities (e.g., `fetchHomeDir`). |
| `src/features/` | **Feature Modules**. Modularized components, hooks, and **API clients** organized by feature. |
| `src/features/gallery/` | **Gallery**. Main gallery UI and layout components for the resource manager. |
| `src/features/images/` | **Shared Image Logic**. Core image CRUD API and common hooks (lineage, actions) used across the app. |
| `src/features/light-table/` | **Light Table**. Logic and UI components for temporarily holding, comparing, and managing multiple images. |
| `src/features/mask-editor/` | **Mask Editor**. Drawing and editing interface for image masks (img2img). |
| `src/features/viewer/` | **Image Viewer**. Full-screen image viewing components. |
| `src/features/workflows/` | **Workflows**. Management and execution of ComfyUI workflows (queuing, etc.). |
| `src/features/databases/` | **Database API Clients**. Typed frontend API wrappers for database management actions. |
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

3. **Database Lifecycle Management**:
   - User opens `Settings -> System` and selects a database action.
   - Frontend `features/databases/api/databasesApi.ts` calls `/meld/databases...`.
   - Backend `features/databases/router.py` updates the active DB via `common/db/client.py` and persists `active_database.json`.
   - Switch and delete operations dispatch `meld-database-changed`, reset Light Table persistence, and remount `GalleryProvider` so cached state and in-flight requests do not leak across databases.
   - Rename operations move the SQLite file and per-database runtime directory together without forcing a frontend soft reset, because the underlying DB contents remain the same.

### Critical Files
- **Database Schema**: `py/image_manager/common/db/schema.py` (Defines tables: `images` (with `user_notes`), `tags`, `favorites`, etc.).
- **Active Database Resolver**: `py/image_manager/common/db/client.py` (Tracks the active database, generation, and per-database runtime directories such as trash and thumbnail cache).
- **Metadata Extraction**: `py/load_image_configs/core/metadata_helper.py` (Parses PNG info, Exif, and ComfyUI workflows).
- **Search Logic**: `py/image_manager/features/search/service.py` (Parses search queries and builds SQL).

## 4. Implementation Rules

### Error Handling
- **Domain exceptions**: All anticipated error conditions in the service/common
  layer MUST raise a subclass of `MeldError` (`py/image_manager/common/exceptions.py`).
  Available: `NotFoundError` (404), `ValidationError` (400), `ConflictError` (409),
  `DatabaseError` (500). Do NOT raise Python builtins (`ValueError`,
  `FileNotFoundError`, etc.) for domain errors.
- **Router catch pattern**: Catch `MeldError` with `status=e.status_code`.
  Do NOT catch bare `Exception` in routers — let programming errors propagate to
  aiohttp's default handler.
- **`from_dict()` parsing**: Keep `except (TypeError, ValueError)` → 400 for
  request DTO construction (separate from domain exceptions).
- **Binary endpoints** (view_thumb, view_trash, view_custom): Return plain
  `web.Response` without ApiResponse wrapper; catch `Exception` with plain
  `web.Response(status=5xx)`.
- **Background threads**: Catch `Exception` with `logging.exception()` to prevent
  silent thread death.

### Dependency Rules
- **Backend**:
  - `image_manager` is the central dependency. Other nodes (like `load_image_configs`) should NOT depend on `image_manager` if possible to avoid circular imports, but `image_manager` relies on `load_image_configs` for metadata parsing.
  - **NO** absolute imports of project root. Use relative imports (e.g., `from ..utils import X`) within packages.
  - Active DB metadata must be stored outside the SQLite `settings` table. Use `py/data/active_database.json` plus `common/db/client.py` as the source of truth.
  - Runtime side effects that must be isolated per database (trash, thumbnail cache) belong under `py/data/runtime/<database_name>/`.
  - **Database connections** must use the `db_connection()` context manager (`common/db/client.py`). Do NOT call `sqlite3.connect()` or raw connection functions directly. The context manager ensures connections are always closed, even on exceptions.

- **Frontend**:
  - Use `api.fetchApi` for all network requests. **DO NOT** use native `fetch` directly for backend communication (to handle ComfyUI auth/routing).
  - **Strict Typing**: No `any`. Define interfaces in `src/types.ts`.

### Frontend Layering Rules (z-index)
- Use centralized z-index tokens defined in `ui/src/styles/Gallery.css` (`:root`, keys prefixed with `--meld-z-`).
- Do not introduce new magic-number z-index values for global layers (viewer, modal, toast, dropdown, overlays, light table).
- Add or update a `--meld-z-*` token first, then consume the token from feature CSS.
- Keep local, component-internal stacking values minimal (e.g., `1/2/3`) only when they do not represent global UI layers.
- For React components using inline `style`, avoid inline `zIndex`; use CSS classes that reference `--meld-z-*` tokens.

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
- **Free Text**: Partial match across positive prompts, tags, model names, and user notes.
- **Prefixes**:
  - `tag:name`: Exact or partial tag match.
  - `note:text`: Match user notes.
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

## 5. Documentation

### Documentation Layout
All documentation lives under `docs/` and is maintained in two languages:
- `docs/en/`: English documentation.
- `docs/ja/`: Japanese documentation.

Within each language directory:
- `ImageManager.md`: End-user documentation for the Meld Image Manager / Gallery (web extension UI + workflows).
- `nodes/*.md`: Per-node documentation (one file per node, shared structure across languages).

### Localization Rules
- Keep English and Japanese documentation **feature-equivalent** (same sections, same semantics).
- Use the directory convention (`docs/en/`, `docs/ja/`) for localized docs.
- Source code must remain English-only; localization is handled in documentation files only.

### When Documentation Must Be Updated
- **Custom node behavior changes / new node added**:
  - Update the corresponding files in both `docs/en/nodes/` and `docs/ja/nodes/`.
- **Web extension feature changes (Image Manager / Gallery / Viewer)**:
  - Update both `docs/en/ImageManager.md` and `docs/ja/ImageManager.md`.

### Adding a New Document
- Add the English document under `docs/en/...` and the Japanese counterpart under `docs/ja/...`.
- Keep filenames consistent between languages (e.g., `docs/en/nodes/MeldFoo.md` and `docs/ja/nodes/MeldFoo.md`).
