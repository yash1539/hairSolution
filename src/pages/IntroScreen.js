import React, { useState } from "react";
import './IntroScreen.scss'
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import InputField from "../Components/InputField";

const IntroScreen = () => {

  return (
    <>
      <div className="img-background-type-5">
        <Navbar type={true} />
        <div className="screen-container-1">
          <div className="card-Container-1">

            <Card text={"Hi there! I'm Tia, your personal stylist, So I can make your experience more personalised, please tell me your name"} />
          </div>
          <div className="Input-1-tia w-available">
            <InputField placeholder="Enter your name" />
          </div>

        </div>
      </div>
    </>
  );
};

export default IntroScreen;