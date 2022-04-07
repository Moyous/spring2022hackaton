import { TLentaStore } from "../TLentaStore";

export const actionSetToken = (
  state: TLentaStore,
  token: string
): TLentaStore => ({
  ...state,
  token,
});
