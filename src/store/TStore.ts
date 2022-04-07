import { TRouterStore } from "./router/TRouterStore";
import { TLentaStore } from "./lenta/TLentaStore";

export type TStore = {
  router: TRouterStore;
  lenta: TLentaStore;
};
