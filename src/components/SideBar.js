import React from "react";
import { Link } from "react-router-dom";

import "../styles/sideBar.scss";
import pages from "../4noobs.json";

function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/he4rt.png`} alt="4noobs" />
          </Link>
        </li>

        {pages.map((page) => (
          <li key={page.name}>
            <Link to={`/${page.user}/${page.repository}`}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;
