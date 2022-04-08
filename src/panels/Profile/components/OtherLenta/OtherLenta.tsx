// @ts-nocheck
import { FC, memo } from "react";
import { Div, Placeholder, Title, Subhead } from "@vkontakte/vkui";
import "./OtherLenta.css";

export const OtherLenta: FC = memo(() => {
  return (
    <Placeholder className="OtherLenta__placeholder">
      <Div className="OtherLenta__box">
        <Title className="OtherLenta__title" level="1">
          Ой, тут пока пусто
        </Title>
        <Subhead className="OtherLenta__subhead">
          Мы еще работаем над этим разделом, пока можно грузить фоточки!
        </Subhead>
        <img
          className="OtherLenta__sticker"
          src="https://vk.com/sticker/1-66058-256"
          alt=""
        />
      </Div>
    </Placeholder>
  );
});
