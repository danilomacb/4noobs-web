import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Home() {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    async function getReadme() {
      let response = await fetch("https://api.github.com/repos/he4rt/4noobs/contents/README.MD");

      response = await response.json();
      response = await fetch(response.download_url);
      response = await response.text();

      setReadme(response);
    }

    getReadme();
  }, []);

  return <ReactMarkdown source={readme} escapeHtml={false} />;
}

export default Home;
