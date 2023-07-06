import React from 'react'
import './Cart.scss'

const Cart = ({isVisible}) => {
  return (
        <div className='cartSection'  style={isVisible ? {height: '75%'} : {height : '0px'}}>
            <div className='straightLine'></div>
             <div className='cartSection_title'>
               <h3>YOUR CART</h3>
             </div>
             <div className='cartSection_items'>
                 <p>No items added yet</p>
             </div>
             <div className='cartSection_button'>
             <button>checkout</button>
             </div>
       </div> 
  )
}

export default Cart
