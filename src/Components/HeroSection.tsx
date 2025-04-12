import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    const imageSrc = "/Assets/portrait.jpg"; // Path to the portrait image

    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Welcome to My Site</h1>
                <p className="hero__subtitle">A modern aesthetic with a responsive design</p>
            </div>
            <div className="hero__gallery">
                {[...Array(4)].map((_, index) => (
                    <div className="hero__gallery-item" key={index}>
                        <img src={imageSrc} alt={`Portrait ${index + 1}`} className="hero__gallery-image" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
