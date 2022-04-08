import { ChangeEvent, FC, ReactNode, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionSheet, ActionSheetItem, File, View } from "@vkontakte/vkui";

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

import "./App.css";
import { selectToken } from "./store/lenta/selectors/selectToken";
import { pushImage } from "./store/lenta/sets/pushImage";
import {
  Onboarding,
  Onboarding2,
  Onboarding3,
} from "./panels/Onboarding/Onboarding";
import { Initial } from "./panels/Initial/Initial";

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
  const accessToken = useSelector(selectToken);
  const loadFileTargetRef = useRef<HTMLButtonElement>(null);

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

  const uploadPhoto = async (files: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!files || !(files as FileList)[0]) {
      return;
    }

    const fileReader = new FileReader();

    // @ts-ignore
    const event = () => {
      if (fileReader.result && typeof fileReader.result === "string") {
        dispatch(pushImage(fileReader.result));
        onClose();
      }
    };

    fileReader.addEventListener("load", event);
    fileReader.readAsDataURL((files as FileList)[0]);

    // TODO resolve upload to server
    return;

    if (ownProfileId !== null && accessToken !== null) {
      const response = await bridge.send("VKWebAppCallAPIMethod", {
        method: "photos.getAlbums",
        params: {
          // @ts-ignore
          owner_id: ownProfileId,
          // @ts-ignore
          access_token: accessToken,
          v: "5.131",
        },
      });

      let distAlbum = response.response.items.find(
        // @ts-ignore
        ({ title }) => title === "__space__"
      );

      if (!distAlbum) {
        const distAlbumResponse = await bridge.send("VKWebAppCallAPIMethod", {
          method: "photos.createAlbum",
          params: {
            title: "__space__",
            description: "Альбом для загрузки фото из приложения SPACE",
            // @ts-ignore
            access_token: accessToken,
            v: "5.131",
          },
        });

        distAlbum = distAlbumResponse.response;
      }

      if (!distAlbum?.id) {
        // TODO throw error with snackbar
        return;
      }
      const uploadServer = await bridge.send("VKWebAppCallAPIMethod", {
        method: "photos.getUploadServer",
        params: {
          album_id: distAlbum.id,
          // @ts-ignore
          access_token: accessToken,
          v: "5.131",
        },
      });

      if (
        !uploadServer.response?.upload_url ||
        !uploadServer.response.album_id ||
        !uploadServer.response.user_id
      ) {
        // TODO throw error with snackbar
        return;
      }

      // const files = await promiseFileLoad;
      const files = new FileList();

      try {
        const formData = new FormData();
        formData.append("file1", files[0]);

        const rawResult = await fetch(uploadServer.response.upload_url, {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const parsedResult = await rawResult.json();

        if (!parsedResult.response.photos_list) {
          return;
        }

        const savePhotosResult = await bridge.send("VKWebAppCallAPIMethod", {
          method: "photos.save",
          params: {
            server: parsedResult.response.server,
            photos_list: parsedResult.response.photos_list,
            aid: parsedResult.response.aid,
            hash: parsedResult.response.hash,
            // @ts-ignore
            access_token: accessToken,
            v: "5.131",
          },
        });

        console.log(savePhotosResult);
      } catch (e) {
        return;
      }
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
          Поделиться
        </ActionSheetItem>
        <ActionSheetItem
          before={<Icon28AddOutline />}
          className="App_loadFileBox"
          onClick={() => loadFileTargetRef.current?.click()}
        >
          <File
            className="App_loadFileInput"
            controlSize="l"
            mode="secondary"
            stretched
            getRootRef={loadFileTargetRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // @ts-ignore
              void uploadPhoto(e.currentTarget.files);
            }}
          />
          Загрузить
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
      <Onboarding id={PanelIds.Onboarding} />
      <Onboarding2 id={PanelIds.Onboarding2} />
      <Onboarding3 id={PanelIds.Onboarding3} />
      <Initial id={PanelIds.Initial} />
    </View>
  );
};
