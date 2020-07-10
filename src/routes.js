import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Readme from "./pages/Readme";
import Doc from "./pages/Doc";

function Routes() {
  return (
    <BrowserRouter>
      <SideBar />

      <Route exact path="/" component={Home} />
      <Route exact path="/:user/:repository" component={Readme} />
      <Route exact path="/:user/:repository/:file" component={Doc} />
    </BrowserRouter>
  );
}

export default Routes;
