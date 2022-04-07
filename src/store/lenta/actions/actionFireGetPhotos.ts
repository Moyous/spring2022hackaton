import { TLentaStore } from "../TLentaStore";

export const actionFireGetPhotos = (state: TLentaStore): TLentaStore => ({
  ...state,
  isPhotosLoading: true,
});
