import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "../styles/sideBar.scss";
import links from "../4noobs.json";

function SideBar() {
  const [languagesDisplay, setLanguagesDisplay] = useState("none");
  const [frameworksDisplay, setFrameworksDisplay] = useState("none");

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

        <li
          className="category"
          onClick={() => changeDisplay(languagesDisplay, setLanguagesDisplay)}
        >
          Linguagens de Programação
          {languagesDisplay === "none" ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </li>
        <ul className="category-list" style={{ display: languagesDisplay }}>
          {links.programingLanguages.map((link) => (
            <li className="category-item" key={link.name}>
              <Link to={`/${link.user}/${link.repository}`}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <li
          className="category"
          onClick={() => changeDisplay(frameworksDisplay, setFrameworksDisplay)}
        >
          Frameworks
          {frameworksDisplay === "none" ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </li>
        <ul className="category-list" style={{ display: frameworksDisplay }}>
          {links.frameworks.map((link) => (
            <li className="category-item" key={link.name}>
              <Link to={`/${link.user}/${link.repository}`}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <li id="model">
          <Link to={`/${links.model.user}/${links.model.repository}`}>{links.model.name}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
