import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { Link } from "react-router-dom";
import htmlParser from "react-markdown/plugins/html-parser";

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

  const customElements = {
    "a": Link,
  };

  const parseHtml = htmlParser({
    isValidNode: (node) => node.type !== "script",
    processingInstructions: [
      {
        shouldProcessNode: (node) => {
          // Process the node if it matches a custom element
          return node.name && customElements[node.name];
        },
        processNode: (node) => {
          let CustomElement = customElements[node.name];
          return <CustomElement />;
        },
      },
      // Default processing
      {
        shouldProcessNode: () => true,
        processNode: htmlParser.processNodeDefinitions.processDefaultNode,
      },
    ],
  });

  return (
    <main>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
        renderers={{ link: RouterLink }}
        astPlugins={[parseHtml]}
      />
    </main>
  );
}

export default Page;
