import React from "react";
import logo from "../../assets/logo.png";
import "./index.css";

function Navbar() {
  return (
    <nav className="nav_bar">
      
        <img src={logo} alt="" width= "55px" height="55px" className="logo" />
    
      <ul className="nav_list">
        <li>Home</li>
        <li>Events</li>
        <li>Contact</li>

      </ul>
    </nav>
  );
}
export default Navbar;


