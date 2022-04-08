import { TAction } from "store/TAction";

export const OWN_PROFILE_SET = "ownProfile/set";

export const setOwnProfile: TAction<typeof OWN_PROFILE_SET, number> = (
  data
) => ({
  type: OWN_PROFILE_SET,
  data,
});
