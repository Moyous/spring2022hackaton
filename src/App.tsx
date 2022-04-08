import { FC, ReactNode, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionSheet, ActionSheetItem, View } from "@vkontakte/vkui";

import { selectActivePanel } from "store/router/selectors/selectActivePanel";
import { selectPanelHistory } from "store/router/selectors/selectPanelHistory";
import { selectActiveModal } from "store/router/selectors/selectActiveModal";

import router from "init/router";
import { PanelIds } from "init/routerEnums";

import { RootModal } from "./modals/RootModal";
import { Profile } from "./panels/Profile/Profile";
import {
  Icon28AddOutline,
  Icon28HomeOutline,
  Icon28ShareOutline,
} from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";
import { selectActiveProfileId } from "./store/lenta/selectors/selectActiveProfileId";
import { selectOwnProfileId } from "./store/lenta/selectors/selectOwnProfileId";
import { setActiveProfile } from "./store/lenta/sets/setActiveProfile";

export const App: FC = () => {
  const dispatch = useDispatch();
  const activePanel = useSelector(selectActivePanel);
  const activeModal = useSelector(selectActiveModal);
  const panelsHistory = useSelector(selectPanelHistory);
  const [popout, setPopout] = useState<ReactNode>(null);
  const onClose = () => setPopout(null);
  const menuTargetRef = useRef<HTMLButtonElement>(null);
  const profileId = useSelector(selectActiveProfileId);
  const ownProfileId = useSelector(selectOwnProfileId);
  const shareProfile = () => {
    void bridge.send("VKWebAppShare", {
      link: `vk.com/app8130038#profile=${profileId}`,
    });
  };
  const backToOwnProfile = () => {
    if (ownProfileId) {
      dispatch(setActiveProfile(ownProfileId));
    }
  };

  const openMenu = () =>
    setPopout(
      <ActionSheet
        onClose={onClose}
        iosCloseItem={
          <ActionSheetItem autoclose mode="cancel">
            Отменить
          </ActionSheetItem>
        }
        toggleRef={menuTargetRef}
      >
        {ownProfileId && ownProfileId !== profileId && (
          <ActionSheetItem
            autoclose
            before={<Icon28HomeOutline />}
            onClick={backToOwnProfile}
          >
            В свой профиль
          </ActionSheetItem>
        )}
        <ActionSheetItem
          autoclose
          before={<Icon28ShareOutline />}
          onClick={shareProfile}
        >
          Поделиться профилем
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28AddOutline />}>
          Загрузить фото
        </ActionSheetItem>
      </ActionSheet>
    );

  const onSwipeBack = () => {
    if (activeModal) {
      return;
    }

    router.closePanel();
  };

  return (
    <View
      onSwipeBack={onSwipeBack}
      history={panelsHistory}
      modal={<RootModal />}
      activePanel={activePanel}
      popout={popout}
    >
      <Profile
        id={PanelIds.Profile}
        openMenu={openMenu}
        menuTargetRef={menuTargetRef}
      />
    </View>
  );
};
