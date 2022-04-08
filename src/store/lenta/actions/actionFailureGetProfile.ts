import { TLentaStore } from "../TLentaStore";

export const actionFailureGetProfile = (
  state: TLentaStore,
  error: string
): TLentaStore => ({
  ...state,
  isProfileLoading: false,
  error,
});
