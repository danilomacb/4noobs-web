import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown/with-html";

import getMarkdown from "../utils/getMarkdown";

function Doc({ match }) {
  const [markdown, setMardown] = useState("");

  useEffect(() => {
    getMarkdown(match).then((response) => {
      setMardown(response);
    });
  }, [match]);

  return (
    <main>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </main>
  );
}

export default Doc;
