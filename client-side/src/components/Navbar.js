import React, {useState} from "react";
import '../App.css'
import { GoThreeBars } from "react-icons/go";

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <h1><a className="logo" href="/">Yogaagma</a></h1>
            </div>
            <div className="rightSide">
                <div className="nav-links" id={showLinks ? "hidden" : ""}>
                    <a href="/blog">Blog</a>
                    <a href="/yoga-classes-zurich">Yoga Classes</a>
                    <a href="/life-coach">Life Coaching</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}><GoThreeBars size={35} className="burger"/></button>
            </div>
        </div>
    )
}

export default Navbar