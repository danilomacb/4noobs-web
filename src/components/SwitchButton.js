import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "../styles/switchButton.scss";

function SwitchButton() {
  let checkbox;

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.id = "dark-theme";
      checkbox.checked = true;
    }
  }, [checkbox]);

  function changeTheme() {
    if (localStorage.getItem("theme") === "light") {
      document.body.id = "dark-theme";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.id = "";
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <li id="switch-item">
      <FontAwesomeIcon icon={faSun} />
      <label id="switch">
        <input type="checkbox" onClick={changeTheme} ref={(input) => (checkbox = input)} />
        <span id="slider"></span>
      </label>
      <FontAwesomeIcon icon={faMoon} />
    </li>
  );
}

export default SwitchButton;
