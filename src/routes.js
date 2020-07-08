import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Markdown from "./components/Markdown";
import Doc from "./components/Doc";

function Routes() {
  return (
    <BrowserRouter>
      <SideBar />

      <Route exact path="/" component={Home} />
      <Route exact path="/:user/:repository" component={Markdown} />
      <Route exact path="/:user/:repository/:file" component={Doc} />
    </BrowserRouter>
  );
}

export default Routes;
