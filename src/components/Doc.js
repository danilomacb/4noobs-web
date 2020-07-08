import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import changeLinks from "../utils/changeLinks";

function Doc({ match }) {
  const [markdown, setMardown] = useState("");

  useEffect(() => {
    getMarkdown();

    async function getMarkdown() {
      let response = await fetch(
        `https://api.github.com/repos/${match.params.user}/${match.params.repository}/contents/docs/${match.params.file}`
      );
      response = await response.json();
      response = await fetch(response.download_url);
      response = await response.text();

      response = changeLinks(response, match.params.user, match.params.repository);

      setMardown(response);
    }
  }, [match.params.user, match.params.repository, match.params.file]);

  return (
    <main>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </main>
  );
}

export default Doc;
