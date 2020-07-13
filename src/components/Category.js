import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Category({ title, array }) {
  const [display, setdisplay] = useState("none");

  function changeDisplay() {
    display === "none" ? setdisplay("block") : setdisplay("none");
  }

  return (
    <>
      <li className="category" onClick={changeDisplay}>
        {title}
        {display === "none" ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </li>
      <ul className="category-list" style={{ display: display }}>
        {array.map((link) => (
          <li className="category-item" key={link.name}>
            <Link to={`/${link.user}/${link.repository}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
