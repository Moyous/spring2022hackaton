import { FC, useCallback, useEffect, useState } from "react";

import bridge, {
  AnyReceiveMethodName,
  AppearanceSchemeType,
  ReceiveDataMap,
  VKBridgeEvent,
  VKUpdateConfigData,
} from "@vkontakte/vk-bridge";

import { ConfigProvider as VKUIConfigProvider, Scheme } from "@vkontakte/vkui";
import { Adaptive } from "./Adaptive";
import { useDispatch } from "react-redux";
import { setToken } from "../store/lenta/sets/setToken";
import { setActiveProfile } from "../store/lenta/sets/setActiveProfile";
import { setOwnProfile } from "../store/lenta/sets/setOwnProfile";
import { setActivePanel } from "../store/router/sets/setActivePanel";
import { PanelIds } from "./routerEnums";
import { setIsOnboardingPassed } from "../store/lenta/sets/setIsOnboardingPassed";

export const ConfigProvider: FC = () => {
  const dispatch = useDispatch();
  const [scheme, setScheme] = useState<AppearanceSchemeType>(
    Scheme.BRIGHT_LIGHT
  );

  const bridgeListener = useCallback(
    ({ detail: { type, data } }: VKBridgeEvent<AnyReceiveMethodName>) => {
      if (type === "VKWebAppUpdateConfig") {
        setScheme((data as VKUpdateConfigData).scheme);
      }

      if (type === "VKWebAppStorageGetResult") {
        // @ts-ignore
        const isPassed = data.keys.find(
          // @ts-ignore
          ({ key }) => key === "isOnboardingPassed"
        );

        if (isPassed) {
          dispatch(setIsOnboardingPassed(isPassed.value === "2"));
          if (isPassed.value === "2") {
            setTimeout(() => dispatch(setActivePanel(PanelIds.Profile)), 2000);
          } else {
            setTimeout(
              () => dispatch(setActivePanel(PanelIds.Onboarding)),
              2000
            );
          }
        } else {
          void bridge.send("VKWebAppStorageSet", {
            key: "isOnboardingPassed",
            value: "0",
          });
          setTimeout(() => dispatch(setActivePanel(PanelIds.Onboarding)), 2000);
        }
      }

      if (type === "VKWebAppAccessTokenReceived") {
        dispatch(
          setToken(
            (data as ReceiveDataMap["VKWebAppGetAuthToken"]).access_token
          )
        );
      }

      if (type === "VKWebAppGetUserInfoResult") {
        dispatch(
          setOwnProfile((data as ReceiveDataMap["VKWebAppGetUserInfo"]).id)
        );

        if (window.location.hash) {
          let maybeProfile = window.location.hash
            .slice(1)
            .split("&")
            .map((entries) => entries.split("="))
            .find(([prop]) => prop === "profile");

          if (maybeProfile) {
            dispatch(setActiveProfile(+maybeProfile[1]));
            return;
          }
        }

        dispatch(
          setActiveProfile((data as ReceiveDataMap["VKWebAppGetUserInfo"]).id)
        );
      }
    },
    []
  );

  useEffect(() => {
    bridge.subscribe(bridgeListener);
    void bridge.send("VKWebAppInit");
    void bridge.send("VKWebAppStorageGet", {
      keys: ["isOnboardingPassed"],
    });

    return () => bridge.unsubscribe(bridgeListener);
  }, []);

  return (
    <VKUIConfigProvider scheme={scheme}>
      <Adaptive />
    </VKUIConfigProvider>
  );
};
