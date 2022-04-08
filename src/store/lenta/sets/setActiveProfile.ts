import { TAction } from "store/TAction";

export const ACTIVE_PROFILE_SET = "activeProfile/set";

export const setActiveProfile: TAction<typeof ACTIVE_PROFILE_SET, number> = (
  data
) => ({
  type: ACTIVE_PROFILE_SET,
  data,
});
