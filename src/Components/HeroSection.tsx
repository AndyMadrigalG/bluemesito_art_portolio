import './HeroSection.css';
import { Link } from 'react-router-dom';
import mei_portrait from '../Assets/images/mei_portrait.webp';
import fungi_girls from '../Assets/images/fungi_girls.webp';
import magical_portal from '../Assets/images/magical_portal.webp';
import star_machine from '../Assets/images/star_machine.webp';

const galleryItems = [
    { id: 1, image_source: fungi_girls, description: 'ILLUSTRATIONS', link: '/illustrations' },
    { id: 2, image_source: mei_portrait, description: 'ANIMAL CHARACTERS', link: '/animal-characters' },
    { id: 3, image_source: magical_portal, description: 'FANARTS', link: '/fanarts' },
    { id: 4, image_source: star_machine, description: 'SKETCHES', link: '/sketches' },
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