import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { image_winged_girl, image_exotic_ajolote, image_jirachi_high, image_two_demons } from '../Data/galleries';

interface GalleryPreviewItem {
    id: number;
    image_source: string;
    description: string;
    link: string;
}

const galleryItems: GalleryPreviewItem[] = [
    { id: 1, image_source: image_winged_girl, description: 'ILLUSTRATIONS', link: '/gallery/illustrations' },
    { id: 2, image_source: image_exotic_ajolote, description: 'PETS', link: '/gallery/pets' },
    { id: 3, image_source: image_jirachi_high, description: 'FANARTS', link: '/gallery/fanarts' },
    { id: 4, image_source: image_two_demons, description: 'SKETCHES', link: '/gallery/sketches' },
];

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__gallery">
        {galleryItems.map(({ id, image_source, description, link }) => (
          <Link to={link} key={id} className="hero__gallery-item" aria-label={`View ${description}`}>
            <img src={image_source} alt={`${description} preview`} className="hero__gallery-image" loading="lazy" />
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