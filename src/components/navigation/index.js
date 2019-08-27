import React, { Component } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = {
    active: false
  };

  activeHandler = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <ul className="navigate">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Nav;
