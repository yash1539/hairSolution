import React from "react";
import homeImage from "../Images/HomeScreen/1--3.jpg";
import profileImage from "../Images/HomeScreen/profile.png";
import "./MainScreen.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const MainSceen = () => {
  const navigate = useNavigate();
 const stepInside = () =>{
  navigate("/TrendingStory");
}
  // return (
  //   <div className="homePageWrapper">
  //     {/* <VectorImage className="vectorImage" /> */}
  //     <img src={homeImage} alt="Home" className="homeImage" />
  //     <img src={profileImage} alt="Overlay" className="profileImage" />
  //     <div className="description-wrapper">
  //       <span className="description">
  //         Hi I’m Tia, your stylist, it’s great to meet you I’m here to help you
  //         explore TRESemmé’s Hair Pro, and to connect you to style advice from
  //         our experts
  //       </span>
  //     </div>
  //     <button className="step-inside-button">
  //       <span className="step-inside" onClick={stepInside}>STEP INSIDE</span>
  //     </button>
  //     <div className="terms">
  //       By clicking on “Step Inside”, I consent that I have read and understand
  //       the <span className="privacy-policy">Privacy Policies</span>
  //     </div>
  //   </div>
  // );
  return (
    <>
    <div className="img-background">
   
      <Navbar  hideBack={true} hideLogo={false} hideCart={true}  />

    <div className="main-screen-container d-flex ">




     <img src={profileImage} alt="Overlay" className="profileImage" />
     <div className="description-wrapper">
       <span className="description">
         Hi I’m Tia, your stylist, it’s great to meet you I’m here to help you
         explore TRESemmé’s Hair Pro, and to connect you to style advice from
         our experts
       </span>
     </div>
     <button className="step-inside-button">
       <span className="step-inside" onClick={stepInside}>STEP INSIDE</span>
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

export default MainSceen;
