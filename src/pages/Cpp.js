import React, { useEffect, useState } from "react";

import request from "../services/request";
import Container from "../components/Container";

function Cpp() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function getMarkdown() {
      const response = await request(
        "https://api.github.com/repos/Novout/cpp4noobs/contents/README.md"
      );

      setMarkdown(response);
    }

    getMarkdown();
  }, []);

  return <Container markdown={markdown} />;
}

export default Cpp;
