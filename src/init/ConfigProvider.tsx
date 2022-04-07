import { FC, useEffect, useState, useCallback } from "react";

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

      if (type === "VKWebAppAccessTokenReceived") {
        dispatch(
          setToken(
            (data as ReceiveDataMap["VKWebAppGetAuthToken"]).access_token
          )
        );
      }
    },
    []
  );

  useEffect(() => {
    bridge.subscribe(bridgeListener);
    void bridge.send("VKWebAppInit");
    void bridge.send("VKWebAppGetAuthToken", { app_id: 8130038, scope: "" });

    return () => bridge.unsubscribe(bridgeListener);
  }, []);

  return (
    <VKUIConfigProvider scheme={scheme}>
      <Adaptive />
    </VKUIConfigProvider>
  );
};
