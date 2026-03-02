import type { GalleryAction, GalleryState } from "../../types";

export type GallerySubReducer = (
	state: GalleryState,
	action: GalleryAction,
) => GalleryState;
