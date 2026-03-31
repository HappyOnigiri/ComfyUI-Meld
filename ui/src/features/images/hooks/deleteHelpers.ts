import type { ApiResult } from "../../../api";
import { useLightTableStore } from "../../light-table/store";
import * as imagesApi from "../api/imagesApi";

export const deleteImagesAndSyncLightTable = async (
	ids: number[],
	isPermanent: boolean,
): Promise<ApiResult<void>> => {
	const result = await imagesApi.deleteImages(ids, isPermanent);
	if (!result.ok) return result;
	useLightTableStore.getState().removeImages(ids);
	return { ok: true, data: undefined as undefined };
};
