import React, { useEffect, useState } from 'react';
import './Slider.css'

// import anga from '../src-imgs/imageSlider/ag.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import SliderData from './SliderData';
import SliderBtn from './SliderBtn';



const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if( slideIndex !== SliderData.length){
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === SliderData.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if( slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(SliderData.length)
    }
  }

  return (
    <section className="container-slider">
      <div className='sliderBox'>

      <div className='sliderLeft'>
        <h1>Angamardana</h1>      
        <p>Angamardana is a system rooted in yoga that offers to everyone the opportunity to invigorate the body and to reach peak physical and mental health.</p>
      </div>

      <div className='sliderRight'>
        {SliderData.map((obj, index) => {
            return (
              <div 
                key={obj.id}
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                  <img src={process.env.PUBLIC_URL + `/img/slider/img${index + 1}.jpg`} />
               </div>
                )
              })}
          
        <SliderBtn moveSlide={nextSlide} direction={"next"}/> 
        <SliderBtn moveSlide={prevSlide} direction={"prev"}/> 

      </div>
  
    </div>

    </section>
  )};

export default Slider;

{/* <div className="content1">
              <div className="content2">
                <h1>Angamardana</h1>
                
                <p>Angamardana is a system rooted in yoga that offers to everyone the opportunity to invigorate the body and to reach peak physical and mental health.</p>

                <p>“Angamardana” means gaining complete mastery over the limbs, organs and other parts of the body. This practice revitalizes the body on all levels including the muscles, blood circulation, skeletal structure, nervous system, and the basic energy system. It strengthens the spine, builds physical strength, fitness and tenacity, taking years off the body.​</p>
              </div>

              <div className='content3'>
                <IoIosArrowBack className="forwardBack"/>
                <img className="sliderImage" src={anga} alt="" />
                <IoIosArrowForward className="forwardArrow" />
              </div>
            </div> */}