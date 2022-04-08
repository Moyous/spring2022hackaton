import { TLentaStore } from "../TLentaStore";

export const actionSetOwnProfile = (
  state: TLentaStore,
  id: number
): TLentaStore => ({
  ...state,
  ownProfileId: id,
});
