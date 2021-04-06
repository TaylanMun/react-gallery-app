import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/search/javascript">Javascript</NavLink>
        </li>
        <li>
          <NavLink to="/search/java">Java</NavLink>
        </li>
        <li>
          <NavLink to="/search/php">Php</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
