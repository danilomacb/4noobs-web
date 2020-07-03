import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import pages from "./pages.json";
import Page from "./components/Page";

function Routes() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={pages.model.path}
        component={() => <Page user={pages.model.user} repository={pages.model.repository} />}
      />
    </BrowserRouter>
  );
}

export default Routes;
