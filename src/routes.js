import React from "react";
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
        path={pages.model.path}
        component={(props) => (
          <Readme {...props} user={pages.model.user} repository={pages.model.repository} />
        )}
      />
      <Route exact path={`${pages.model.path}/:file`} component={Dock} />
    </BrowserRouter>
  );
}

export default Routes;
