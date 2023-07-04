import React from "react";
import profileImage from "../Images/HomeScreen/profile.png";
import "./MainScreen.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";

import stepinside from "../Images/HomeScreen/stepinside.png"
const MainScreen = () => {
  const navigate = useNavigate();
  const stepInside = () => {
    navigate("/HomePage");
  }
  return (
    <>
      <div className="img-background">
      <VectorImage className="vectorImage" />

        <Navbar hideBack={true} hideLogo={false} hideCart={true} />
        <div className="main-screen-container d-flex ">
          <img src={profileImage} alt="Overlay" className="profileImage" />
          <div className="description-wrapper">
            <span className="description">
            Hi I’m Tia, your stylist, it’s great to meet you  I’m here
            to help you explore TRESemmé’s Hair Pro, and to
            connect you to style advice from our experts
            </span>
          </div>
          <button className="step-inside-button">
            <div className="step-Button">STEP INSIDE</div>
          {/* <img src={stepinside} alt="" /> */}
            {/* <span className="step-inside1" onClick={stepInside}>STEP INSIDE</span> */}
          </button>
          <div className="terms">
            By clicking on “Step Inside”, I consent that I have read and understand
            the <span className="privacy-policy">Privacy Policies</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default MainScreen;
