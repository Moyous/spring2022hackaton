import { TLentaStore } from "../TLentaStore";

export const actionSetActiveProfile = (
  state: TLentaStore,
  id: number
): TLentaStore => ({
  ...state,
  profileId: id,
  isProfileLoaded: false,
});
