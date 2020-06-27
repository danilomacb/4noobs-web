import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import pages from "./pages.json";
import Page from "./components/Page";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path={pages.home.path} component={() => <Page link={pages.home.link} />} />

      {pages.programingLanguages.map((language) => (
        <Route
          key={language.name}
          exact
          path={language.path}
          component={() => <Page link={language.link} />}
        />
      ))}

      {pages.frameworks.map((framework) => (
        <Route
          key={framework.name}
          exact
          path={framework.path}
          component={() => <Page link={framework.link} />}
        />
      ))}
    </BrowserRouter>
  );
}

export default Routes;
