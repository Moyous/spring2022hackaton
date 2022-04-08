import { TPanel } from "../TPanel";
import {
  Avatar,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderContent,
} from "@vkontakte/vkui";
import { FC, memo, RefObject, useMemo } from "react";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { useSelector } from "react-redux";
import { selectActiveLenta } from "../../store/lenta/selectors/selectActiveLenta";
import { menuItems } from "../../entities/MainMenuButton";
import { Icon28Menu } from "@vkontakte/icons";
import { selectProfileState } from "../../store/lenta/selectors/selectProfileState";

type TProps = TPanel & {
  openMenu: () => void;
  menuTargetRef: RefObject<HTMLButtonElement>;
};

export const Profile: FC<TProps> = memo(({ id, menuTargetRef, openMenu }) => {
  const { data } = useSelector(selectProfileState);

  const activeLenta = useSelector(selectActiveLenta);
  const { Lenta } = useMemo(() => menuItems[activeLenta], [activeLenta]);
  const badge = useMemo((): "online-mobile" | "online" | undefined => {
    if (data?.isFromMobile) {
      return "online-mobile";
    }

    if (data?.isOnline) {
      return "online";
    }

    return;
  }, [data]);

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton
            onClick={openMenu}
            getRootRef={menuTargetRef}
            aria-label="Меню"
          >
            <Icon28Menu />
          </PanelHeaderButton>
        }
      >
        <PanelHeaderContent
          status={data?.status}
          before={<Avatar size={36} src={data?.avatarSrcLow} badge={badge} />}
        >
          {data?.name}
        </PanelHeaderContent>
      </PanelHeader>
      <MainMenu />
      <Lenta />
    </Panel>
  );
});
