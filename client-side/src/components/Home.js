import React, { useEffect, useState } from 'react';
import background from "../src-imgs/bg-overlay.jpg";
import Navbar from './Navbar';
import Content from './Content';
import Slider from './slider-component/Slider';

  const Home = () => (
    <section>
      <div className="main-bg" style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
          <div className="title-container">
            <h1 className="title">YOGAAGMA</h1>
            <h2 className="sub-heading">ISHA HATHA YOGA ZURICH,</h2>
            <h2 className="sub-heading">SWITZERLAND</h2>

          </div>
      </div>
      <div>
        <Slider />
        <Content />
      </div>
    </section>
  );

export default Home;