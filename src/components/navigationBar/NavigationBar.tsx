import React, { useState } from 'react';
import {Link, NavLink} from 'react-router';

const NavigationBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const navLinks = (
        <>
            <NavLink to="/" className={({ isActive }) =>
                `block md:inline-block px-4 py-2 font-semibold hover:text-red-500 ${
                    isActive ? 'text-red-500 font-semibold' : 'text-gray-700'
                }`} onClick={toggleMenu}
            >
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) =>
                `block md:inline-block px-4 py-2 font-semibold hover:text-red-500 ${
                    isActive ? 'text-red-500 font-semibold' : 'text-gray-700'
                }`} onClick={toggleMenu}
            >
                About
            </NavLink>
            <NavLink to="/education" className={({ isActive }) =>
                `block md:inline-block px-4 py-2 font-semibold hover:text-red-500 ${
                    isActive ? 'text-red-500 font-semibold' : 'text-gray-700'
                }`} onClick={toggleMenu}
            >
                Education
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) =>
                `block md:inline-block px-4 py-2 font-semibold hover:text-red-500 ${
                    isActive ? 'text-red-500 font-semibold' : 'text-gray-700'
                }`} onClick={toggleMenu}
            >
                Experience
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) =>
                `block md:inline-block px-4 py-2 font-semibold hover:text-red-500 ${
                    isActive ? 'text-red-500 font-semibold' : 'text-gray-700'
                }`} onClick={toggleMenu}
            >
                Skills
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
                `block md:inline-block px-4 py-2 font-semibold hover:text-red-500 ${
                    isActive ? 'text-red-500 font-semibold' : 'text-gray-700'
                }`} onClick={toggleMenu}
            >
                Contact
            </NavLink>
        </>
    );

    return (
        <div className="flex justify-between items-center px-4 py-3 md:px-10 md:py-5 top-0 fixed w-full z-10 bg-white shadow-md">
            <Link to='/' className="mr-10 text-2xl text-red-500 font-bold font-mono">
                Niduranga Jayarathna
            </Link>

            <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {menuOpen ? (
                        // Close Icon
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        // Hamburger Icon
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>


            <nav className="hidden md:flex space-x-4 items-center">{navLinks}</nav>

            {menuOpen && (
                <div className="absolute top-14 left-0 right-0 bg-white shadow-md md:hidden flex flex-col items-center z-50">
                    {navLinks}
                </div>
            )}
        </div>
    );
};

export default NavigationBar;
