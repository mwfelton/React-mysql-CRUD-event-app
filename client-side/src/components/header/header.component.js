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
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}><GoThreeBars size={35} className="burger"/></button>
            </div>
        </div>
    )
}

export default Navbar

// import React from "react";
// import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/crown.svg'
// import { auth } from '../../firebase/firebase.utils'

// import './header.styles.scss';

// const Header = ({ currentUser }) => (
//     <div className="header">
//         <Link className="logo-container" to="/">
//             <Logo className="logo"></Logo>
//         </Link>
//         <div className="options">
//             <Link className="option" to='/shop'>
//                 SHOP
//             </Link>
//             <Link className="option" to='/shop'>
//                 CONTACT
//             </Link>
//             {
//                 currentUser ? 
//                 <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
//                 :
//                 <Link className="option" to='/signin'>SIGN IN</Link>
//             }
//         </div>
//     </div>
// )

// export default Header;