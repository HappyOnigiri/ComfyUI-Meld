import type React from "react";
import { useEffect, useRef, useState } from "react";
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
	const latestRequestIdRef = useRef(0);

	useEffect(() => {
		let cancelled = false;
		if (
			viewerMode === "lineage" &&
			viewerImageId !== null &&
			lineageLength === 0
		) {
			const requestId = ++latestRequestIdRef.current;
			setIsLoadingLineage(true);
			imagesApi
				.fetchLineage(viewerImageId)
				.then((results) => {
					if (
						!cancelled &&
						isMountedRef.current &&
						requestId === latestRequestIdRef.current
					) {
						dispatch({ type: "SET_LINEAGE", payload: results });
					}
				})
				.catch((err) => {
					console.error("Failed to fetch lineage:", err);
				})
				.finally(() => {
					if (
						!cancelled &&
						isMountedRef.current &&
						requestId === latestRequestIdRef.current
					) {
						setIsLoadingLineage(false);
					}
				});
		}
		return () => {
			cancelled = true;
		};
	}, [dispatch, isMountedRef, lineageLength, viewerImageId, viewerMode]);

	return { isLoadingLineage };
};
