import React from 'react';
import './Navbar.css';
import cart from '../Images/HomeScreen/Cart.png';
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";
import back from '../Images/HomeScreen/FrameBack.png';

function Navbar() {
  return (
    <nav className='navBar'>
      <div className="navbar-icon">
        <back className="backNav"/>
        <VectorImage className="vectorImage" />
        <img src={cart} alt="Cart" className="cart" />
      </div>
    </nav>
  );
}

export default Navbar;
