import React from "react";
import profileImage from "../Images/HomeScreen/profile.png";
import "./MainScreen.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";
import StepInsideButton from "./StepinsideButton";
const MainScreen = () => {
  const navigate = useNavigate();
  const stepInside = () => {
    navigate("/TrendingStory");
  }
  return (
    <>
      <div className="img-background-type-2">
        <VectorImage className="vectorImage" />
        <div className="screen-container-1">
          <img src={profileImage} alt="Overlay" className="profileImage-2" />
          <div className="description-wrapper">
            <span className="description">
              Hi I’m Tia, your stylist, it’s great to meet you  I’m here
              to help you explore TRESemmé’s Hair Pro, and to
              connect you to style advice from our experts
            </span>
          </div >
          <div className="button-stepInside-main" onClick={()=>stepInside()}>
            <StepInsideButton text={"STEP INSIDE"}  />
          </div>
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
