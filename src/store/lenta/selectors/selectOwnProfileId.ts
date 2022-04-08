import { TStore } from "../../TStore";

export const selectOwnProfileId = (state: TStore): number | null =>
  state.lenta.ownProfileId;
