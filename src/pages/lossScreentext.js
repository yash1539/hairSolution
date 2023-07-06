import React, { useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import Bttn from "../Components/Button"
import profileImage from "../Images/HomeScreen/profile.png";
import "./BookingConfirmation.scss"
import { useNavigate } from "react-router-dom";
const lossScreen = () => {

    const navigate = useNavigate;
    const stepInside = () =>{
     navigate("/OtpScreen");
   }

   
    return (

        <>
            <div className="img-background-type-1">
                <Navbar hideBack={true} />
                <div className="screen-container">
                    <div className="profile-image">
                        <img src={profileImage} alt="Overlay" className="profileImage-2" />
                    </div>
                    <div className="Congratulation">
                    Oops! 
                    </div>
                    <div className="context-thanks">
                    Sorry Gurmeher, You haven’t won this time but you will have more chances in the future.And there’s lots more to explore within the Hair Bar.                     </div>
                    <div className="button-1 mx-10 my-10" onClick={stepInside}>

                        <Bttn text={"TRY AGAIN"} />
                    </div>


                </div>
            </div>
        </>
    );
};

export default lossScreen;