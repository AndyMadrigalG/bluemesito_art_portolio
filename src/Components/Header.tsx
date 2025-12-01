import React from 'react';
import './Header.css';
import main_logo from '../Assets/main_logo.png';
import { ReactComponent as DevianArtIcon } from '../Assets/deviantart.svg';
import { ReactComponent as InstagramIcon } from '../Assets/instagram.svg';
import { ReactComponent as PixivIcon } from '../Assets/pixiv.svg';

const Header: React.FC = () => {
    return (
        <header className="header">
            {/* Logo Section */}
            <div className="header__logo">
                <a href="/">
                    <img src={main_logo} alt="Blue Mesito Logo" className="header__logo-image" />
                </a>
            </div>

            {/* Navigation Links */}
            <nav className="header__nav">
                <a href="#illustration" className="header__link">ILLUSTRATIONS</a>
                <a href="#patreon" className="header__link">PATREON</a>
                <a href="#prints" className="header__link">PRINT STORE</a>
                <a href="#contact" className="header__link">CONTACT</a>
                <a href="#about" className="header__link">ABOUT</a>
            </nav>

            {/* Social Media Icons */}
            <div className="header__social-media">
                <a href="https://www.deviantart.com/bluemesito/gallery" target="_blank" rel="noopener noreferrer" className="header__social-link">
                    <DevianArtIcon className="header__social-icon" />
                </a>
                <a href="https://www.instagram.com/bluemesito" target="_blank" rel="noopener noreferrer" className="header__social-link">
                    <InstagramIcon className="header__social-icon" />
                </a>
                <a href="https://www.pixiv.net/en/users/19455541" target="_blank" rel="noopener noreferrer" className="header__social-link">
                    <PixivIcon className="header__social-icon" />
                </a>
            </div>

        </header>
    );
};

export default Header;