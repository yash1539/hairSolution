import React from "react";
import imgtia from "../Images/HomeScreen/profile.png";
import "./MasterClass_ThankYou.css";
const MasterClas_ThankYou = (props) => {
  return (
    <>
      <div className="background-img">
        <div className="imgtia">
          <img
            className="img-tia"
            style={
              props.btn_title === "EXPLORE MORE"
                ? { borderRadius: "48%", backgroundColor: "rgb(10,0,0)" }
                : { borderRadius: "100%", backgroundColor: "black" }
            }
            src={imgtia}
          />
        </div>
        <div className="title-st">
          <p className="title-topography">{props.content_title}</p>
        </div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <button className="btn">{props.btn_title}</button>
      </div>
    </>
  );
};

export default MasterClas_ThankYou;
