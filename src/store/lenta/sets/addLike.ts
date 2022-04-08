import { TAction } from "store/TAction";

export const ADD_LIKE = "like/add";

export const addLike: TAction<typeof ADD_LIKE, number> = (photoId) => ({
  type: ADD_LIKE,
  data: photoId,
});
