import { TStore } from "../../TStore";

export const selectProfileState = (state: TStore) => ({
  isLoading: state.lenta.isProfileLoading,
  id: state.lenta.profileId,
  data: state.lenta.activeProfile,
  isLoaded: state.lenta.isProfileLoaded,
  error: state.lenta.error,
});
