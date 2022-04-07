import { TAction } from "store/TAction";
import { ELentaType } from "../../../entities/MainMenuButton";

export const ACTIVE_LENTA_SET = "activeLenta/set";

export const setActiveLenta: TAction<typeof ACTIVE_LENTA_SET, ELentaType> = (
  lentaType: ELentaType
) => ({
  type: ACTIVE_LENTA_SET,
  data: lentaType,
});
