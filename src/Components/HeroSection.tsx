import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { categoryMeta } from '../Data/galleries';
import { CategoryType } from '../Types';

const categoryOrder: CategoryType[] = ['illustrations', 'pets', 'fanarts', 'sketches'];

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__gallery">
        {categoryOrder.map((key) => {
          const { coverUrl } = categoryMeta[key];
          const label = key.toUpperCase();
          return (
            <Link
              to={`/gallery/${key}`}
              key={key}
              className="hero__gallery-item"
              aria-label={`View ${label}`}
            >
              <img
                src={coverUrl}
                alt={`${label} preview`}
                className="hero__gallery-image"
                width={600}
                height={600}
              />
              <div className="hero__gallery-text">
                <p className="hero__gallery-description">{label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;