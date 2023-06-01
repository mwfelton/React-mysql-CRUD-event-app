import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as DummyLogo } from '../../assets/dummy.svg'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'

import './header.styles.css';
import { CartContext } from '../../contexts/cart.context';

const Navbar = () => {
    const {isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <div className="navigation">
                <Link className='nav-link' to='/'>
                    <DummyLogo  className="logo" />
                </Link>
                <div className='nav-links-container  '>
                    <Link className='nav-link' to='/workshops'>
                        Workshops
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        Contact
                    </Link>
                    <Link className='nav-link' to='/admin-signin'>
                        Admin Login
                    </Link>
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar
