import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import pages from "./pages.json";
import Page from "./components/Page";

function Routes() {
  return (
    <BrowserRouter>
      <Route
        key={pages.model.name}
        exact
        path={pages.model.path}
        component={() => <Page link={pages.model.link} />}
      />
    </BrowserRouter>
  );
}

export default Routes;
