import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Nav = ({ isOpen }) => {
  return (
    <nav className={`nav ${isOpen ? "show" : ""}`} id='navbar'>
      <ul className='navLinks'>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
