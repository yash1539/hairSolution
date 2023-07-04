import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";

const IntoScreen = () => {
    const [val,setVal] = useState(true)

const  updateVal = () =>{
    setVal(!val)
}
    return (
        <>
        <div className="img-background-type-2" onClick={updateVal}>
      
          <Navbar type={true}  center={true}  />

        <div className="screen-container-1">
       
        </div>
        </div>
    
                </>
      );
    };
    
    export default IntoScreen;