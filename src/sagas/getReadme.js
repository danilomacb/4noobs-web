import { all, call, takeEvery, put } from "redux-saga/effects";

import { GET_README, SET_README } from "../state/actions";

function* getReadme({ user, repository }) {
  debugger;
  const link = `https://api.github.com/repos/${user}/${repository}/contents/README.md`;
  let readme = yield call(fetch, link);

  readme = yield readme.json();
  readme = yield fetch(readme.download_url);
  readme = yield readme.text();
  yield put({ type: SET_README, readme });
}

function* getAction() {
  yield takeEvery(GET_README, getReadme);
}

export default function* runGetReadme() {
  yield all([getAction()]);
}
