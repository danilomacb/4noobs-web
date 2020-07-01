import { createStore } from "redux";

import reducers from "./reducers";

function configureStore() {
  const store = createStore(reducers);

  return store;
}

export default configureStore;
