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
          <div className="search-container"><i class="fas fa-magnifying-glass"></i></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
