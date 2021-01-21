import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import logo from '../images/logo-dark.svg';
import { BsArrowUp } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';


const Navbar = () => {
    const [stickyNav, setStickyNav] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        };
    });

    return (
        <>
            <button className={stickyNav ? 'back-to-top' : 'back-to-top hidden'} onClick={() => window.scroll(0, 0)}><BsArrowUp /></button>

            <header>
                <nav className={stickyNav ? 'navbar py-3' : 'navbar py-25'}>
                    <Container>
                        <div className='logo-area'>
                            <Link to='/'><img src={logo} alt='Next Blog' /> </Link>
                            <div className='hamburger'>
                                <MdMenu />
                            </div>
                        </div>

                            <div className='desktop-nav d-none d-md-block'>
                                <ul>
                                    <li><Link to='/'>HOME</Link> </li>
                                    <li><Link to='/blogs'>BLOGS</Link> </li>
                                    <li><Link to='/about'>404</Link> </li>
                                    <li><Link to='/search/web-design'>WEB DESIGN</Link> </li>
                                    <li><Link to='/contact'>CONTACT</Link> </li>
                                </ul>
                            </div>

                            <div className='mobile-nav d-md-none'>

                            </div>
                    </Container>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
