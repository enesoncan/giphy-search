import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="contact">
        <li>Contact</li>
      </Link>
    </ul>
  );
}

export default Nav;
