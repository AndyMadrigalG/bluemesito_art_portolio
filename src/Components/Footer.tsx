import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 My Website. All rights reserved.</p>
            <div className="footer__links">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a> |
                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
