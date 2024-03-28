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
        <div className='bg-blue-300 px-4 sm:px-8 mx-auto max-w-[1500px] h-[8vh]'>
            {/* Navbar container */}
            <div className="flex items-center justify-between h-12 lg:h-20 bg-[#223]/30 rounded-b-3xl shadow-lg px-4">
                
                {/* Brand/logo */}
                <div className="text-white text-xl sm:text-2xl">
                    <a href='#' className='font-bold'><span>Mohd Sameer</span></a>
                </div>

                {/* Navigation links */}
                <ul className="text-gray-700 font-medium hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-2xl">
                    <li className="p-2"><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li className="p-2"><NavLink to="/about" activeClassName="text-black">About</NavLink></li>
                    <li className="p-2"><NavLink to="/portfolio" activeClassName="text-black">Portfolio</NavLink></li>
                    <li className="p-2"><NavLink to="/contact" activeClassName="text-black">Contact</NavLink></li>
                </ul>

                {/* Hamburger menu icon */}
                <div onClick={handleNav} className='block md:hidden text-white z-40'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
