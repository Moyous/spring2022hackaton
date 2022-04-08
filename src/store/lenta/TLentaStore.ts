import { ELentaType } from "../../entities/MainMenuButton";
import { TPhoto } from "../../entities/PhotoPost";
import { TProfile } from "../../entities/Profile";

export type TLentaStore = {
  activeLentaType: ELentaType;
  activePhotoId: number | null;
  photos: TPhoto[];
  token: string | null;
  isPhotosLoaded: boolean;
  isPhotosLoading: boolean;
  error: string | null;
  profileId: number | null;
  isProfileLoading: boolean;
  isProfileLoaded: boolean;
  activeProfile: TProfile | null;
  ownProfileId: number | null;
};
