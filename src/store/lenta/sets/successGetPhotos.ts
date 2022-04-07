import { TAction } from "store/TAction";
import { TPhoto } from "../../../entities/PhotoPost";

export const SUCCESS_GET_PHOTOS = "getPhotos/success";

export const successGetPhotos: TAction<typeof SUCCESS_GET_PHOTOS, TPhoto[]> = (
  photos
) => ({
  type: SUCCESS_GET_PHOTOS,
  data: photos,
});
