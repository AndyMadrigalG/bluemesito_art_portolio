import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

import illustration1 from '../Assets/images/fungi_girls.webp';
import illustration2 from '../Assets/images/magical_portal.webp';
import illustration3 from '../Assets/images/star_machine.webp';
import illustration4 from '../Assets/images/mei_portrait.webp';
import illustration5 from '../Assets/images/magical_portal.webp';
import illustration6 from '../Assets/images/star_machine.webp';
import illustration7 from '../Assets/images/mei_portrait.webp';
import illustration8 from '../Assets/images/fungi_girls.webp';
import illustration9 from '../Assets/images/star_machine.webp';
import illustration10 from '../Assets/images/mei_portrait.webp';
import illustration11 from '../Assets/images/fungi_girls.webp';
import illustration12 from '../Assets/images/magical_portal.webp';
import illustration13 from '../Assets/images/star_machine.webp';
import illustration14 from '../Assets/images/mei_portrait.webp';
import illustration15 from '../Assets/images/magical_portal.webp';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

const galleryImages: ImageData[] = [
  { id: 1, src: illustration1, alt: 'Illustration 1', title: 'Artwork 1' },
  { id: 2, src: illustration2, alt: 'Illustration 2', title: 'Artwork 2' },
  { id: 3, src: illustration3, alt: 'Illustration 3', title: 'Artwork 3' },
  { id: 4, src: illustration4, alt: 'Illustration 4', title: 'Artwork 4' },
  { id: 5, src: illustration5, alt: 'Illustration 5', title: 'Artwork 5' },
  { id: 6, src: illustration6, alt: 'Illustration 6', title: 'Artwork 6' },
  { id: 7, src: illustration7, alt: 'Illustration 7', title: 'Artwork 7' },
  { id: 8, src: illustration8, alt: 'Illustration 8', title: 'Artwork 8' },
  { id: 9, src: illustration9, alt: 'Illustration 9', title: 'Artwork 9' },
  { id: 10, src: illustration10, alt: 'Illustration 10', title: 'Artwork 10' },
  { id: 11, src: illustration11, alt: 'Illustration 11', title: 'Artwork 11' },
  { id: 12, src: illustration12, alt: 'Illustration 12', title: 'Artwork 12' },
  { id: 13, src: illustration13, alt: 'Illustration 13', title: 'Artwork 13' },
  { id: 14, src: illustration14, alt: 'Illustration 14', title: 'Artwork 14' },
  { id: 15, src: illustration15, alt: 'Illustration 15', title: 'Artwork 15' },
];

const Gallery: React.FC = () => {
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
        <h1 className="gallery-title">Original Illustrations</h1>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => { imageRefs.current[index] = el; }}
            data-id={image.id}
            className={`gallery-item ${visibleImages.has(image.id) ? 'visible' : ''}`}
            style={{ animationDelay: `${(index % 4) * 0.1}s` }}
          >
            <img
              src={image.src}
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