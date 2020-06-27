import React, { useState } from "react";
import { Link } from "react-router-dom";

import pages from "../pages.json";

function SideBar() {
  const [displayLanguages, setDisplayLanguages] = useState("none");
  const [displayFrameworks, setDisplayFrameworks] = useState("none");
  const [displayTools, setDisplayTools] = useState("none");
  const [displayOS, setDisplayOS] = useState("none");

  function show(category, set) {
    if (category === "none") {
      set("block");
    } else {
      set("none");
    }
  }

  return (
    <nav>
      <ul>
        <li key={pages.home.name}>
          <Link to={pages.home.path}>{pages.home.name}</Link>
        </li>

        <div className="category" onClick={() => show(displayLanguages, setDisplayLanguages)}>
          Linguagens de programação
        </div>
        <ul style={{ display: displayLanguages }}>
          {pages.programingLanguages.map((language) => (
            <li key={language.name}>
              <Link to={language.path}>{language.name}</Link>
            </li>
          ))}
        </ul>

        <div className="category" onClick={() => show(displayFrameworks, setDisplayFrameworks)}>
          Frameworks
        </div>
        <ul style={{ display: displayFrameworks }}>
          {pages.frameworks.map((framework) => (
            <li key={framework.name}>
              <Link to={framework.path}>{framework.name}</Link>
            </li>
          ))}
        </ul>

        <div className="category" onClick={() => show(displayTools, setDisplayTools)}>
          Tools
        </div>
        <ul style={{ display: displayTools }}>
          {pages.tools.map((tool) => (
            <li key={tool.name}>
              <Link to={tool.path}>{tool.name}</Link>
            </li>
          ))}
        </ul>

        <div className="category" onClick={() => show(displayOS, setDisplayOS)}>
          Sistemas operacionais
        </div>
        <ul style={{ display: displayOS }}>
          {pages.operationalSystems.map((os) => (
            <li key={os.name}>
              <Link to={os.path}>{os.name}</Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}

export default SideBar;
