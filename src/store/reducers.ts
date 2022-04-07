import { combineReducers } from "redux";
import { routerReducer } from "./router/routerReducer";
import { lentaReducer } from "./lenta/lentaReducer";

export const rootReducer = combineReducers({
  router: routerReducer,
  lenta: lentaReducer,
});
