import { TLentaStore } from "../TLentaStore";
import { TPhoto } from "../../../entities/PhotoPost";

export const actionSuccessGetPhotos = (
  state: TLentaStore,
  photos: TPhoto[]
): TLentaStore => ({
  ...state,
  isPhotosLoading: false,
  isPhotosLoaded: true,
  photos,
});
