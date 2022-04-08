import { lentaStore } from "./lentaStore";
import { TLentaStore } from "./TLentaStore";
import { TLentaActions } from "./TLentaActions";
import { actionSetActiveLenta } from "./actions/actionSetActiveLenta";
import { actionSetToken } from "./actions/actionSetToken";
import { actionFireGetPhotos } from "./actions/actionFireGetPhotos";
import { actionSuccessGetPhotos } from "./actions/actionSuccessGetPhotos";
import { actionFailureGetPhotos } from "./actions/actionFailureGetPhotos";
import { actionSetActivePhotoPost } from "./actions/actionSetActivePhotoPost";
import { actionAddLike } from "./actions/actionAddLike";
import { actionRemoveLike } from "./actions/actionRemoveLike";
import { actionSetActiveProfile } from "./actions/actionSetActiveProfile";
import { actionFireGetProfile } from "./actions/actionFireGetProfile";
import { actionSuccessGetProfile } from "./actions/actionSuccessGetProfile";
import { actionFailureGetProfile } from "./actions/actionFailureGetProfile";

export const lentaReducer = (
  state = lentaStore,
  action: TLentaActions
): TLentaStore => {
  switch (action.type) {
    case "activeLenta/set":
      return actionSetActiveLenta(state, action.data);
    case "token/set":
      return actionSetToken(state, action.data);
    case "activePhotoPost/set":
      return actionSetActivePhotoPost(state, action.data);
    case "getPhotos/fire":
      return actionFireGetPhotos(state);
    case "getPhotos/success":
      return actionSuccessGetPhotos(state, action.data);
    case "getPhotos/failure":
      return actionFailureGetPhotos(state, action.data);
    case "like/add":
      return actionAddLike(state, action.data);
    case "like/remove":
      return actionRemoveLike(state, action.data);
    case "activeProfile/set":
      return actionSetActiveProfile(state, action.data);
    case "getProfile/fire":
      return actionFireGetProfile(state);
    case "getProfile/success":
      return actionSuccessGetProfile(state, action.data);
    case "getProfile/failure":
      return actionFailureGetProfile(state, action.data);
    default:
      return state;
  }
};
