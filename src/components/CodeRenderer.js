import React from "react";
import Lowlight from "react-lowlight";
import "highlight.js/styles/srcery.css";

import bash from "highlight.js/lib/languages/bash";
import cLike from "highlight.js/lib/languages/c-like";
import elixir from "highlight.js/lib/languages/elixir";
import html from "highlight.js/lib/languages/htmlbars";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import markdown from "highlight.js/lib/languages/markdown";
import php from "highlight.js/lib/languages/php";
import python from "highlight.js/lib/languages/python";
import ruby from "highlight.js/lib/languages/ruby";

Lowlight.registerLanguage("bash" && "sh" && "zsh", bash);
Lowlight.registerLanguage("c" && "cpp" && "csharp", cLike);
Lowlight.registerLanguage("elixir", elixir);
Lowlight.registerLanguage("html", html);
Lowlight.registerLanguage("java", java);
Lowlight.registerLanguage("js", javascript);
Lowlight.registerLanguage("md", markdown);
Lowlight.registerLanguage("php", php);
Lowlight.registerLanguage("py", python);
Lowlight.registerLanguage("ruby", ruby);

let langs = ["bash", "c", "cpp", "cs", "elixir", "java", "js", "php", "py", "ruby", "html"];

function CodeRenderer(props) {
  const { language, ...rest } = props;
  const found = langs.find((lang) => lang === language);

  return <Lowlight language={found ? language : undefined} {...rest} />;
}

export default CodeRenderer;
