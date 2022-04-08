import { TAction } from "store/TAction";

export const PUSH_IMAGE = "image/push";

export const pushImage: TAction<typeof PUSH_IMAGE, string> = (imageSrc) => ({
  type: PUSH_IMAGE,
  data: imageSrc,
});
