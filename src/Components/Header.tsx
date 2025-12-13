import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // IMPORTANTE: Importar Link
import './Header.css';
import main_logo from '../Assets/main_logo.png';
import { ReactComponent as DevianArtIcon } from '../Assets/deviantart.svg';
import { ReactComponent as InstagramIcon } from '../Assets/instagram.svg';
import { ReactComponent as PixivIcon } from '../Assets/pixiv.svg';

const Header: React.FC = () => {
    // Estado para controlar si el menú lateral está abierto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar el menú
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    // Función para cerrar el menú al hacer clic en un enlace
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            {/* Logo Section */}
            <div className="header__logo">
                <Link to="/" onClick={closeMenu}>
                    <img src={main_logo} alt="Blue Mesito Logo" className="header__logo-image" />
                </Link>
            </div>

            {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
            <div className="header__toggle" onClick={toggleMenu}>
                <span className={`header__toggle-bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`header__toggle-bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`header__toggle-bar ${isMenuOpen ? 'open' : ''}`}></span>
            </div>

            {/* FONDO OSCURO (Backdrop) al abrir el menú */}
            <div className={`header__backdrop ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

            {/* CONTENEDOR DEL MENÚ (Agrupa Nav y Social) */}
            {/* En escritorio se ve normal, en móvil se convierte en el sidebar */}
            <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
                
                {/* Navigation Links */}
                <nav className="header__nav">
                    <Link to="/" className="header__link" onClick={closeMenu}>HOME</Link>
                    <Link to="/about" className="header__link" onClick={closeMenu}>ABOUT</Link>
                    <Link to="/contact" className="header__link" onClick={closeMenu}>CONTACT</Link>
                    {/* Enlaces externos pueden seguir siendo <a> si llevan a otro sitio, ej: Patreon */}
                    <a href="https://patreon.com" target="_blank" rel="noreferrer" className="header__link" onClick={closeMenu}>PATREON</a>
                    <a href="https://inprnt.com" target="_blank" rel="noreferrer" className="header__link" onClick={closeMenu}>PRINTS</a>
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
            </div>
        </header>
    );
};

export default Header;