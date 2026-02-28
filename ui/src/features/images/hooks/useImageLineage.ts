import { useCallback } from "react";
import type { MeldImage, Settings } from "../../../types";
import { getThumbnailViewUrl } from "../../../utils/url";

/**
 * Shared Image Lineage Hook
 *
 * Centralizes the logic for calculating and fetching image relationships (parents/ancestors).
 */
export const useImageLineage = (images: MeldImage[], settings: Settings) => {
	const getParentChain = useCallback(
		(img: MeldImage): { id: number | null; imgSrc: string | null }[] => {
			const maxDepth = settings["gallery.lineage_max_depth"];
			if (maxDepth === 0) return [];

			if (img.ancestors && img.ancestors.length > 0) {
				return img.ancestors.slice(0, maxDepth).map((a) => ({
					id: a.id,
					imgSrc: getThumbnailViewUrl(a, 56),
				}));
			}

			const pId = img.parent_id;
			if (!pId || !img.parent_filename) return [];

			const parentInState = images.find((p) => p.id === pId);

			let imgSrc: string | null = null;
			if (parentInState) {
				imgSrc = getThumbnailViewUrl(parentInState, 56);
			} else {
				imgSrc = getThumbnailViewUrl(
					{
						filename: img.parent_filename,
						subfolder: img.parent_subfolder || "",
						type: img.parent_type,
					},
					56,
				);
			}

			if (!imgSrc) return [];

			const currentParent = {
				id: pId || null,
				imgSrc,
			};

			if (parentInState && maxDepth > 1) {
				const rest = getParentChain(parentInState);
				return [currentParent, ...rest].slice(0, maxDepth);
			}

			return [currentParent];
		},
		[settings, images],
	);

	return { getParentChain };
};
