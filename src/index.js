import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/global.scss";
import configureStore from "./state/store";
import App from "./App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
