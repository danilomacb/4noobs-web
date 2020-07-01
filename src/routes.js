import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import pages from "./pages.json";
import Page from "./components/Page";

function Routes({ files }) {
  console.log(files);

  return (
    <BrowserRouter>
      <Route
        key={pages.model.name}
        exact
        path={pages.model.path}
        component={() => <Page user={pages.model.user} repository={pages.model.repository} />}
      />
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
    files: state.files,
  };
}

export default connect(mapStateToProps)(Routes);
