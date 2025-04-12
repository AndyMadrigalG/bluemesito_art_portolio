import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 Blue Mesito. Todos los derechos reservados</p>
            <div className="footer__links">
                <a href="https://www.deviantart.com/bluemesito/gallery" target="_blank" rel="noreferrer">DevianArt</a>
                <a href="https://www.pixiv.net/en/users/19455541" target="_blank" rel="noreferrer">Pixiv</a>
                <a href="https://www.instagram.com/bluemesito" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://x.com/bluemesito" target="_blank" rel="noreferrer">X</a>
            </div>
        </footer>
    );
};

export default Footer;
