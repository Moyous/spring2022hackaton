import { FC, useMemo } from "react";
import { ELentaType, menuItems } from "../../../../../entities/MainMenuButton";
import { Button } from "@vkontakte/vkui";

type TProps = {
  button: ELentaType;
  isActive: boolean;
  onClick: () => void;
};

export const MainMenuButton: FC<TProps> = ({ button, isActive, onClick }) => {
  const { title, Icon } = useMemo(() => menuItems[button], [button]);

  return (
    <Button
      className="MainMenu__button"
      hasHover={false}
      hasActive={false}
      before={<Icon />}
      size="m"
      mode={isActive ? "primary" : "outline"}
      stretched
      onClick={() => onClick()}
    >
      {isActive ? title : ""}
    </Button>
  );
};
