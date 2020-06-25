import React, { useEffect, useState } from "react";

import request from "../services/request";
import Container from "../components/Container";

function Page({ link }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function getMarkdown() {
      const response = await request(link);

      setMarkdown(response);
    }

    getMarkdown();
  }, []);

  return <Container markdown={markdown} />;
}

export default Page;
