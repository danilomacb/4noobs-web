import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cpp from "./pages/Cpp";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/cpp" component={Cpp} />
    </BrowserRouter>
  );
}

export default Routes;
