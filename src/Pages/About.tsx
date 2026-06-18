import React from 'react';
import './About.css';
import { image_about_mei_mei } from '../Data/galleries';

const About: React.FC = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-image-wrapper">
        <img src={image_about_mei_mei} alt="Artist Portrait" className="about-image" />
      </div>
      
      <div className="about-content">
        <h1 className="about-title">Blue Mesito</h1>
        <span className="about-subtitle">Illustrator & Character Designer based in Costa Rica</span>
        
        <p>
          Hi! I'm an artist who loves creating magical worlds and charming characters.
          While I specialize in digital illustration, I also have experience in Brand Design.
          My work is heavily inspired by anime, nature and fantasy themes.
        </p>
        <p>
          I strive to bring warmth and joy through my art, focusing on storytelling 
          and vibrant colors.
        </p>

        <div className="clients-list">
          <h3>Clients Include</h3>
          <ul>
            <li>• Walt Disney Company</li>
            <li>• Ghibli Studios</li>
            <li>• Aniplex</li>
            <li>• Mappa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;