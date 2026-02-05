import './HeroSection.css';
import { Link } from 'react-router-dom';
import mei_portrait from '../Assets/mei_portrait.webp';
import fungi_girls from '../Assets/fungi_girls.webp';
import magical_portal from '../Assets/magical_portal.webp';
import star_machine from '../Assets/star_machine.webp';

const galleryItems = [
    { id: 1, image_source: fungi_girls, description: 'ILLUSTRATIONS' },
    { id: 2, image_source: mei_portrait, description: 'ANIMAL CHARACTERS' },
    { id: 3, image_source: magical_portal, description: 'FANARTS' },
    { id: 4, image_source: star_machine, description: 'SKETCHES' },
];

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__gallery">
        {galleryItems.map(({ id, image_source, description }) => (
          <Link to={"/gallery"} key={id} className="hero__gallery-item">
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