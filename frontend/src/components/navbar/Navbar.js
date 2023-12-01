import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file for styling
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {MdSpaceDashboard} from "react-icons/md"
import {SlLogin} from "react-icons/sl"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
   
  };

  return (
    <nav className="navbar">
      <div className="title">
        <div className="logotitle">Assignment</div>
        <img
          className="logoImg"
          src="https://w7.pngwing.com/pngs/335/336/png-transparent-speedometer-computer-icons-dashboard-speedometer-angle-motorcycle-rim-thumbnail.png"
          alt="logo"
        ></img>
      </div>
      <div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <  Link to="/" className="nav-link" onClick={handleLinkClick}>
          <div><MdSpaceDashboard style={{fontSize:25}}/></div>
          <div>Dashboard</div>
          </Link>
          <  Link to="/login" className="nav-link" onClick={handleLinkClick}>
          <div><SlLogin style={{fontSize:25}}/></div>
          <div>Login</div>
          </Link>
      </div>
      {menuOpen ? (
        <div onClick={handleLinkClick}>
          <RxCross2 className="closeBtn" />
        </div>
      ) : (
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? "open" : ""}`} />
          <span className={`bar ${menuOpen ? "open" : ""}`} />
          <span className={`bar ${menuOpen ? "open" : ""}`} />
        </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
