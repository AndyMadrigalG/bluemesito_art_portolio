import React from 'react';
import './HeroSection.css';
import mei_portrait from '../Assets/mei_portrait.jpg';
import fungi_girls from '../Assets/fungi_girls.png';
import magical_portal from '../Assets/magical_portal.png';
import star_machine from '../Assets/star_machine.png';

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__gallery">
                <div className="hero__gallery-item">
                    <img src={fungi_girls} alt="Portrait 1" className="hero__gallery-image" />
                </div>
                <div className="hero__gallery-item">
                    <img src={mei_portrait} alt="Portrait 2" className="hero__gallery-image" />
                </div>
                <div className="hero__gallery-item">
                    <img src={magical_portal} alt="Portrait 3" className="hero__gallery-image" />
                </div>
                <div className="hero__gallery-item">
                    <img src={star_machine} alt="Portrait 4" className="hero__gallery-image" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
