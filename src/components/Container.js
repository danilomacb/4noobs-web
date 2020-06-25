import React from "react";
import ReactMarkdown from "react-markdown";

function Container({ markdown }) {
  return (
    <main>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </main>
  );
}

export default Container;
