import { put, call, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { failureGetPhotos } from "./lenta/sets/failureGetPhotos";
import { successGetPhotos } from "./lenta/sets/successGetPhotos";
import { selectToken } from "./lenta/selectors/selectToken";
import bridge from "@vkontakte/vk-bridge";
import { TPhoto } from "../entities/PhotoPost";
import { selectPhotosState } from "./lenta/selectors/selectPhotosState";

export function* loadPhotosSaga(): SagaIterator {
  try {
    const accessToken = yield select(selectToken);
    const { isLoading } = yield select(selectPhotosState);
    if (!accessToken || !isLoading) {
      return;
    }

    // console.log("SUBSCRIPTION");
    // const tempSubscriber = ({
    //   detail: { type, data },
    // }: VKBridgeEvent<AnyReceiveMethodName>) => {
    //   console.log("test", type, data);
    //   if (type === "VKWebAppCallAPIMethodResult") {
    //     console.log(data);
    //
    //     bridge.unsubscribe(tempSubscriber);
    //   }
    // };
    // bridge.subscribe(tempSubscriber);
    const response = yield call(bridge.send, "VKWebAppCallAPIMethod", {
      method: "photos.get",
      request_id: "testing",
      params: {
        album_id: "profile",
        v: "5.131",
        access_token: accessToken,
        owner_id: 1196250,
      },
    });
    // TODO on error
    if (response.response.items) {
      const photos: TPhoto[] = response.response.items
        .map(
          // @ts-ignore
          ({ id, sizes, date, text }) => ({
            id,
            date,
            text,
            lowSrc: sizes[0]?.url || "",
            highSrc: sizes[sizes.length - 1]?.url || "",
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
