import React, { useEffect, useState } from 'react';

  const Content = () => (

    <section className="contentSection">
      <div className="contentMain">
      <div className='whatWeTeach'>
        <h1>MY CONTENT</h1>
        <div className='workshopCards'>
          <div className="workshopCard">
            <h2>Yogasanas</h2>
            <p>Align with the divine</p>
            <button className='contentButton'>Learn more</button>
          </div>
          <div className="workshopCard">
            <h2>Surya Kriya</h2>
            <p>Fire up the sun within</p>
            <button className='contentButton'>Learn more</button>
          </div>
          <div className="workshopCard">
            <h2>Angamardana</h2>
            <p>The ultimate yogic workout</p>
            <button className='contentButton'>Learn more</button>
          </div>
          <div className="workshopCard">
            <h2>Bhuta Shuddhi</h2>
            <p>Cleanse the 5 elements</p>
            <button className='contentButton'>Learn more</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );

export default Content;