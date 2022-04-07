import { TAction } from "store/TAction";

export const FAILURE_GET_PHOTOS = "getPhotos/failure";

export const failureGetPhotos: TAction<typeof FAILURE_GET_PHOTOS, string> = (
  error
) => ({
  type: FAILURE_GET_PHOTOS,
  data: error,
});
