import { FC, memo, useEffect } from "react";
import { TPanel } from "../TPanel";
import {
  Button,
  Cell,
  List,
  Panel,
  Placeholder,
  Spacing,
  Title,
} from "@vkontakte/vkui";
import "./Onboarding.css";
import { useDispatch } from "react-redux";
import { setActivePanel } from "../../store/router/sets/setActivePanel";
import { PanelIds } from "../../init/routerEnums";
import {
  Icon28ArchiveOutline,
  Icon28CameraOutline,
  Icon28GestureOutline,
  Icon28ListLikeOutline,
  Icon28VideoCircleOutline,
} from "@vkontakte/icons";
import { ELentaType } from "../../entities/MainMenuButton";
import { setActiveLenta } from "../../store/lenta/sets/setActiveLenta";
import bridge from "@vkontakte/vk-bridge";
import { setIsOnboardingPassed } from "../../store/lenta/sets/setIsOnboardingPassed";

export const Onboarding: FC<TPanel> = memo(({ id }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setActivePanel(PanelIds.Onboarding2));
  };

  return (
    <Panel id={id}>
      <Placeholder className="Onboarding__placeholder" onClick={onClick}>
        <Title level="1">Давай сделаем твой профиль красивым?</Title>
        <img
          src="https://vk.com/sticker/1-66035-256"
          alt=""
          width={128}
          height={128}
        />
      </Placeholder>
    </Panel>
  );
});

export const Onboarding2: FC<TPanel> = memo(({ id }) => {
  const dispatch = useDispatch();
  const onClick = (passion: ELentaType) => {
    dispatch(setActiveLenta(passion));
    dispatch(setActivePanel(PanelIds.Onboarding3));
  };

  return (
    <Panel id={id}>
      <Placeholder className="Onboarding__placeholder">
        <Title level="1">
          Расскажи, что ты больше любишь постить? P.S. Всегда можно поменять
          потом
        </Title>
        <img
          src="https://vk.com/sticker/1-66037-256"
          alt=""
          width={128}
          height={128}
        />
        <Spacing separator size={16} />
        <List>
          <Cell
            expandable
            before={<Icon28CameraOutline />}
            onClick={() => onClick(ELentaType.PHOTO)}
          >
            Люблю делиться фото
          </Cell>
          <Cell
            expandable
            before={<Icon28GestureOutline />}
            onClick={() => onClick(ELentaType.CLIPS)}
          >
            Люблю клипчики
          </Cell>
          <Cell
            expandable
            before={<Icon28VideoCircleOutline />}
            onClick={() => onClick(ELentaType.VIDEOS)}
          >
            Снимаю видосы
          </Cell>
          <Cell
            expandable
            before={<Icon28ListLikeOutline />}
            onClick={() => onClick(ELentaType.TEXTS)}
          >
            Лонгриды - моё всё
          </Cell>
          <Cell
            expandable
            before={<Icon28ArchiveOutline />}
            onClick={() => onClick(ELentaType.LENTA)}
          >
            Я всё люблю - я просто посмотреть
          </Cell>
        </List>
      </Placeholder>
    </Panel>
  );
});

export const Onboarding3: FC<TPanel> = memo(({ id }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    void bridge.send("VKWebAppStorageSet", {
      key: "isOnboardingPassed",
      value: "1",
    });
    dispatch(setIsOnboardingPassed(true));
    dispatch(setActivePanel(PanelIds.Profile));
  };

  useEffect(() => {
    void bridge.send("VKWebAppGetAuthToken", {
      app_id: 8130038,
      scope: "photos,wall",
    });
    void bridge.send("VKWebAppGetUserInfo");
  }, []);

  return (
    <Panel id={id}>
      <Placeholder className="Onboarding__placeholder">
        <Title level="1">Готовлю твой профиль</Title>
        <img
          className="Onboarding__image"
          src="https://vk.com/sticker/1-66052-256"
          alt=""
          width={128}
          height={128}
        />
        <Button size="l" onClick={onClick}>
          Поехали!
        </Button>
      </Placeholder>
    </Panel>
  );
});
