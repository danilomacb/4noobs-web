import React, { useEffect, useState } from "react";

import Container from "../components/Container";

function Cpp() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function getMarkdown() {
      let response = await fetch(
        "https://api.github.com/repos/Novout/cpp4noobs/contents/README.md"
      );

      response = await response.json();
      console.log(response);
      response = await fetch(response.download_url);
      response = await response.text();

      setMarkdown(response);
    }

    getMarkdown();
  }, []);

  return <Container markdown={markdown} />;
}

export default Cpp;
