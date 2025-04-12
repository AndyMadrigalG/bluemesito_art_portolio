import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Welcome to My Site</h1>
                <p className="hero__subtitle">A modern aesthetic with a responsive design</p>
                <button className="hero__button">Get Started</button>
            </div>
            <div className="hero__image">
                <img src="./../Assets/portrait.jpg" alt="Placeholder" />
            </div>
        </section>
    );
};

export default HeroSection;
