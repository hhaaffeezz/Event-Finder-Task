import React from "react";
import "./index.css";
import logo from "../../assets/logo.png"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <img src={logo} alt="" width= "55px" height="55px" className="footer_logo" />
        <p className="footer_text">
          Discover the best events near you. From concerts to conferences, we've got it all.
        </p>
        <div className="footer_links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
        <p className="footer_copy">&copy; {new Date().getFullYear()} EventSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
