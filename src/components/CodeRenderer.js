import React from "react";
import Lowlight from "react-lowlight";
import "highlight.js/styles/srcery.css";

import bash from "highlight.js/lib/languages/bash";
import cLike from "highlight.js/lib/languages/c-like";
import elixir from "highlight.js/lib/languages/elixir";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import ruby from "highlight.js/lib/languages/ruby";

Lowlight.registerLanguage("bash", bash);
Lowlight.registerLanguage("c", cLike);
Lowlight.registerLanguage("cpp", cLike);
Lowlight.registerLanguage("cs", cLike);
Lowlight.registerLanguage("elixir", elixir);
Lowlight.registerLanguage("java", java);
Lowlight.registerLanguage("js", javascript);
Lowlight.registerLanguage("py", python);
Lowlight.registerLanguage("ruby", ruby);

let langs = ["bash", "c", "cpp", "cs", "elixir", "java", "js", "py", "ruby"];

function CodeRenderer(props) {
  const { language, ...rest } = props;
  const found = langs.find((lang) => lang === language);

  return <Lowlight language={found ? language : undefined} {...rest} />;
}

export default CodeRenderer;
