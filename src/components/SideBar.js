import React from "react";
import { Link } from "react-router-dom";

import "../styles/sideBar.scss";
import links from "../4noobs.json";

function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/he4rt.png`} alt="4noobs" />
          </Link>
        </li>

        {links.programingLanguages.map((link) => (
          <li key={link.name}>
            <Link to={`/${link.user}/${link.repository}`}>{link.name}</Link>
          </li>
        ))}

        {links.frameworks.map((link) => (
          <li key={link.name}>
            <Link to={`/${link.user}/${link.repository}`}>{link.name}</Link>
          </li>
        ))}

        <li>
          <Link to={`/${links.model.user}/${links.model.repository}`}>{links.model.name}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
