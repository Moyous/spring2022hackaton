import { put, call, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { failureGetPhotos } from "./lenta/sets/failureGetPhotos";
import { successGetPhotos } from "./lenta/sets/successGetPhotos";
import { selectToken } from "./lenta/selectors/selectToken";
import bridge from "@vkontakte/vk-bridge";
import { TPhoto } from "../entities/PhotoPost";
import { selectPhotosState } from "./lenta/selectors/selectPhotosState";
import { selectActiveProfileId } from "./lenta/selectors/selectActiveProfileId";

export function* loadPhotosSaga(): SagaIterator {
  try {
    const accessToken = yield select(selectToken);
    const { isLoading } = yield select(selectPhotosState);
    const id = yield select(selectActiveProfileId);

    if (!accessToken || !isLoading || !id) {
      return;
    }

    const response = yield call(bridge.send, "VKWebAppCallAPIMethod", {
      method: "photos.getAll",
      request_id: `photos.getAll.${Date.now()}`,
      params: {
        album_id: "profile",
        v: "5.131",
        access_token: accessToken,
        owner_id: id,
        extended: 1,
      },
    });

    if (response.response.items) {
      const photos: TPhoto[] = response.response.items
        .map(
          // @ts-ignore
          ({ id, sizes, date, text, likes }) => ({
            id,
            date,
            text,
            lowSrc: sizes[0]?.url || "",
            highSrc: sizes[sizes.length - 1]?.url || "",
            likesCount: likes?.count || 0,
            isLiked: likes?.user_likes === 1,
          })
        )
        .sort((a: TPhoto, b: TPhoto) => b.date - a.date);

      yield put(successGetPhotos(photos));
      return;
    }

    yield put(failureGetPhotos("Не удалось загрузить фоты"));
  } catch (e) {
    yield put(failureGetPhotos(e.toString()));
  }
}
