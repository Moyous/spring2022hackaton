import { TLentaStore } from "../TLentaStore";
import { ELentaType } from "../../../entities/MainMenuButton";

export const actionSetActiveLenta = (
  state: TLentaStore,
  activeLentaType: ELentaType
): TLentaStore => ({
  ...state,
  activeLentaType,
});
