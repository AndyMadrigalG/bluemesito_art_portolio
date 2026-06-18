import './HeroSection.css';
import { Link } from 'react-router-dom';
import { image_winged_girl, image_exotic, image_jirachi_high, image_two_demons } from '../Data/galleries';

const galleryItems = [
    { id: 1, image_source: image_winged_girl, description: 'ILLUSTRATIONS', link: '/gallery/illustrations' },
    { id: 2, image_source: image_exotic, description: 'PETS', link: '/gallery/pets' },
    { id: 3, image_source: image_jirachi_high, description: 'FANARTS', link: '/gallery/fanarts' },
    { id: 4, image_source: image_two_demons, description: 'SKETCHES', link: '/gallery/sketches' },
];

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__gallery">
        {galleryItems.map(({ id, image_source, description, link }) => (
          <Link to={link} key={id} className="hero__gallery-item">
            <img src={image_source} alt={description} className="hero__gallery-image" />
            <div className="hero__gallery-text">
              <p className="hero__gallery-description">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;