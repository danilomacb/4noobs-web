import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import changeLinks from "../utils/changeLinks";

function Doc({ match }) {
  const [markdown, setMardown] = useState("");

  useEffect(() => {
    getMarkdown();

    async function getMarkdown() {
      let readme = await fetch(
        `https://api.github.com/repos/${match.params.user}/${match.params.repository}/contents/docs/${match.params.file}`
      );
      readme = await readme.json();
      readme = await fetch(readme.download_url);
      readme = await readme.text();

      readme = changeLinks(readme, match.params.user, match.params.repository);

      setMardown(readme);
    }
  }, [match.params.user, match.params.repository, match.params.file]);

  return (
    <main>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </main>
  );
}

export default Doc;
