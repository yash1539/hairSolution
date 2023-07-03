import React, { useState, useRef } from "react";
import "./OtpScreen.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const OtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    // Replace the condition with your OTP verification logic
    if (enteredOtp === "1234") {
      // OTP verified successfully
      navigate("/MasterclassThanks")
      console.log("OTP verified successfully!");
    } else {
      // Incorrect OTP
      console.log("Incorrect OTP!");
    }
  };

  return (
    <>
    <div className="img-background">
      {/* <div className="navBar"> */}
      
      {/* <Navbar hideBack={true} hideLogo={false} hideCart={true} /> */}
      <Navbar  />
    {/* </div> */}
    <div className="screen-container">
      <div className="otp-line otp-line-1">
        <h1>Enter the OTP sent to</h1>
      </div>
      <div className="otp-line otp-line-2">
        <h1>8120917874</h1>
      </div>
      <div className="otp-line otp-line-3">
        <h1>Change registered number</h1>
      </div>
      <form onSubmit={handleOtpVerification}>
        <div className="otp-input-container">
          {otp.map((value, index) => (
            <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            ref={(ref) => (inputRefs.current[index] = ref)}
            maxLength={1}
            className="otp-input"
            />
            ))}
        </div>
        <div className="otp-line otp-line-4">
          <h1>Didn’t receive any OTP?</h1>
          <p className="resend-otp-text">Resend OTP</p>
          <p className="retry-text">Retry in 00:30 secs</p>
        </div>
        <button type="submit" className="otp-verify-button">
          Verify OTP
        </button>
      </form>
    </div>
    </div>

            </>
  );
};

export default OtpScreen;
