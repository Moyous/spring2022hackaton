import { PanelIds, ViewIds } from "init/routerEnums";

import { TRouterStore } from "./TRouterStore";

export const routerStore: TRouterStore = {
  activePanel: PanelIds.Initial,
  panelHistory: [PanelIds.Initial],
  activeView: ViewIds.BaseFlow,
  viewHistory: [ViewIds.BaseFlow],
  activeModal: null,
  modalHistory: [],
  routerParams: {},
};
