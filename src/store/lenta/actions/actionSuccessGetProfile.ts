import { TLentaStore } from "../TLentaStore";
import { TProfile } from "../../../entities/Profile";

export const actionSuccessGetProfile = (
  state: TLentaStore,
  data: TProfile
): TLentaStore => ({
  ...state,
  isProfileLoading: false,
  activeProfile: data,
  isProfileLoaded: true,
});
