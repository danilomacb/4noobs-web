import React from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";

import SideBar from "./SideBar";

function Container({ readme }) {
  return (
    <main>
      <SideBar />
      <div id="markdown">
        <ReactMarkdown source={readme} escapeHtml={false} />
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    readme: state.readme,
  };
}

export default connect(mapStateToProps)(Container);
