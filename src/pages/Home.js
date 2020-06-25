import React, { useEffect, useState } from "react";

import Container from "../components/Container";

function Home() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function getMarkdown() {
      let response = await fetch("https://api.github.com/repos/he4rt/4noobs/contents/README.MD");

      response = await response.json();
      response = await fetch(response.download_url);
      response = await response.text();

      setMarkdown(response);
    }

    getMarkdown();
  }, []);

  return <Container markdown={markdown} />;
}

export default Home;
