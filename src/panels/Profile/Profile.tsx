import { TPanel } from "../TPanel";
import {
  Avatar,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderContent,
} from "@vkontakte/vkui";
import { FC, memo, useMemo } from "react";
import { ExpandedHead } from "./components/ExpandedHead/ExpandedHead";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { useSelector } from "react-redux";
import { selectActiveLenta } from "../../store/lenta/selectors/selectActiveLenta";
import { menuItems } from "../../entities/MainMenuButton";
import { Icon28Menu } from "@vkontakte/icons";
import { selectProfileState } from "../../store/lenta/selectors/selectProfileState";

export const Profile: FC<TPanel> = memo(({ id }) => {
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

  const onOpenMenu = () => {
    console.log("open");
  };

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={onOpenMenu}>
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
      <ExpandedHead />
      <MainMenu />
      <Lenta />
    </Panel>
  );
});
