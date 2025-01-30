import React from "react";
import "./Home.css";
import headshot from "./headshot.png";
import SocialIcons from "../components/SocialIcons";
import Sidebar from "../components/Sidebar";
const Home: React.FC = () => {

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <Sidebar />
      </div>
      <div className="home-left">
        <h1 className="home-title">Carlos Fernandez</h1>
        <h2 className="home-subtitle">Software Engineer</h2>
        <p className="home-bio">Current Computer Science Student at the University of Illinois at Urbana-Champaign. Currently SWE Intern at State Farm Insurance. Formerly at Snap Inc. Baller.</p>
      </div>
      <div className="home-right">
        <div className="home-photo-container">
          <img src={headshot} alt="carlos" className="home-photo" />
        </div>
        <SocialIcons orientation="horizontal" />
      </div>
    </div>
  );
};

export default Home;
