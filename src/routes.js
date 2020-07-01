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

      {pages.tools.map((tool) => (
        <Route key={tool.name} exact path={tool.path} component={() => <Page link={tool.link} />} />
      ))}

      {pages.operationalSystems.map((os) => (
        <Route key={os.name} exact path={os.path} component={() => <Page link={os.link} />} />
      ))}

      {pages.designs.map((design) => (
        <Route
          key={design.name}
          exact
          path={design.path}
          component={() => <Page link={design.link} />}
        />
      ))}

      {pages.models.map((model) => (
        <Route
          key={model.name}
          exact
          path={model.path}
          component={() => <Page link={model.link} />}
        />
      ))}
    </BrowserRouter>
  );
}

export default Routes;
