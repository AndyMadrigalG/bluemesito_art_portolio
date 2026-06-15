import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import { Artwork } from '../Types';

interface GalleryProps {
  galleryTitle?: string;
  galleryImages?: Artwork[];
}

const Gallery: React.FC<GalleryProps> = ({ galleryTitle, galleryImages }) => {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Al cambiar de galería, reiniciamos las imágenes visibles
    setVisibleImages(new Set());
   
    // Limpiamos y reajustamos el tamaño de la matriz de referencias actuales
    imageRefs.current = imageRefs.current.slice(0, galleryImages?.length || 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = Number(entry.target.getAttribute('data-id'));
            setVisibleImages((prev) => {
              const next = new Set(prev);
              next.add(imageId);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Menor threshold para detectar antes
        rootMargin: '100px',
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [galleryImages]); // <-- Escucha los cambios cuando cambias de categoría

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">{galleryTitle}</h1>
      </div>

      <div className="gallery-grid">
        {galleryImages?.map((image, index) => (
          <div
            key={`${image.id}`} // LLave única
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