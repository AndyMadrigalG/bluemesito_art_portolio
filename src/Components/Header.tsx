import React from 'react';
import './Header.css';
import logo from '../Assets/main_logo.png'; // Import the logo file

const Header: React.FC = () => {
    return (
        <header className="header">
            {/* Logo Section */}
            <div className="header__logo">
                <img src={logo} alt="Site Logo" className="header__logo-image" />
            </div>

            {/* Navigation Links */}
            <nav className="header__nav">
                <a href="#illustration" className="header__link">HOME</a>
                <a href="#books" className="header__link">ILLUSTRATIONS</a>
                <a href="#wallpapers" className="header__link">WALLPAPERS</a>
                <a href="#prints" className="header__link">STORE</a>
                <a href="#contact" className="header__link">CONTACT</a>
                <a href="#about" className="header__link">ABOUT</a>
            </nav>
        </header>
    );
};

export default Header;
