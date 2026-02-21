import { useLightTableStore } from "../../light-table/store";
import * as imagesApi from "../api/imagesApi";

export const deleteImagesAndSyncLightTable = async (
	ids: number[],
	isPermanent: boolean,
) => {
	await imagesApi.deleteImages(ids, isPermanent);
	useLightTableStore.getState().removeImages(ids);
};
