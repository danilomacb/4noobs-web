import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import changeLinks from "../utils/changeLinks";

function Markdown({ match }) {
  const [markdown, setMardown] = useState("");

  useEffect(() => {
    getMarkdown();

    async function getMarkdown() {
      let response = await fetch(
        `https://api.github.com/repos/${match.params.user}/${match.params.repository}/contents/README.md`
      );
      response = await response.json();
      response = await fetch(response.download_url);
      response = await response.text();

      response = changeLinks(response, match.params.user, match.params.repository);

      setMardown(response);
    }
  }, [match.params.user, match.params.repository]);

  return (
    <main>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </main>
  );
}

export default Markdown;
