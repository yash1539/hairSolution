import React from "react";
import profileImage from "../Images/HomeScreen/profile.png";
import "./FirstScreen.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";

const FirstScreen = () => {
    const navigate = useNavigate();
    const stepInside = () => {
        navigate("/HomePage");
    }
    return (
        <>
            <div className="img-background" onClick={stepInside}>
                <div className="main-screen-container">
                    <VectorImage className="vectorImage" />
                    <img src={profileImage} alt="Overlay" className="profileImage" />
                </div>
            </div>

        </>
    );
};

export default FirstScreen;
