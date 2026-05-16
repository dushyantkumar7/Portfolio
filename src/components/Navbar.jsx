import React, { useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <a href="#" className="logo">DK<span className="dot">.</span></a>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#education" onClick={closeMenu}>Education</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </div>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    style={{ background: 'none', border: 'none', color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer', marginRight: '1rem' }}
                >
                    <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
                <button
                    className="mobile-toggle"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
