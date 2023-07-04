import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import './StoryScreen.css';
import { useNavigate } from "react-router-dom";


const StoryScreen = () => {
    const navigate = useNavigate();
    const stepInside = () =>{
     navigate("/masterClass");
   }
    return (
        <>
            <div className="img-background-StoryPage">
                <div className="img-background-StoryPage--1">
                    {/* <button type="submit" onClick={stepInside} className="story-skip-button">
                        SKIP
                    </button> */}
                    <Navbar hideBack={true} hideLogo={false} hideCart={true} />
                    <div className="screen-container">
                        <div className="Slider-Story">
                            {/* add slider logic */}
                        </div>
                        <div  onClick={stepInside} className="White-Box">

                            {/* add story logic */}
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default StoryScreen;