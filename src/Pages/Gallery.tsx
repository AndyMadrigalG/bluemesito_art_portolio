import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import { Artwork } from '../Types';


interface GalleryProps {
  galleryTitle?: string;
  galleryImages?: Artwork[]; // Permite pasar un array de artworks
}



const Gallery: React.FC<GalleryProps> = ({ galleryTitle, galleryImages }) => {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = Number(entry.target.getAttribute('data-id'));
            setVisibleImages((prev) => new Set(prev).add(imageId));
            // Una vez visible, dejamos de observar para mejor performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Menor threshold para detectar antes
        rootMargin: '100px', // Cargar antes de que llegue al viewport
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">{galleryTitle}</h1>
      </div>

      <div className="gallery-grid">
        {galleryImages?.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => { imageRefs.current[index] = el; }}
            data-id={image.id}
            className={`gallery-item ${visibleImages.has(image.id) ? 'visible' : ''}`}
          >
            <img
              src={image.source}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
            />
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