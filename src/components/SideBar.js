import React from "react";
import { Link } from "react-router-dom";

import pages from "../pages.json";

function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={pages.home.path}>{pages.home.name}</Link>
        </li>
        {pages.linguagensDeProgramacao.map((page) => (
          <li key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;
