import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleNavigation = (path) => {
        setMenu(false); // Close the menu
        navigate(path); // Redirect to the clicked route
    };

    // Close the menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false); // Close the menu
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>

            <div className="navbar" ref={menuRef}>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menu ? faTimes : faBars} />
                </div>
                <div className="heading">
                    <h1><Link className='link-head-main' to="/">Missty</Link></h1>
                </div>
                <div className={`navbar-menu ${menu ? 'active' : ''}`}>
                    <span className="links" onClick={() => handleNavigation('/')}>Home</span>
                    <span className="links" onClick={() => handleNavigation('/about')}>About Us</span>
                    <span className="links" onClick={() => handleNavigation('/contact')}>Contact Us</span>
                    <span className="links" onClick={() => handleNavigation('/admin')}>Admin</span>
                    <span className="links" onClick={() => handleNavigation('/contact')}>Contact Us</span>


                </div>

                <div className="navbar-btn">
                    <button className="navbar-btn-login">Login</button>
                    {/* <button className="navbar-btn-signup">Signup</button> */}
                </div>
            </div>
        </>
    );
};

export default Navbar;
