import { TStore } from "../../TStore";

export const selectIsOnboardingPassed = (state: TStore): boolean =>
  state.lenta.isOnboardingPassed;
