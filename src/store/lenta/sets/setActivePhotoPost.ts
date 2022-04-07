import { TAction } from "store/TAction";

export const ACTIVE_PHOTO_POST_SET = "activePhotoPost/set";

export const setActivePhotoPost: TAction<
  typeof ACTIVE_PHOTO_POST_SET,
  number
> = (id: number) => ({
  type: ACTIVE_PHOTO_POST_SET,
  data: id,
});
