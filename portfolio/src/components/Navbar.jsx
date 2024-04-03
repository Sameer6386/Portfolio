import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // State to manage whether the navigation menu is open or closed
    const [nav, setNav] = useState(false);

    // Function to toggle the navigation menu
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <header className='px-4 sm:px-8 mx-auto max-w-[1500px] h-[8vh]'>
            {/* Navbar container */}
            <nav className="flex items-center justify-between h-12 lg:h-20 bg-[#223]/30 rounded-b-3xl shadow-lg px-4">
                {/* Brand/logo */}
                <div className="text-white text-xl sm:text-2xl font-bold">
                    <NavLink to="/">Mohd Sameer</NavLink>
                </div>

                {/* Navigation links */}
                <ul className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-2xl">
                    <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="selected">Contact</NavLink></li>
                </ul>

                {/* Hamburger menu icon */}
                <div onClick={handleNav} className='block md:hidden text-white z-40'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`fixed left-0 top-0 w-full bg-[#202121] ease-in-out duration-500 ${nav ? 'h-[50%] z-30' : 'left-[-100%]'}`}>
                <h1 className='text-3xl text-gray-300 m-4'>M.Sameer</h1>
                <ul className='p-8 text-4xl ml-20'>
                    <li><NavLink to="/" activeClassName="selected" onClick={handleNav}>Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="selected" onClick={handleNav}>About</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="selected" onClick={handleNav}>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="selected" onClick={handleNav}>Contact</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
