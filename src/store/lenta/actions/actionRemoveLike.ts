import { TLentaStore } from "../TLentaStore";

export const actionRemoveLike = (
  state: TLentaStore,
  id: number
): TLentaStore => ({
  ...state,
  photos: state.photos.map((photo) => {
    if (photo.id === id) {
      return {
        ...photo,
        isLiked: false,
        likesCount: photo.likesCount - 1,
      };
    }

    return photo;
  }),
});
