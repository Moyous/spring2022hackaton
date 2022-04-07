import { TAction } from "store/TAction";

export const TOKEN_SET = "token/set";

export const setToken: TAction<typeof TOKEN_SET, string> = (token: string) => ({
  type: TOKEN_SET,
  data: token,
});
