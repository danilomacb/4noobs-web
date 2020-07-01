import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "../styles/sideBar.scss";
import pages from "../pages.json";

function SideBar() {
  const [displayModels, setDisplayModels] = useState("none");

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
        <li className="categoryName" onClick={() => show(displayModels, setDisplayModels)}>
          Model
          {displayModels === "none" ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </li>
        <ul className="categoryList" style={{ display: displayModels }}>
          <li className="categoryItem" key={pages.model.name}>
            <Link to={pages.model.path}>{pages.model.name}</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default SideBar;
