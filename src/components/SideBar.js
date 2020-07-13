import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "../styles/sideBar.scss";
import links from "../4noobs.json";
import Category from "./Category"

function SideBar() {
  const [languagesDisplay, setLanguagesDisplay] = useState("none");
  const [frameworksDisplay, setFrameworksDisplay] = useState("none");
  const [toolsDisplay, setToolsDisplay] = useState("none");

  function changeDisplay(category, set) {
    category === "none" ? set("block") : set("none");
  }

  return (
    <nav>
      <ul id="main-list">
        <li id="home">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/he4rt.png`} alt="4noobs" />
          </Link>
        </li>

        <Category title="Linguages de Programação" array={links.programingLanguages} />
        <Category title="Frameworks" array={links.frameworks} />
        <Category title="Ferramentas" array={links.tools} />

        <li id="model">
          <Link to={`/${links.model.user}/${links.model.repository}`}>{links.model.name}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
