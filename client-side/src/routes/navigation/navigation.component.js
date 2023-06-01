import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as DummyLogo } from '../../assets/lotus-2-svgrepo-com.svg'

import { UserAuth } from "../../contexts/admin.context";
import { useNavigate } from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'

import './header.styles.css';
import { CartContext } from '../../contexts/cart.context';

const Navbar = () => {
    const {isCartOpen } = useContext(CartContext)
    const { user, logout } = UserAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
          await logout()
          navigate('/')
          console.log('logged out')
        } catch (e) {
          console.log(e.message)
        }
      }

      return (
        <>
            <div className='navbar_component'>
                <div className='navbar'>
                    <div className='navbar_wrapper'>
                        <div className='logo'>
                            <Link className='nav-link' to='/'>
                                <DummyLogo  className="logo" />
                            </Link>
                        </div>
                        <div className='navbar_links'>
                           <Link className='nav-link' to='/admin-page'>
                               Admin Page
                           </Link>
                           <Link className='nav-link' to='/workshops'>
                               Workshops
                           </Link>
                           <Link className='nav-link' to='/contact'>
                               Contact
                           </Link>
                           <Link className='nav-link' to='/sign-in'>
                               Admin Login
                           </Link>
                       </div>
                   </div>
                   <Outlet />
                </div>
            </div>
        </>
      )

    // if ( user ){
    //     return (
    //         <Fragment>
    //             <div className="navigation">
    //                 <Link className='nav-link' to='/'>
    //                     <DummyLogo  className="logo" />
    //                 </Link>
    //                 <div className='nav-links-container  '>
    //                     <p>logged in as Admin</p>
    //                     <Link className='nav-link' to='/admin-page'>
    //                         Admin Page
    //                     </Link>
    //                     <Link className='nav-link' to='/workshops'>
    //                         Workshops
    //                     </Link>
    //                     <Link className='nav-link' to='/contact'>
    //                         Contact
    //                     </Link>
    //                     <Link className='nav-link' to='/sign-in'>
    //                         Admin Login
    //                     </Link>
    //                     <Link className='nav-link' to='/'>
    //                         <button onClick={handleLogout}>Logout</button>
    //                     </Link>
    //                     <CartIcon />
    //                 </div>
    //                 {isCartOpen && <CartDropDown />}
    //             </div>
    //             <Outlet />
    //         </Fragment>
    //     )
    // } else {
    //     return (
    //         <Fragment>
    //             <div className="navigation">
    //                 <Link className='nav-link' to='/'>
    //                     <DummyLogo  className="logo" />
    //                 </Link>
    //                 <div className='nav-links-container  '>
    //                     <Link className='nav-link' to='/workshops'>
    //                         Workshops
    //                     </Link>
    //                     <Link className='nav-link' to='/contact'>
    //                         Contact
    //                     </Link>
    //                     <Link className='nav-link' to='/sign-in'>
    //                         Admin Login
    //                     </Link>
    //                     <CartIcon />
    //                 </div>
    //                 {isCartOpen && <CartDropDown />}
    //             </div>
    //             <Outlet />
    //         </Fragment>
    //     )
    // }
}

export default Navbar
