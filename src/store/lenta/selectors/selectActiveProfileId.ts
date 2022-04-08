import { TStore } from "../../TStore";

export const selectActiveProfileId = (state: TStore): number | null =>
  state.lenta.profileId;
