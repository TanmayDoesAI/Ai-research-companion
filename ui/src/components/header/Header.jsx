import React, { useEffect, useState } from "react";

import "./style.css";
import "../../App.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo"><img src="./Images/logo.png" alt="" /></div>
        <div className="right-box">
          <div className="search-container">search icon</div>
        </div>
      </div>
      <div className="tagline-container">
        <h2>AI-SAC: AI-enhanced Scholarly Assistance Companion</h2>
        <h3>Elevating Your Research Journey with Intelligent Guidance.</h3>
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
