import React from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";

import SideBar from "./SideBar";

function Container({ readme, files }) {
  console.log(files);
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
    files: state.files,
  };
}

export default connect(mapStateToProps)(Container);
