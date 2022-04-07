import { lentaStore } from "./lentaStore";
import { TLentaStore } from "./TLentaStore";
import { TLentaActions } from "./TLentaActions";
import { actionSetActiveLenta } from "./actions/actionSetActiveLenta";
import { actionSetToken } from "./actions/actionSetToken";
import { actionFireGetPhotos } from "./actions/actionFireGetPhotos";
import { actionSuccessGetPhotos } from "./actions/actionSuccessGetPhotos";
import { actionFailureGetPhotos } from "./actions/actionFailureGetPhotos";

export const lentaReducer = (
  state = lentaStore,
  action: TLentaActions
): TLentaStore => {
  switch (action.type) {
    case "activeLenta/set":
      return actionSetActiveLenta(state, action.data);
    case "token/set":
      return actionSetToken(state, action.data);
    case "getPhotos/fire":
      return actionFireGetPhotos(state);
    case "getPhotos/success":
      return actionSuccessGetPhotos(state, action.data);
    case "getPhotos/failure":
      return actionFailureGetPhotos(state, action.data);
    default:
      return state;
  }
};
