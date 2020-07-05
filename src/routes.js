import React, { Fragment } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import pages from "./pages.json";
import SideBar from "./components/SideBar";
import Readme from "./components/Readme";
import Dock from "./components/Dock";

function Routes() {
  return (
    <BrowserRouter>
      <SideBar />

      <Route
        exact
        path="/"
        component={(props) => <Readme {...props} user="danilomacb" repository="4noobs" />}
      />

      {pages.map((page) => (
        <Fragment key={page.name}>
          <Route
            exact
            path={page.path}
            component={(props) => (
              <Readme {...props} user={page.user} repository={page.repository} />
            )}
          />
          <Route exact path={`${page.path}/:file`} component={Dock} />
        </Fragment>
      ))}
    </BrowserRouter>
  );
}

export default Routes;
