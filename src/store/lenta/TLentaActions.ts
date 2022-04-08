import { setActiveLenta } from "./sets/setActiveLenta";
import { setToken } from "./sets/setToken";
import { setActivePhotoPost } from "./sets/setActivePhotoPost";
import { fireGetPhotos } from "./sets/fireGetPhotos";
import { failureGetPhotos } from "./sets/failureGetPhotos";
import { successGetPhotos } from "./sets/successGetPhotos";
import { addLike } from "./sets/addLike";
import { removeLike } from "./sets/removeLike";
import { setActiveProfile } from "./sets/setActiveProfile";
import { fireGetProfile } from "./sets/fireGetProfile";
import { successGetProfile } from "./sets/successGetProfile";
import { failureGetProfile } from "./sets/failureGetProfile";
import { setOwnProfile } from "./sets/setOwnProfile";
import { pushImage } from "./sets/pushImage";

export type TLentaActions = ReturnType<
  | typeof setActiveLenta
  | typeof setToken
  | typeof setActivePhotoPost
  | typeof fireGetPhotos
  | typeof successGetPhotos
  | typeof failureGetPhotos
  | typeof addLike
  | typeof removeLike
  | typeof setActiveProfile
  | typeof fireGetProfile
  | typeof successGetProfile
  | typeof failureGetProfile
  | typeof setOwnProfile
  | typeof pushImage
>;
