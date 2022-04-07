import { TStore } from "../../TStore";
import { TPhoto } from "../../../entities/PhotoPost";

export const selectActivePhotoPost = (state: TStore): TPhoto | null =>
  state.lenta.photos.find(({ id }) => id === state.lenta.activePhotoId) || null;
