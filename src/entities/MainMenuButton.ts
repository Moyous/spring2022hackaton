import {
  Icon20CameraOutline,
  Icon20GestureOutline,
  Icon20ListPenOutline,
  Icon20TrashSmileOutline,
  Icon20VideoCircleOutline,
} from "@vkontakte/icons";
import { FC } from "react";
import { PhotoLenta } from "../panels/Profile/components/PhotoLenta/PhotoLenta";
import { OtherLenta } from "../panels/Profile/components/OtherLenta/OtherLenta";

type TMenuItem = {
  title: string;
  Icon: FC;
  Lenta: FC;
};

export enum ELentaType {
  PHOTO = "photo",
  CLIPS = "clips",
  VIDEOS = "videos",
  TEXTS = "texts",
  LENTA = "lenta",
}

export const menuItemsOrder: ELentaType[] = [
  ELentaType.PHOTO,
  ELentaType.VIDEOS,
  ELentaType.CLIPS,
  ELentaType.TEXTS,
  ELentaType.LENTA,
];

export const menuItems: Record<ELentaType, TMenuItem> = {
  [ELentaType.PHOTO]: {
    title: "Фоты",
    Icon: Icon20CameraOutline,
    Lenta: PhotoLenta,
  },
  [ELentaType.CLIPS]: {
    title: "Клипы",
    Icon: Icon20GestureOutline,
    Lenta: OtherLenta,
  },
  [ELentaType.VIDEOS]: {
    title: "Видео",
    Icon: Icon20VideoCircleOutline,
    Lenta: OtherLenta,
  },
  [ELentaType.TEXTS]: {
    title: "ВКиты",
    Icon: Icon20ListPenOutline,
    Lenta: OtherLenta,
  },
  [ELentaType.LENTA]: {
    title: "Всё",
    Icon: Icon20TrashSmileOutline,
    Lenta: OtherLenta,
  },
};
