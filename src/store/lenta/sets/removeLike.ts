import { TAction } from "store/TAction";

export const REMOVE_LIKE = "like/remove";

export const removeLike: TAction<typeof REMOVE_LIKE, number> = (photoId) => ({
  type: REMOVE_LIKE,
  data: photoId,
});
