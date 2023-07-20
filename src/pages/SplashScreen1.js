import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";
import profileImage from "../Images/HomeScreen/profile.png";

import './SplashScreen1.scss'
const SplashScreen1 = () => {
    const navigate = useNavigate();
    const stepInside = () => {
        navigate("/mainScreen");
    }


    return (
        <>
            <div className="img-background-type-2">
                <div className="screen-container-1" onClick={stepInside}>
                    <VectorImage className="vectorImage Splash-icon" />
                    <div className="profileBackground">
                        {/* <img src={profileBackground} alt="Overlay" className="profileBackground" /> */}
                        <div>

                            <img src={profileImage} alt="Overlay" className="profileImage-2" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SplashScreen1;