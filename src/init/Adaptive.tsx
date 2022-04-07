import { FC } from "react";
import { AdaptivityProvider, AppRoot } from "@vkontakte/vkui";

import { App } from "../App";
import { PhotosLoader } from "../loaders/PhotosLoader";

export const Adaptive: FC = () => (
  <AdaptivityProvider>
    <AppRoot mode="full" noLegacyClasses>
      <App />
      <PhotosLoader />
    </AppRoot>
  </AdaptivityProvider>
);
