import { TLentaStore } from "../TLentaStore";

export const actionAddLike = (state: TLentaStore, id: number): TLentaStore => ({
  ...state,
  photos: state.photos.map((photo) => {
    if (photo.id === id) {
      return {
        ...photo,
        isLiked: true,
        likesCount: Number(photo.likesCount) + 1,
      };
    }

    return photo;
  }),
});
