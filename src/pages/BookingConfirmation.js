import React, { useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import Bttn from "../Components/Button"
import profileImage from "../Images/HomeScreen/profile.png";
import "./BookingConfirmation.scss"
import { useNavigate } from "react-router-dom";
const BookingConfirmation = () => {

    const navigate = useNavigate();
    const stepInside = () =>{
     navigate("/lossScreen");
   }
    return (
        <>
            <div className="img-background-type-1">
                <Navbar hideBack={true} />
                <div className="screen-container-1">
                  <div className="input-container mx-10">

              
                    <div className="profile-image">
                        <img src={profileImage} alt="Overlay" />
                    </div>
                    <div>

                  
                    <div className="Congratulation my-10 ">
                    Congratulations! 
                    </div>
                    <div className="context-thanks my-10 ">
                    Gurmeher, you have successfully booked your masterclass for May 02, 2023. Till then you can explore other services in the Hair Pro
                    </div>
                    </div>
                    <div className="button-1 w-available mx-10 my-10" onClick={stepInside}>

                        <Bttn text={"EXPLORE MORE"} type= {true} />
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default BookingConfirmation;