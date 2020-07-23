import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "../styles/switchButton.scss";

function SwitchButton() {
  let checkbox;
  let slider;
  let circle;

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }

    if (localStorage.getItem("theme") === "dark") {
      circle.style.transform = "translateX(26px)";
      slider.classList.add("checked");

      document.body.id = "dark-theme";
      checkbox.checked = true;
    }
  }, [circle, slider, checkbox]);

  function changeTheme() {
    if (localStorage.getItem("theme") === "light") {
      circle.style.transition = "0.4s";
      circle.style.transform = "translateX(26px)";
      slider.classList.add("checked");

      document.body.id = "dark-theme";
      localStorage.setItem("theme", "dark");
    } else {
      circle.style.transition = "0.4s";
      circle.style.transform = "translateX(0px)";
      slider.classList.remove("checked");

      document.body.id = "";
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <li id="switch-item">
      <FontAwesomeIcon icon={faSun} />
      <label id="switch">
        <input type="checkbox" onClick={changeTheme} ref={(input) => (checkbox = input)} />
        <span id="slider" ref={(span) => (slider = span)}>
          <div id="circle" ref={(div) => (circle = div)}></div>
        </span>
      </label>
      <FontAwesomeIcon icon={faMoon} />
    </li>
  );
}

export default SwitchButton;
