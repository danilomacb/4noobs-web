import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { Link } from "react-router-dom";

import getMarkdown from "../utils/getMarkdown";

function RouterLink(props) {
  return props.href.match(/^(https?:)?\/\//) ? (
    <a href={props.href}>{props.children}</a>
  ) : (
    <Link to={props.href}>{props.children}</Link>
  );
}

function Page({ match }) {
  const [markdown, setMardown] = useState("");

  useEffect(() => {
    getMarkdown(match).then((response) => {
      setMardown(response);
    });
  }, [match]);

  return (
    <main>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
        renderers={{ link: RouterLink }}
      />
    </main>
  );
}

export default Page;
