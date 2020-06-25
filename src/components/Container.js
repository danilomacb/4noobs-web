import React from "react";
import ReactMarkdown from "react-markdown";

import SideBar from "./SideBar";

function Container({ markdown }) {
  return (
    <main>
      <SideBar />
      <div id="markdown">
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </div>
    </main>
  );
}

export default Container;
