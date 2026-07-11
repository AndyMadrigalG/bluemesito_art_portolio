import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { image_main_logo } from '../Data/galleries';
import { ReactComponent as DevianArtIcon } from '../Assets/logos/deviantart.svg';
import { ReactComponent as InstagramIcon } from '../Assets/logos/instagram.svg';
import { ReactComponent as PixivIcon } from '../Assets/logos/pixiv.svg';

// Subcomponentes para SRP
const NavLinks: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => (
    <nav className="header__nav">
        <Link to="/" className="header__link" onClick={closeMenu}>HOME</Link>
        <Link to="/about" className="header__link" onClick={closeMenu}>ABOUT</Link>
        <Link to="/contact" className="header__link" onClick={closeMenu}>CONTACT</Link>
        <a href="https://patreon.com" target="_blank" rel="noreferrer" className="header__link" onClick={closeMenu}>PATREON</a>
        <a href="https://inprnt.com" target="_blank" rel="noreferrer" className="header__link" onClick={closeMenu}>PRINTS</a>
    </nav>
);

const SocialLinks: React.FC = () => (
    <div className="header__social-media">
        <a href="https://www.deviantart.com/bluemesito/gallery" target="_blank" rel="noopener noreferrer" className="header__social-link" aria-label="DeviantArt">
            <DevianArtIcon className="header__social-icon" />
        </a>
        <a href="https://www.instagram.com/bluemesito" target="_blank" rel="noopener noreferrer" className="header__social-link" aria-label="Instagram">
            <InstagramIcon className="header__social-icon" />
        </a>
        <a href="https://www.pixiv.net/en/users/19455541" target="_blank" rel="noopener noreferrer" className="header__social-link" aria-label="Pixiv">
            <PixivIcon className="header__social-icon" />
        </a>
    </div>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" onClick={closeMenu}>
                    <img src={image_main_logo} alt="Blue Mesito Logo" className="header__logo-image" />
                </Link>
            </div>

            {/* Accesibilidad: Elemento interactivo debe ser un botón */}
            <button className="header__toggle" onClick={toggleMenu} aria-label="Menu" aria-expanded={isMenuOpen}>
                <span className={`header__toggle-bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`header__toggle-bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`header__toggle-bar ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`header__backdrop ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu} aria-hidden="true"></div>

            <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
                <NavLinks closeMenu={closeMenu} />
                <SocialLinks />
            </div>
        </header>
    );
};

export default Header;