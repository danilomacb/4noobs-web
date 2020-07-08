import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Home() {
  const [markdown, setMardown] = useState("");

  useEffect(() => {
    getMarkdown();
  }, []);

  async function getMarkdown() {
    let response = await fetch("https://api.github.com/repos/danilomacb/4noobs/contents/README.md");
    response = await response.json();
    response = await fetch(response.download_url);
    response = await response.text();

    setMardown(response);
  }

  return (
    <main>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </main>
  );
}

export default Home;
