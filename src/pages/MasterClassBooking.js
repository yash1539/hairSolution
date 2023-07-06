import React, { useState } from "react";
import "./MasterClassBooking.scss";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Button from "../Components/Button";

// Components/Card";
import InputField from "../Components/InputField";
import { useNavigate } from "react-router-dom";

const MasterClassBooking = () => {
  const navigate = useNavigate();
  const stepInside = () => {
    navigate("/OtpScreen");
  };
  return (
    <>
      <div className="img-background-type-5">
        <Navbar />
        <div className="screen-container-2 mx-10">
          {/* <div className="card-Container-1">

            <Card text={"Hi there! I'm Tia, your personal stylist, So I can make your experience more personalised, please tell me your name"} />
          </div>
         */}
          <div className="heading  mx-10 my-10 w-available">
            <span>Masterclass booking</span>
          </div>
          <div className="w-available">
            <div className="my-10 mx-5 ">
              <p className="label">User Information</p>
              <InputField placeholder="Enter your name" />
            </div>
            <div className="my-10  mx-5 ">
              <InputField placeholder="Enter your name" />
            </div>
            <div className="my-10  mx-5 ">
              <InputField placeholder="Enter your name" />
            </div>
          </div>
          <div className=" bottom-sec label">
            <div className="mx-10 my-10">may 03, 2023</div>
            <div className="bottom-sec-2 my-10">
              <div className="mx-10">07:00 PM - 08:00 PM</div>
              <div className="mx-10">by Komal Pandey</div>
            </div>
            <div className=" my-10 mx-5 w-available">
              <Button text={"CONFIRM BOOKING"} onClick={stepInside} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterClassBooking;
