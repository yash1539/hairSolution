import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import Navbar from "./Navbar";

 import { useNavigate } from "react-router-dom";



const HomePage = () => {
  
  const navigate = useNavigate();
  const stepInside = () =>{
   navigate("/masterClass");
 }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true, 
        centerPadding: '30px', 
      };
      const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        centerMode: true, 
        centerPadding: '90px', 
      };

  return (
    <div className='img-background-type-6'>

    <Navbar/>
    
    <Slider {...settings}>
        
      <div>
        <h3 className="slide-content"  onClick={stepInside}>Slide 1</h3>
      </div>
      <div>
        <h3 className="slide-content"  onClick={stepInside}>Slide 2</h3>
      </div>
      <div>
        <h3 className="slide-content">Slide 3</h3>
      </div>
      <div>
        <h3 className="slide-content">Slide 4</h3>
      </div>
      
    </Slider>
    <Slider {...settings2}>
        
      <div>
        <h3 className="slide-content2" onClick={stepInside}>Slide 1</h3>
      </div>
      <div>
        <h3 className="slide-content2"  onClick={stepInside}>Slide 2</h3>
      </div>
      <div>
        <h3 className="slide-content2"  onClick={stepInside}>Slide 3</h3>
      </div>
      <div>
        <h3 className="slide-content2"  onClick={stepInside}>Slide 4</h3>
      </div>
      
    </Slider>
    
    </div>
  );
};

export default HomePage;
