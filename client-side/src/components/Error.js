import React from "react";
import '../App.css'
import Navbar from './Navbar';
import bulb from '../src-imgs/error.jpg';

function Error() {

    return (
        <section className="errorPage">

        <div className="error">
            <img src={bulb} alt="" className='bulb' />
            <h2>Unable to load Workshops......</h2>
        </div>

    </section>
    )
}

export default Error