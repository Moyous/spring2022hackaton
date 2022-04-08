import { takeLatest, ForkEffect, takeEvery } from "redux-saga/effects";
import { loadPhotosSaga } from "./loadPhotosSaga";
import { setLikeSaga } from "./setLikeSaga";
import { loadProfileSaga } from "./loadProfileSaga";

export function* rootSaga(): Generator<ForkEffect> {
  yield takeLatest("getPhotos/fire", loadPhotosSaga);
  yield takeEvery(["like/remove", "like/add"], setLikeSaga);
  yield takeLatest("getProfile/fire", loadProfileSaga);
}
