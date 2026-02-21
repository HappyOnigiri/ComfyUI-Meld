from dataclasses import asdict, dataclass, field
from typing import Any, TypeVar

T = TypeVar("T", bound="BaseSchema")


@dataclass
class BaseSchema:
    def to_dict(self) -> dict[str, Any]:
        """Convert the dataclass instance to a dictionary, removing None values."""
        # asdict is built-in and handles nested dataclasses
        return asdict(self)

    @classmethod
    def from_dict(cls: type[T], data: dict[str, Any]) -> T:
        """Create a dataclass instance from a dictionary, ignoring extra keys."""
        if data is None:
            return None
        # Get field names from annotations
        valid_keys = cls.__annotations__.keys()
        filtered_data = {k: v for k, v in data.items() if k in valid_keys}
        return cls(**filtered_data)


# --- Database Records (Entities) ---


@dataclass
class ImageRecord(BaseSchema):
    id: int | None = None
    filename: str | None = None
    subfolder: str | None = None
    type: str = "output"
    created_at: float | None = None
    sha256: str | None = None
    phash: str | None = None
    width: int | None = None
    height: int | None = None
    parent_id: int | None = None
    positive_prompt: str | None = None
    negative_prompt: str | None = None
    workflow: str | None = None
    deleted_at: float | None = None
    user_notes: str | None = None


@dataclass
class TagRecord(BaseSchema):
    id: int
    name: str


@dataclass
class ModelRecord(BaseSchema):
    id: int
    name: str


@dataclass
class FavoriteRecord(BaseSchema):
    id: int
    name: str
    query: str
    created_at: float


@dataclass
class SettingRecord(BaseSchema):
    key: str
    value: Any


# --- API Response Wrappers ---


@dataclass
class ApiResponse(BaseSchema):
    success: bool
    data: Any | None = None
    error: str | None = None
    message: str | None = None
    count: int | None = None


# --- API Request DTOs ---


@dataclass
class UpdateImageTagsRequest(BaseSchema):
    imageId: int  # noqa: N815
    tags: list[str]


@dataclass
class UpdateImageNotesRequest(BaseSchema):
    imageId: int  # noqa: N815
    userNotes: str  # noqa: N815


@dataclass
class BulkUpdateImageTagsRequest(BaseSchema):
    imageIds: list[int]  # noqa: N815
    addTags: list[str] = field(default_factory=list)  # noqa: N815
    removeTags: list[str] = field(default_factory=list)  # noqa: N815


@dataclass
class CreateTagRequest(BaseSchema):
    name: str


@dataclass
class RenameTagRequest(BaseSchema):
    id: int
    name: str


@dataclass
class DeleteTagRequest(BaseSchema):
    id: int


@dataclass
class ScanRequest(BaseSchema):
    type: str = "output"
    subfolder: str = ""
    custom_path: str = ""
    recursive: bool = True
    auto_link_parent: bool = True
    link_strategy: str = "new_only"  # "none", "new_only", "all"
    tags: list[str] = field(default_factory=list)


@dataclass
class RegisterImageRequest(BaseSchema):
    filename: str
    subfolder: str = ""
    type: str = "output"


@dataclass
class SearchImagesRequest(BaseSchema):
    offset: int = 0
    limit: int = 100
    query: str = ""
    view: str = "default"


@dataclass
class RestoreImagesRequest(BaseSchema):
    ids: list[int]


@dataclass
class BulkDeleteRequest(BaseSchema):
    ids: list[int]
    permanent: bool = False
    delete_files: bool = False  # For backward compatibility


@dataclass
class DeleteImageRequest(BaseSchema):
    id: int | None = None
    filename: str | None = None
    permanent: bool = False


@dataclass
class LinkParentRequest(BaseSchema):
    childId: int  # noqa: N815
    parentId: int | None = None  # noqa: N815


@dataclass
class CreateFavoriteRequest(BaseSchema):
    name: str
    query: str


@dataclass
class UpdateFavoriteRequest(BaseSchema):
    id: int
    name: str
    query: str | None = None


@dataclass
class DeleteFavoriteRequest(BaseSchema):
    id: int


@dataclass
class UpdateSettingsRequest(BaseSchema):
    key: str
    value: Any


# --- Complex Response Objects ---


@dataclass
class ImageListItem(BaseSchema):
    id: int
    filename: str
    subfolder: str
    type: str
    created_at: float
    deleted_at: float | None = None
    phash: str | None = None
    sha256: str | None = None
    parent_id: int | None = None
    parent_filename: str | None = None
    parent_subfolder: str | None = None
    parent_type: str | None = None
    has_children: bool = False
    positive: str | None = None
    negative: str | None = None
    positive_prompt: str | None = None
    negative_prompt: str | None = None
    model_name: str | None = None
    workflow: str | None = None
    width: int = 0
    height: int = 0
    is_minimal: bool = False
    tags: list[str] = field(default_factory=list)
    user_notes: str | None = None
    exists: bool = False
    ancestors: list[dict[str, Any]] = field(default_factory=list)


@dataclass
class ImageListResponse(BaseSchema):
    images: list[ImageListItem]
    total: int
    offset: int
    limit: int


@dataclass
class LineageItem(BaseSchema):
    id: int
    filename: str
    subfolder: str
    type: str
    created_at: float
    parent_id: int | None = None
    phash: str | None = None
    parent_filename: str | None = None
    parent_subfolder: str | None = None
    parent_type: str | None = None
    positive: str = ""
    negative: str = ""
    positive_prompt: str | None = None
    negative_prompt: str | None = None
    model_name: str | None = None
    workflow: str | None = None
    width: int | None = None
    height: int | None = None
    user_notes: str | None = None
    tags: list[str] = field(default_factory=list)


@dataclass
class FolderPreview(BaseSchema):
    filename: str
    subfolder: str
    type: str


@dataclass
class FolderItem(BaseSchema):
    name: str
    count: int | None = None
    preview: FolderPreview | None = None


@dataclass
class ImageItem(BaseSchema):  # Simpler than ImageListItem
    filename: str
    subfolder: str
    type: str


@dataclass
class FoldersResponse(BaseSchema):
    folders: list[FolderItem]
    images: list[ImageItem]
    image_count: int


@dataclass
class FolderMetadata(BaseSchema):
    count: int
    preview: FolderPreview | None = None


@dataclass
class ParentSuggestion(BaseSchema):
    id: int
    filename: str
    subfolder: str
    type: str
    distance: int
    created_at: float
    is_source_match: bool


@dataclass
class ImageSnapshotResponse(BaseSchema):
    model_name: str
    positive: str
    negative: str
    seed: int
    steps: int
    cfg: float
    guidance: float
    clip_name1: str
    clip_name2: str
    clip_type: str
    clip_device: str
    sampler_name: str
    scheduler: str
    width: int
    height: int
    is_flux: bool


@dataclass
class ScanStatus(BaseSchema):
    is_running: bool  # noqa: N815
    should_cancel: bool  # noqa: N815
    new_count: int = 0
    updated_count: int = 0
    total_count: int = 0
