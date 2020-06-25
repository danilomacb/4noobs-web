import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cpp from "./pages/Cpp";
import Java from "./pages/Java";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/cpp" component={Cpp} />
      <Route exact path="/java" component={Java} />
    </BrowserRouter>
  );
}

export default Routes;
