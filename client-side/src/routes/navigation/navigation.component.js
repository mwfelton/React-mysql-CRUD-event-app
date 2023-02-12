import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as DummyLogo } from '../../assets/dummy.svg'

import './header.styles.css';

const Navbar = () => {
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
                    <Link className='nav-link' to='/admin'>
                        Admin
                    </Link>
                </div>  
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar
