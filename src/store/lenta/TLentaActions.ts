import { setActiveLenta } from "./sets/setActiveLenta";
import { setToken } from "./sets/setToken";
import { setActivePhotoPost } from "./sets/setActivePhotoPost";
import { fireGetPhotos } from "./sets/fireGetPhotos";
import { failureGetPhotos } from "./sets/failureGetPhotos";
import { successGetPhotos } from "./sets/successGetPhotos";

export type TLentaActions = ReturnType<
  | typeof setActiveLenta
  | typeof setToken
  | typeof setActivePhotoPost
  | typeof fireGetPhotos
  | typeof successGetPhotos
  | typeof failureGetPhotos
>;
