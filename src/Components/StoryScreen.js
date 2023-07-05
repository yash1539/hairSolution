import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import './StoryScreen.css';
import { useNavigate } from "react-router-dom";


const StoryScreen = () => {
    const navigate = useNavigate();
    const stepInside = () =>{
     navigate("/userInfoPage");
   }
    return (
        <>
            <div className="img-background-type-4" >
                <div className="">

                    <Navbar type={true}/>
                    <div className="screen-container">
                        <div className="Slider-Story">
                            {/* add slider logic */}
                        </div>
                        <div className="White-Box-container">
                        <div  onClick={stepInside} className="White-Box">
                        </div>

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