import { takeLatest, ForkEffect } from "redux-saga/effects";
import { loadPhotosSaga } from "./loadPhotosSaga";

export function* rootSaga(): Generator<ForkEffect> {
  yield takeLatest("getPhotos/fire", loadPhotosSaga);
}
