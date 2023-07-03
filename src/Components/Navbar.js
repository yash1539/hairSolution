import React from 'react';
import './Navbar.css';
import cart from '../Images/HomeScreen/Cart.png';
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";
import back from '../Images/HomeScreen/FrameBack.png';

function Navbar(props) {

  return (
    <nav className='navBar'>
      <div className="mx-10 w-10">

      {
            !props.hideBack &&
        <img src={back} alt="back"  />
        }  
      </div>
      {
            !props.hideLogo &&
        <VectorImage className="vectorImage" />
      }
        <div className="mx-10 w-10">
        {
            !props.hideCart &&
        <img src={cart} alt="Cart"  />
        }
        </div>
    </nav>
  );
}

export default Navbar;
