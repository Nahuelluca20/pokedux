import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="Navbar">
      <Link className="links" to={`/`}>
        Home
      </Link>
      <Link className="links" to={`/favorites`}>
        Favorites
      </Link>
    </div>
  );
};

export default Navbar;
