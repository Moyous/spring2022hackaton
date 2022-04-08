import { TAction } from "store/TAction";

export const FIRE_GET_PROFILE = "getProfile/fire";

export const fireGetProfile: TAction<typeof FIRE_GET_PROFILE, number> = (
  data
) => ({
  type: FIRE_GET_PROFILE,
  data,
});
