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

### Backend (`meld/`)
| Directory | Responsibility |
|-----------|----------------|
| `image_manager/` | **Core System**. Handles database operations, REST API, and image management logic. |
| `image_manager/api.py` | **API Entry Point**. Integrates feature-specific routers and registers them with ComfyUI. |
| `image_manager/common/` | **Shared Backend Logic**. Database connection, constants, and common schemas. |
| `image_manager/features/` | **Feature Modules**. Modularized logic for images, tags, search, settings, importer, and workflows. |
| `image_manager/features/images/routers/` | **Image Router Package**. Splits the images API surface into four sub-modules: `crud.py` (9 CRUD endpoints), `lineage.py` (3 lineage endpoints), `serving.py` (4 thumbnail/trash/custom endpoints), `export.py` (zip and raw-download endpoints). `__init__.py` aggregates all route lists; `router.py` is a thin shim re-exporting `routes`. |
| `image_manager/features/search/` | **Search**. `service.py` exposes `SearchService`; delegates to `query_parser.py` (tokenises query strings) and `sql_builder.py` (builds SQL WHERE/ORDER BY clauses). |
| `image_manager/features/importer/` | **Importer**. `service.py` owns scan state management and re-exports public symbols. `parent_resolver.py` contains `infer_parent_id`; `scan_executor.py` contains `start_scan_thread` and recursive helpers. |
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
| `src/features/mask-editor/` | **Mask Editor**. Drawing and editing interface for image masks (img2img). `components/MaskEditorModal.tsx` handles image resolution, mask history, and upload/action logic. `hooks/useMaskCanvas.ts` encapsulates all canvas drawing, zoom/pan state, and mouse/keyboard event handling. |
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
- **API Routes**: Defined in `meld/image_manager/features/*/router.py` (or `routers/*.py` for the images package) and integrated into `meld/image_manager/api.py`.

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
- **Database Schema**: `meld/image_manager/common/db/schema.py` (Single source of truth for DDL. `create_schema(cursor)` creates tables and indexes idempotently; `init_db()` delegates to `migrate()` in `migrations.py`).
- **Migration Runner**: `meld/image_manager/common/db/migrations.py` (`migrate(cursor)` applies versioned migrations tracked in the `schema_version` table; `LATEST_VERSION` is the current schema version; add new entries to `_MIGRATIONS` to extend).
- **Active Database Resolver**: `meld/image_manager/common/db/client.py` (Tracks the active database, generation, and per-database runtime directories such as trash and thumbnail cache).
- **Metadata Extraction**: `meld/load_image_configs/core/metadata_helper.py` (Parses PNG info, Exif, and ComfyUI workflows).
- **Search Logic**: `meld/image_manager/features/search/service.py` (`SearchService` class; delegates to `query_parser.py` for tokenising query strings and `sql_builder.py` for building SQL WHERE/ORDER BY clauses).
- **Image API Routes**: `meld/image_manager/features/images/routers/` package (`crud.py`, `lineage.py`, `serving.py`, `export.py`). `router.py` is a thin shim re-exporting the combined route list.
- **Importer State**: `meld/image_manager/features/importer/service.py` (scan state, `perform_cleanup`, re-exports). `parent_resolver.py` (`infer_parent_id`), `scan_executor.py` (`start_scan_thread`, recursive helpers).
- **Mask Canvas Hook**: `ui/src/features/mask-editor/hooks/useMaskCanvas.ts` (all canvas drawing, zoom/pan, mouse/keyboard logic extracted from `MaskEditorModal`).

## 4. Implementation Rules

### Error Handling
- **Domain exceptions**: All anticipated error conditions in the service/common
  layer MUST raise a subclass of `MeldError` (`meld/image_manager/common/exceptions.py`).
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
  - Active DB metadata must be stored outside the SQLite `settings` table. Use `meld/data/active_database.json` plus `common/db/client.py` as the source of truth.
  - Runtime side effects that must be isolated per database (trash, thumbnail cache) belong under `meld/data/runtime/<database_name>/`.
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
Meld supports a rich query syntax in the search bar. The available prefixes are managed in `meld/image_manager/common/constants.py` and fetched dynamically by the frontend:
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

### Change Scenario Map

Use this map to identify which files to read and modify for each common change type.

#### A. Adding a Search Prefix
1. `meld/image_manager/common/constants.py` — add `SEARCH_PREFIX_X` constant; register in `SEARCH_PREFIX_MAP`, `SEARCH_DATE_PREFIXES`, `SEARCH_BOOLEAN_PREFIXES`, and `ALL_SEARCH_PREFIXES`.
2. `meld/image_manager/features/search/query_parser.py` — add token classification logic for the new prefix.
3. `meld/image_manager/features/search/sql_builder.py` — add SQL generation logic for the new prefix.
4. `meld/image_manager/features/search/service.py` — update `SearchService` if the public API surface changes.
5. `tests/test_search_service.py` — add tests for the new prefix.
6. `architecture.md` — update the "Search Query Syntax" list above.

#### B. Adding a New API Endpoint
1. `meld/image_manager/features/X/router.py` — define handler on `routes = web.RouteTableDef()`.
2. `meld/image_manager/common/schemas.py` — add request/response DTOs.
3. `meld/image_manager/api.py` — import and register in `_register_routes()` (new feature modules only).
4. `ui/src/features/X/api/XApi.ts` — add typed wrapper using `api.fetchApi`.
5. `tests/test_X_*.py` — add tests.
6. `architecture.md` — update if a new module or route group is introduced.

#### C. Adding a New Feature Module
All items from scenario B, plus:
1. `meld/image_manager/features/X/` — create `__init__.py`, `router.py`, `service.py`, and optionally `repository.py`.
2. `ui/src/features/X/` — create frontend feature directory.
3. `ui/src/types.ts` — add TypeScript type definitions.
4. `architecture.md` — update Section 2 module table and Section 3 data flow.

#### D. Modifying Database Schema
1. `meld/image_manager/common/db/schema.py` — update `CREATE TABLE IF NOT EXISTS` DDL to reflect the final target schema.
2. `meld/image_manager/common/db/migrations.py` — add a new `_migrate_vN(cursor)` function with the `ALTER TABLE` / data-migration logic, register it in `_MIGRATIONS`, and increment `LATEST_VERSION`.
3. `meld/image_manager/common/schemas.py` — update the record dataclass.
4. `meld/image_manager/features/X/service.py` or `repository.py` — update queries.
5. `ui/src/types.ts` — update TypeScript interfaces if the field is exposed to the frontend.
6. `tests/test_migrations.py` — add a test for the new migration.
7. Update related feature tests.

#### E. Adding a New ComfyUI Custom Node
1. `meld/X/nodes.py` — define a class with `INPUT_TYPES`, `RETURN_TYPES`, `FUNCTION`, and `CATEGORY`.
2. `__init__.py` (root) — add to `NODE_CLASS_MAPPINGS` and `NODE_DISPLAY_NAME_MAPPINGS`.
3. `docs/en/nodes/MeldX.md` / `docs/ja/nodes/MeldX.md` — add bilingual documentation.
4. `architecture.md` — update the backend module table in Section 2.

#### F. Adding a Frontend UI Feature
1. `ui/src/features/X/` — add components, hooks, and API client.
2. `ui/src/store/galleryReducer.ts` — add action types and reducer cases (if state changes).
3. `ui/src/store/GalleryContext.tsx` — expose via context (if state changes).
4. `ui/src/types.ts` — add type definitions.
5. `ui/src/styles/Gallery.css` — add `--meld-z-*` tokens for new UI layers.

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
