import { ELentaType } from "../../entities/MainMenuButton";
import { TPhoto } from "../../entities/PhotoPost";

export type TLentaStore = {
  activeLentaType: ELentaType;
  activePhotoId: number | null;
  photos: TPhoto[];
  token: string | null;
  isPhotosLoaded: boolean;
  isPhotosLoading: boolean;
  error: string | null;
};
