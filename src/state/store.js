import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import getReadme from "../sagas/getReadme";
import getFiles from "../sagas/getFiles";

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(getReadme);
  sagaMiddleware.run(getFiles);

  return store;
}

export default configureStore;
