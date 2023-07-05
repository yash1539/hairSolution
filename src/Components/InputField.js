import React, { useState } from 'react'
import './InputField.css'
import { useNavigate } from 'react-router-dom'
const InputField = ({placeholder}) => {
    const [name,setName] = useState("")
    const navigate = useNavigate();
    const stepInside = () =>{
     navigate("/HomePage");
   }
    return (
        <div className='inputSection'>
        <div className="inputSection_react">
                <img src="./assets/Star-Struck.svg" />
            </div>
            <div>
                <input type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder={placeholder}
                        className="inputField" />
                </div>
                <div onClick={stepInside}>
                    <img src="./assets/arrow-right.svg" alt="arrow-key" />
            </div>            
        </div>
  )
}

export default InputField
