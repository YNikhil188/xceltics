// IntroPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IntroAnimation from "./IntroAnimation";
import {
  FaChartPie,
  FaRobot,
  FaHistory,
  FaFileUpload,
  FaDatabase,
  FaDownload
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "../css/IntroPage.css";
import { gsap } from "gsap";
import logo from "../assets/xceltics.png"; // adjust path if needed


const IntroPage = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [buttonsReady, setButtonsReady] = useState(false);
  const navigate = useNavigate();

  // Prevent scrolling during animation
  useEffect(() => {
    document.body.style.overflow = showAnimation ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAnimation]);

  // Background reset
  useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setTimeout(() => setButtonsReady(true), 100);
  };

  // GSAP exit animation on button click
  const handleLogin = () => {
    const tl = gsap.timeline({
      onComplete: () => navigate("/login"),
    });
    tl.to(".intro-form", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      {showAnimation && <IntroAnimation onComplete={handleAnimationComplete} />}
      <div
        className="intro-container"
        style={{ visibility: showAnimation ? "hidden" : "visible" }}
      >

        <div className="intro-main"> 
                 
          <div className="intro-right">
            <div
              className="intro-form"
              style={{
                opacity: buttonsReady ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <div className="intro-logo">
                <img src={logo} alt="Xceltics Logo" />
              </div>
              <div className="intro-buttons">
                <button onClick={handleLogin} className="login-btn">
                  🚀 Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="features-section">
          <h3>Features</h3>
          <Marquee speed={50} gradient={false}>
            <div className="feature-item">
              <FaChartPie className="feature-icon" />
              <p>Generate 2D/3D Charts</p>
            </div>
            <div className="feature-item">
              <FaRobot className="feature-icon" />
              <p>AI-Powered Insights</p>
            </div>
            <div className="feature-item">
              <FaHistory className="feature-icon" />
              <p>Upload History</p>
            </div>
            <div className="feature-item">
              <FaFileUpload className="feature-icon" />
              <p>Excel File Upload</p>
            </div>
            <div className="feature-item">
              <FaDatabase className="feature-icon" />
              <p>Data Analysis</p>
            </div>
            <div className="feature-item">
              <FaDownload className="feature-icon" />
              <p>Download Reports</p>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
