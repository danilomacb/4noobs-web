import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Category({ title, array }) {
  const [displayed, setdisplayed] = useState(false);

  let category;
  let categoryList;

  function changeDisplayed() {
    if (!displayed) {
      categoryList.style.display = "block";
      category.classList.add("displayed");
      setdisplayed(true);
    } else {
      categoryList.style.display = "none";
      category.classList.remove("displayed");
      setdisplayed(false);
    }
  }

  return (
    <>
      <li
        className="category"
        onClick={changeDisplayed}
        ref={(li) => {
          category = li;
        }}
      >
        {title}
        {!displayed ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </li>
      <ul
        className="category-list"
        ref={(ul) => {
          categoryList = ul;
        }}
      >
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
