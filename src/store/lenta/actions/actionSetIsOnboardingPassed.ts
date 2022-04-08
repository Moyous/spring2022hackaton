import { TLentaStore } from "../TLentaStore";

export const actionSetIsOnboardingPassed = (
  state: TLentaStore,
  isOnboardingPassed: boolean
): TLentaStore => ({
  ...state,
  isOnboardingPassed,
});
