import { TLentaStore } from "./TLentaStore";
import { ELentaType } from "../../entities/MainMenuButton";

export const lentaStore: TLentaStore = {
  activeLentaType: ELentaType.PHOTO,
  activePhotoId: null,
  token: null,
  photos: [],
  isPhotosLoaded: false,
  isPhotosLoading: false,
  error: null,
  profileId: null,
  isProfileLoading: false,
  isProfileLoaded: false,
  activeProfile: null,
};
