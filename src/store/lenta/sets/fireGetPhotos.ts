import { TAction } from "store/TAction";

export const FIRE_GET_PHOTOS = "getPhotos/fire";

export const fireGetPhotos: TAction<typeof FIRE_GET_PHOTOS> = () => ({
  type: FIRE_GET_PHOTOS,
});
