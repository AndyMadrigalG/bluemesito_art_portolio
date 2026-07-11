import React from 'react';
import './Gallery.css';
import { Artwork } from '../Types';
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';

interface GalleryProps {
  galleryTitle?: string;
  galleryImages?: Artwork[];
}

const Gallery: React.FC<GalleryProps> = ({ galleryTitle, galleryImages = [] }) => {
  // Inyectamos el Hook para manejar la visibilidad y lazy-loading por scroll
  const { visibleItems, elementsRef } = useIntersectionObserver([galleryImages]);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">{galleryTitle}</h1>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => { elementsRef.current[index] = el; }}
            data-id={image.id}
            className={`gallery-item ${visibleItems.has(image.id) ? 'visible' : ''}`}
          >
            <img src={image.source} alt={image.alt} className="gallery-image" loading="lazy" />
            <div className="gallery-item-overlay">
              <span className="gallery-item-title">{image.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;