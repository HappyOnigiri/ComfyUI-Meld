import type React from "react";
import { useEffect, useState } from "react";
import type { GalleryAction, GalleryState } from "../../../../types";
import * as imagesApi from "../../../images/api/imagesApi";

interface UseViewerLineageLoaderParams {
	viewerMode: GalleryState["viewerMode"];
	viewerImageId: number | null;
	lineageLength: number;
	dispatch: React.Dispatch<GalleryAction>;
	isMountedRef: React.MutableRefObject<boolean>;
}

export const useViewerLineageLoader = ({
	viewerMode,
	viewerImageId,
	lineageLength,
	dispatch,
	isMountedRef,
}: UseViewerLineageLoaderParams) => {
	const [isLoadingLineage, setIsLoadingLineage] = useState(false);

	useEffect(() => {
		if (
			viewerMode === "lineage" &&
			viewerImageId !== null &&
			lineageLength === 0
		) {
			setIsLoadingLineage(true);
			imagesApi
				.fetchLineage(viewerImageId)
				.then((results) => {
					if (isMountedRef.current) {
						dispatch({ type: "SET_LINEAGE", payload: results });
					}
				})
				.catch((err) => {
					console.error("Failed to fetch lineage:", err);
				})
				.finally(() => {
					if (isMountedRef.current) {
						setIsLoadingLineage(false);
					}
				});
		}
	}, [dispatch, isMountedRef, lineageLength, viewerImageId, viewerMode]);

	return { isLoadingLineage };
};
