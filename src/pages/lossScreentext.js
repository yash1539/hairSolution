import React, { useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import Bttn from "../Components/Button"
import profileImage from "../Images/HomeScreen/profile.png";
import "./BookingConfirmation.scss"
import { useNavigate } from "react-router-dom";
const LossScreen = () => {

    const navigate = useNavigate();
    const stepInside = () => {
        navigate("/ClaimNow");
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
                                OOPS!
                            </div>
                            <div className="context-thanks my-10 ">
                                Sorry Gurmeher, You haven’t won this time but you will have more chances in the future.And there’s lots more to explore within the Hair Bar.
                            </div>
                        </div>
                        <div className="button-1 w-available mx-10 my-10" onClick={stepInside}>

                            <Bttn text={"TRY AGAIN"} type={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LossScreen;