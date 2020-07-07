import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Home() {
  const [markdown, setMardown] = useState("");

  useEffect(() => {
    getMarkdown();
  }, []);

  async function getMarkdown() {
    let readme = await fetch("https://api.github.com/repos/danilomacb/4noobs/contents/README.md");
    readme = await readme.json();
    readme = await fetch(readme.download_url);
    readme = await readme.text();

    setMardown(readme);
  }

  return (
    <main>
      <div id="markdown">
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </div>
    </main>
  );
}

export default Home;
