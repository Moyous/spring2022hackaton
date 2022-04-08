import { TLentaStore } from "../TLentaStore";

export const actionFireGetProfile = (state: TLentaStore): TLentaStore => ({
  ...state,
  isProfileLoading: true,
});
