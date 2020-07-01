import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import getReadme from "../sagas/getReadme";

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(getReadme);

  return store;
}

export default configureStore;
