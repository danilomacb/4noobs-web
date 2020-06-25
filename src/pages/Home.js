import React, { useEffect, useState } from "react";

import request from "../services/request";
import Container from "../components/Container";

function Home() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function getMarkdown() {
      const response = await request(
        "https://api.github.com/repos/he4rt/4noobs/contents/README.MD"
      );

      setMarkdown(response);
    }

    getMarkdown();
  }, []);

  return <Container markdown={markdown} />;
}

export default Home;
