import React from "react";
import imgtia from "../Images/HomeScreen/profile.png";
import "./MasterclassThanks.css";
const MasterclassThanks= () => {
    const content_title = "Hair Care Masterclass";
    const content = "Hello Gurmeher! Warmly welcome to your exclusive masterclass. Get ready for an amazing learning experience!";
    const  btn_title = "STEP INSIDE";
  return (
    <>
      <div>
      <div className="background-img">

          <img
            className="imgtia"
            style={
              btn_title === "EXPLORE MORE"
                ? {  backgroundColor: "rgb(10,0,0)" }
                : { backgroundColor: "black" }
            }
            src={imgtia}
            alt="girl-img"
          />
    
        <div className="title-st">
          <p className="title-topography">{content_title}</p>
        </div>


        <div className="content">
          <p>{content}</p>
        </div>
        <button className="btn">{btn_title}</button>
        </div>
        </div>
    </>
  );
};

export default MasterclassThanks;
