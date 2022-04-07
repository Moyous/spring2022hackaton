import { TLentaStore } from "../TLentaStore";

export const actionFailureGetPhotos = (
  state: TLentaStore,
  error: string
): TLentaStore => ({
  ...state,
  isPhotosLoading: false,
  error,
});
