import React, { useEffect, useState } from "react";

function Test() {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    async function getReadme() {
      const response = await fetch(
        "https://api.github.com/repos/danilomacb/react-portfolio/contents/README.md"
      );

      const readme = await response.json();

      setReadme(readme.content);
    }

    getReadme();
  }, []);

  console.log(readme);
  return <div>{readme}</div>;
}

export default Test;
