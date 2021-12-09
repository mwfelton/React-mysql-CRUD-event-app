import React from "react";
import '../App.css'
import Navbar from './Navbar';
import zen from '../src-imgs/zen-graphic.jpg';

function NoWorkshops() {

    return (
        <section className="errorPage">

        <div className="error">
            <img src={zen} alt="" className='zen' />
            <h2>At this time we there are no workshops to display</h2>
        </div>

    </section>
    )
}

export default NoWorkshops