import React from 'react'
import './BookNowCard.css'
import share from '../Images/HomeScreen/Share.png';
import { useNavigate } from 'react-router-dom';
function BookNowCard() {
    const navigate = useNavigate();
    const stepInside = () =>{
     navigate("/OtpScreen");
   }
    return (
        <div className='Card-container'>
            <div className='card-upside'>
            <div className='card-seat'>2 Seats left</div>
            <img src={share} alt="back"  />
            </div>
            <div className='card-text-1'>May 2 | 7-8pm</div>
            <div className='card-text-2'>Hair Conditioning </div>
            <div className='card-text-3'>Yash</div>
            <button type="submit" className="book-now--button" onClick={stepInside}>BOOK NOW</button>
        </div>
    )
}

export default BookNowCard