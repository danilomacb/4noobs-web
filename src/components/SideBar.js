import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/sideBar.scss";
import pages from "../pages.json";

function SideBar() {
  const [displayLanguages, setDisplayLanguages] = useState("none");
  const [displayFrameworks, setDisplayFrameworks] = useState("none");
  const [displayTools, setDisplayTools] = useState("none");
  const [displayOS, setDisplayOS] = useState("none");
  const [displayDesign, setDisplayDesign] = useState("none");

  function show(categoryName, set) {
    if (categoryName === "none") {
      set("block");
    } else {
      set("none");
    }
  }

  return (
    <nav>
      <ul>
        <li id="home">
          <Link to={pages.home.path}>{pages.home.name}</Link>
        </li>

        <div className="categoryName" onClick={() => show(displayLanguages, setDisplayLanguages)}>
          Linguagens de programação
        </div>
        <ul className="categoryList" style={{ display: displayLanguages }}>
          {pages.programingLanguages.map((language) => (
            <li key={language.name}>
              <Link to={language.path}>{language.name}</Link>
            </li>
          ))}
        </ul>

        <div className="categoryName" onClick={() => show(displayFrameworks, setDisplayFrameworks)}>
          Frameworks
        </div>
        <ul className="categoryList" style={{ display: displayFrameworks }}>
          {pages.frameworks.map((framework) => (
            <li key={framework.name}>
              <Link to={framework.path}>{framework.name}</Link>
            </li>
          ))}
        </ul>

        <div className="categoryName" onClick={() => show(displayTools, setDisplayTools)}>
          Tools
        </div>
        <ul className="categoryList" style={{ display: displayTools }}>
          {pages.tools.map((tool) => (
            <li key={tool.name}>
              <Link to={tool.path}>{tool.name}</Link>
            </li>
          ))}
        </ul>

        <div className="categoryName" onClick={() => show(displayOS, setDisplayOS)}>
          Sistemas operacionais
        </div>
        <ul className="categoryList" style={{ display: displayOS }}>
          {pages.operationalSystems.map((os) => (
            <li key={os.name}>
              <Link to={os.path}>{os.name}</Link>
            </li>
          ))}
        </ul>

        <div className="categoryName" onClick={() => show(displayDesign, setDisplayDesign)}>
          Design
        </div>
        <ul className="categoryList" style={{ display: displayDesign }}>
          {pages.designs.map((design) => (
            <li key={design.name}>
              <Link to={design.path}>{design.name}</Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}

export default SideBar;
