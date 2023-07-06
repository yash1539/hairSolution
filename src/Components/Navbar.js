import {useState} from 'react';
import './Navbar.scss';
import cart from '../Images/HomeScreen/Cart.png';
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";
import back from '../Images/HomeScreen/FrameBack.png';
import Cart from './Cart'
function Navbar(props) {

  const [isVisible , setIsVisible] = useState(false)
// type true for logo and skip only 
// type false for back , logo , cart
// center for logo in center

if(props.type){
return (
  <>
   <nav className='navBar'>
     {props.center && <div  className="mx-10 w-10"></div>}
     {!props.hideLogo &&<VectorImage className="mx-10 logo" />}
      <div className="mx-10 w-10">
        <div>Skip</div>
       </div>
    </nav>
     {
props.center && 
       <div  className="mx-10 w-10"></div>
     }
                   
                    {
            !props.hideLogo &&
        <VectorImage className="mx-10 logo" />
      }
          <div className="mx-10 w-10">
        
        <div className='Skip-style'>SKIP</div>
       
        </div>
            </nav>
  </>
)
} else {
   return (
    <>
    <nav className='navBar'>
      <div className="mx-10 w-10" >
      {!props.hideBack &&<img src={back} alt="back"  />}  
      </div>
      {!props.hideLogo && <VectorImage className="logo" />}
        <div className="mx-10 w-10">
        {!props.hideCart && !props.Skip && <img src={cart} alt="Cart" onClick={()=>{setIsVisible(!isVisible)}} />}
        {
            props.Skip &&
                  <div>Skip</div>
        }
        </div>
    </nav>
    <Cart isVisible={isVisible}/>
    </>
  );
}
}

export default Navbar;
