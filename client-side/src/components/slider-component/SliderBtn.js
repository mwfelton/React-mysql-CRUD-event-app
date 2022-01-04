import React, { useEffect, useState } from 'react';
import './Slider.css'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

  const SliderBtn = ({direction, moveSlide}) => {

  return (
    <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >

        {direction === "next" ? <IoIosArrowForward /> : <IoIosArrowBack />}
        
       
    
    </button>
      
    
  )};

export default SliderBtn;