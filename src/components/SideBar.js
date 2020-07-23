import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../styles/sideBar.scss";
import links from "../4noobs.json";
import Category from "./Category";
import Socials from "./Socials";
import SwitchButton from "./SwitchButton";

function SideBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  let nav;

  function showMenu() {
    nav.style.display === "flex" ? (nav.style.display = "none") : (nav.style.display = "flex");
    menuOpened ? setMenuOpened(false) : setMenuOpened(true);
  }

  return (
    <>
      <button id="menu-button" onClick={showMenu}>
        {menuOpened ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <nav ref={(element) => (nav = element)}>
        <ul id="main-list">
          <li id="home">
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/images/he4rt.png`} alt="4noobs" />
            </Link>
          </li>

          <SwitchButton />

          <Category title="Linguages de Programação" array={links.programingLanguages} />
          <Category title="Frameworks" array={links.frameworks} />
          <Category title="Ferramentas" array={links.tools} />
          <Category title="Sistemas Operacionais" array={links.operationalSystems} />
          <Category title="Design" array={links.design} />

          <li id="model">
            <Link to={`/${links.model.user}/${links.model.repository}`}>{links.model.name}</Link>
          </li>

          <Socials />
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
