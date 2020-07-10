import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown/with-html";

import changeLinksAndImages from "../utils/changeLinksAndImages";

function Readme({ match }) {
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

      response = changeLinksAndImages(response, match.params.user, match.params.repository, match.path);

      setMardown(response);
    }
  }, [match.params.user, match.params.repository, match.path]);

  return (
    <main>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </main>
  );
}

export default Readme;
