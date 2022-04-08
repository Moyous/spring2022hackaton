import { TLentaStore } from "../TLentaStore";

export const actionPushImage = (
  state: TLentaStore,
  imageSrc: string
): TLentaStore => ({
  ...state,
  localImagesAddonCount: state.localImagesAddonCount - 1,
  photos: [
    {
      id: state.localImagesAddonCount,
      date: Date.now() / 1000,
      text: "",
      lowSrc: imageSrc,
      highSrc: imageSrc,
      isLiked: false,
      likesCount: 0,
    },
    ...state.photos,
  ],
});
