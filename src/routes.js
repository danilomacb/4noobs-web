import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SideBar from "./components/SideBar";
import Page from "./components/Page";

function Routes() {
  return (
    <BrowserRouter>
      <SideBar />

      <Route exact path="/" component={Page} />
      <Route exact path="/:user/:repository" component={Page} />
      <Route exact path="/:user/:repository/:file" component={Page} />
      <Route exact path="/:user/:repository/:file/*" component={Page} />
    </BrowserRouter>
  );
}

export default Routes;
