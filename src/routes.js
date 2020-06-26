import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import pages from "./pages.json";
import Page from "./components/Page";

function Routes() {
  return (
    <BrowserRouter>
      {pages.map((page) => (
        <Route key={page.name} exact path={page.path} component={() => <Page link={page.link} />} />
      ))}
    </BrowserRouter>
  );
}

export default Routes;
