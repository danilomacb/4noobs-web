import React, { useState } from "react";
import { Link } from "react-router-dom";

import pages from "../pages.json";

function SideBar() {
  const [displayLanguages, setDisplayLanguages] = useState("none");
  const [displayFrameworks, setDisplayFrameworks] = useState("none");

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

        <label onClick={() => show(displayLanguages, setDisplayLanguages)}>
          Linguagens de programação
        </label>
        <ul style={{ display: displayLanguages }}>
          {pages.programingLanguages.map((language) => (
            <li key={language.name}>
              <Link to={language.path}>{language.name}</Link>
            </li>
          ))}
        </ul>

        <br />

        <label onClick={() => show(displayFrameworks, setDisplayFrameworks)}>Frameworks</label>
        <ul style={{ display: displayFrameworks }}>
          {pages.frameworks.map((framework) => (
            <li key={framework.name}>
              <Link to={framework.path}>{framework.name}</Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}

export default SideBar;
