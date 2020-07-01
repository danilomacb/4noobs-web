import React, { useEffect, useState } from "react";

import getReadme from "../services/getReadme";
import Container from "../components/Container";

function Page({ user, repository }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function getMarkdown() {
      const response = await getReadme(user, repository);

      setMarkdown(response);
    }

    getMarkdown();
  }, [user, repository]);

  return <Container markdown={markdown} />;
}

export default Page;
