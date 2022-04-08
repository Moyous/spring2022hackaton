import { call, put, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { selectToken } from "./lenta/selectors/selectToken";
import bridge from "@vkontakte/vk-bridge";
import { selectProfileState } from "./lenta/selectors/selectProfileState";
import { setActiveProfile } from "./lenta/sets/setActiveProfile";
import { failureGetProfile } from "./lenta/sets/failureGetProfile";
import { TProfile, TRawProfile } from "../entities/Profile";
import { successGetProfile } from "./lenta/sets/successGetProfile";

export function* loadProfileSaga({
  data,
}: ReturnType<typeof setActiveProfile>): SagaIterator {
  try {
    const accessToken = yield select(selectToken);
    const { isLoading } = yield select(selectProfileState);
    if (!accessToken || !isLoading) {
      return;
    }

    const response = yield call(bridge.send, "VKWebAppCallAPIMethod", {
      method: "users.get",
      request_id: `users.get.${Date.now()}`,
      params: {
        user_id: data,
        v: "5.131",
        access_token: accessToken,
        fields: "id,first_name,last_name,photo_100,photo_200,status,online",
      },
    });

    if (Array.isArray(response.response)) {
      const profile: TProfile | null =
        (response.response as TRawProfile[])
          .map(
            ({
              first_name,
              id,
              last_name,
              online,
              online_mobile,
              photo_100,
              photo_200,
              status,
            }) => ({
              id,
              avatarSrcLow: photo_100,
              avatarSrcHigh: photo_200,
              name: `${first_name} ${last_name}`,
              status,
              isOnline: online === 1,
              isFromMobile: online_mobile === 1,
            })
          )
          .find(({ id }) => id === data) || null;

      if (profile) {
        yield put(successGetProfile(profile));
      }
    }

    yield put(failureGetProfile("Не удалось загрузить профиль"));
  } catch (e) {
    yield put(failureGetProfile(e.toString()));
  }
}
