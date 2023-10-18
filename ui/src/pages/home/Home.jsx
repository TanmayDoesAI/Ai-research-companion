import React from "react";
// import { Link } from "react-router-dom"; 
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
        <div className="tagline-container">
          <h2>AI-SAC: AI-enhanced Scholarly Assistance Companion</h2>
          <h3>Elevating Your Research Journey with Intelligent Guidance.</h3>
          {/* <Link to="/card"> */}
            <button className="get-started-button">Get Started</button>
          {/* </Link> */}
        </div>
      </div>
      <div className="right">
        <img src="./Images/home.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
