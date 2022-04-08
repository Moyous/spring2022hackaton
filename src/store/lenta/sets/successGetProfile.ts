import { TAction } from "store/TAction";
import { TProfile } from "../../../entities/Profile";

export const SUCCESS_GET_PROFILE = "getProfile/success";

export const successGetProfile: TAction<
  typeof SUCCESS_GET_PROFILE,
  TProfile
> = (data) => ({
  type: SUCCESS_GET_PROFILE,
  data,
});
