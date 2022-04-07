import { FC, memo } from "react";
import { ButtonGroup, Div } from "@vkontakte/vkui";
import {
  ELentaType,
  menuItemsOrder,
} from "../../../../entities/MainMenuButton";
import { MainMenuButton } from "./components/MainMenuButton";
import "./MainMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveLenta } from "../../../../store/lenta/selectors/selectActiveLenta";
import { setActiveLenta } from "../../../../store/lenta/sets/setActiveLenta";

export const MainMenu: FC = memo(() => {
  const dispatch = useDispatch();
  const activeLenta = useSelector(selectActiveLenta);
  const onClick = (button: ELentaType) => dispatch(setActiveLenta(button));

  return (
    <Div className="MainMenu__box">
      <ButtonGroup stretched>
        {menuItemsOrder.map((button) => (
          <MainMenuButton
            key={button}
            button={button}
            isActive={button === activeLenta}
            onClick={() => onClick(button)}
          />
        ))}
      </ButtonGroup>
    </Div>
  );
});
