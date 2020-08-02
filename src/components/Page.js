import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { Link } from "react-router-dom";

import getMarkdown from "../utils/getMarkdown";

function RouterLink(props) {
  return props.href.match(/^(https?:)?\/\//) ? (
    <a {...props}></a>
  ) : (
    <Link to={props.href}>{props.children}</Link>
  );
}

function ResponsiveTable(props) {
  return (
    <div className="table-container">
      <table>{props.children}</table>
    </div>
  );
}

function Page({ match }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    getMarkdown(match).then((response) => {
      setMarkdown(response);
    });
  }, [match]);

  if (markdown.status === 404) {
    return (
      <main>
        <h1>404 NOT FOUND</h1>
      </main>
    );
  }

  return (
    <main>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
        renderers={{
          link: RouterLink,
          table: ResponsiveTable,
        }}
      />
    </main>
  );
}

export default Page;
