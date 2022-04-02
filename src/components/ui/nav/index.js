import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

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
