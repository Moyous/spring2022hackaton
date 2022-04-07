import { TStore } from "../../TStore";

export const selectToken = (state: TStore): string | null => state.lenta.token;
