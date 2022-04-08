import { TAction } from "store/TAction";

export const SET_IS_ONBOARDING_PASSED = "isOnboardingPassed/set";

export const setIsOnboardingPassed: TAction<
  typeof SET_IS_ONBOARDING_PASSED,
  boolean
> = (data) => ({
  type: SET_IS_ONBOARDING_PASSED,
  data,
});
