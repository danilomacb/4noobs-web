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

Lowlight.registerLanguage("bash", bash);
Lowlight.registerLanguage("sh", bash);
Lowlight.registerLanguage("c", cLike);
Lowlight.registerLanguage("cpp", cLike);
Lowlight.registerLanguage("c++", cLike);
Lowlight.registerLanguage("csharp", cLike);
Lowlight.registerLanguage("cs", cLike);
Lowlight.registerLanguage("elixir", elixir);
Lowlight.registerLanguage("html", html);
Lowlight.registerLanguage("java", java);
Lowlight.registerLanguage("javascript", javascript);
Lowlight.registerLanguage("js", javascript);
Lowlight.registerLanguage("jsx", javascript);
Lowlight.registerLanguage("markdown", markdown);
Lowlight.registerLanguage("md", markdown);
Lowlight.registerLanguage("php", php);
Lowlight.registerLanguage("python", python);
Lowlight.registerLanguage("py", python);
Lowlight.registerLanguage("ruby", ruby);
Lowlight.registerLanguage("rb", ruby);

let langs = [
  "bash",
  "sh",
  "c",
  "cpp",
  "c++",
  "csharp",
  "cs",
  "elixir",
  "html",
  "java",
  "javascript",
  "js",
  "jsx",
  "markdown",
  "md",
  "php",
  "python",
  "py",
  "ruby",
  "rb",
];

function CodeRenderer(props) {
  const { language, ...rest } = props;

  const found = langs.find((lang) => lang === language);

  if (!found) {
    return <Lowlight {...rest} />;
  }

  return <Lowlight language={language} {...rest} />;
}

export default CodeRenderer;
