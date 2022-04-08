import { FC } from "react";
import { AdaptivityProvider, AppRoot } from "@vkontakte/vkui";

import { App } from "../App";
import { PhotosLoader } from "../loaders/PhotosLoader";
import { ProfileLoader } from "../loaders/ProfileLoader";

export const Adaptive: FC = () => (
  <AdaptivityProvider>
    <AppRoot mode="full" noLegacyClasses>
      <App />
      <PhotosLoader />
      <ProfileLoader />
    </AppRoot>
  </AdaptivityProvider>
);
