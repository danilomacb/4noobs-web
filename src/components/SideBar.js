import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cpp">C++</Link>
        </li>
        <li>Java</li>
        <li>Elixir</li>
        <li>C</li>
        <li>Ruby</li>
        <li>JavaScript</li>
      </ul>
    </nav>
  );
}

export default SideBar;
