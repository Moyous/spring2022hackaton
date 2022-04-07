import { TPanel } from "../TPanel";
import { Panel, PanelHeader } from "@vkontakte/vkui";
import { FC, memo, useMemo } from "react";
import { ExpandedHead } from "./components/ExpandedHead/ExpandedHead";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { useSelector } from "react-redux";
import { selectActiveLenta } from "../../store/lenta/selectors/selectActiveLenta";
import { menuItems } from "../../entities/MainMenuButton";

export const Profile: FC<TPanel> = memo(({ id }) => {
  const activeLenta = useSelector(selectActiveLenta);
  const { Lenta } = useMemo(() => menuItems[activeLenta], [activeLenta]);

  return (
    <Panel id={id}>
      <PanelHeader fixed={false}>Профиль 2.0</PanelHeader>
      <ExpandedHead />
      <MainMenu />
      <Lenta />
    </Panel>
  );
});
