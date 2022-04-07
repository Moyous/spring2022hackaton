import { TStore } from "../../TStore";

export const selectPhotosState = (state: TStore) => ({
  isLoading: state.lenta.isPhotosLoading,
  data: state.lenta.photos,
  isLoaded: state.lenta.isPhotosLoaded,
  error: state.lenta.error,
});
