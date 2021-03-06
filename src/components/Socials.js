import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <li id="socials">
      <a href="https://discord.com/invite/5kwDQuv" target="_blank" rel="noopener noreferrer" className="social">
        <FontAwesomeIcon icon={faDiscord} />
      </a>
      <a href="https://twitter.com/he4rtdevs" target="_blank" rel="noopener noreferrer" className="social">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/heartdevs" target="_blank" rel="noopener noreferrer" className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.facebook.com/groups/he4rt" target="_blank" rel="noopener noreferrer" className="social">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </li>
  );
}

export default Socials;
