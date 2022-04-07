import { FC } from "react";
import { AdaptivityProvider, AppRoot } from "@vkontakte/vkui";

import { App } from "../App";

export const Adaptive: FC = () => (
  <AdaptivityProvider>
    <AppRoot mode="full" noLegacyClasses>
      <App />
    </AppRoot>
  </AdaptivityProvider>
);
