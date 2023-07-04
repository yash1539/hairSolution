import React from 'react';
import './AlertOtp.css';

function AlertOtp(props) {
  return (
    <>
    <div className='text-alert'>
    <div className='text-1-alert'>OTP Sent</div>   
    <div className='text-2-alert'>new OTP has sent to the registered number</div> 
    </div>
       <div className='text-alert-invalid'>
       <div className='text-1-alert'>Invalid OTP</div>   
       <div className='text-2-alert'>entered OTP is invalid</div> 
       </div>
       </>
  );
}

export default AlertOtp;
