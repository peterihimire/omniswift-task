import React from "react";
import "./styles.scss";
// import Dropdown from "../dropdown";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import ActiveLink from "../../../hoc/activeLink";
import { Link } from "react-router-dom";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  return (
    <nav className={`nav ${isOpen ? "show" : ""}`} id='navbar'>
      <ul className='navLinks'>
        <li>
          <Link to='/'>Home</Link>
          {/* <Link name='Home' href='/' linkClass={`darkText`} /> */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
