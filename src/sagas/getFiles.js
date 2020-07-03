import { all, call, takeEvery, put } from "redux-saga/effects";

import { GET_FILES, SET_FILES } from "../state/actions";

function* getFiles({ user, repository }) {
  const link = `https://api.github.com/repos/${user}/${repository}/contents/docs`;
  let files = yield call(fetch, link);

  files = yield files.json();
  yield put({ type: SET_FILES, files });
}

function* getAction() {
  yield takeEvery(GET_FILES, getFiles);
}

export default function* runGetFiles() {
  yield all([getAction()]);
}
