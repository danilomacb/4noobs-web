import { all, call, takeEvery, put } from "redux-saga/effects";

import { GET_FILES, SET_FILES } from "../state/actions";

function* getFiles({ user, repository, path }) {
  const link = `https://api.github.com/repos/${user}/${repository}/contents/docs`;
  let files = yield call(fetch, link);

  files = yield files.json();
  let filesWithPath = [];

  files.forEach((file) => filesWithPath.push({ ...file, jsonPath: path }));

  yield put({ type: SET_FILES, files: filesWithPath });
}

function* getAction() {
  yield takeEvery(GET_FILES, getFiles);
}

export default function* runGetFiles() {
  yield all([getAction()]);
}
