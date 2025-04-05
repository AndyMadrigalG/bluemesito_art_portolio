import React, { useState } from 'react';
import './App.css'; // Import the updated CSS below

const App: React.FC = () => {
    // State to track the glow color
    const [glowColor, setGlowColor] = useState<string>('#00ffcc'); // Default neon green

    // Handle dropdown change
    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGlowColor(event.target.value);
        document.documentElement.style.setProperty('--primary-glow', event.target.value);
    };

    return (
        <div className="container">
            <h1 id="glow-title">Hello Contact!</h1>
            <h2 id="glow-subtitle">Choose your Futuristic Neon Glow</h2>
            <select id="color-selector" onChange={handleColorChange} value={glowColor}>
                <option value="#00ffcc">Neon Green</option>
                <option value="#ff00cc">Neon Pink</option>
                <option value="#00ccff">Neon Blue</option>
            </select>
            <footer>
                <p>&copy; 2025 Contact. All rights reserved.</p>
                <div className="footer-links">
                    <a href="mailto:contact@gmail.com">Contact me</a>
                </div>
            </footer>
        </div>
    );
};

export default App;
