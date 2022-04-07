import { TLentaStore } from "../TLentaStore";

export const actionSetActivePhotoPost = (
  state: TLentaStore,
  activePhotoId: number
): TLentaStore => ({
  ...state,
  activePhotoId,
});
