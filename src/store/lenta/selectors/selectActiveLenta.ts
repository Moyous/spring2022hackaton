import { TStore } from "../../TStore";
import { ELentaType } from "../../../entities/MainMenuButton";

export const selectActiveLenta = (state: TStore): ELentaType =>
  state.lenta.activeLentaType;
