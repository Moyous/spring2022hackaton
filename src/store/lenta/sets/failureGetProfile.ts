import { TAction } from "store/TAction";

export const FAILURE_GET_PROFILE = "getProfile/failure";

export const failureGetProfile: TAction<typeof FAILURE_GET_PROFILE, string> = (
  error
) => ({
  type: FAILURE_GET_PROFILE,
  data: error,
});
