import { call, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { selectToken } from "./lenta/selectors/selectToken";
import bridge from "@vkontakte/vk-bridge";
import { addLike } from "./lenta/sets/addLike";
import { removeLike } from "./lenta/sets/removeLike";

export function* setLikeSaga({
  data,
  type,
}: ReturnType<typeof addLike | typeof removeLike>): SagaIterator {
  try {
    const accessToken = yield select(selectToken);
    const method = type === "like/remove" ? "likes.delete" : "likes.add";

    yield call(bridge.send, "VKWebAppCallAPIMethod", {
      method,
      request_id: `like.${Date.now()}`,
      params: {
        type: "photo",
        v: "5.131",
        access_token: accessToken,
        owner_id: 1196250,
        item_id: data,
      },
    });
  } catch (e) {}
}
