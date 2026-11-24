import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { categoryMeta } from '../Data/galleries';
import { Artwork, CategoryType } from '../Types';
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';

interface GalleryProps {
  activeCategory?: CategoryType;
  galleryTitle?: string;
  galleryImages?: Artwork[];
}

const categories: CategoryType[] = ['illustrations', 'pets', 'fanarts', 'sketches'];

const Gallery: React.FC<GalleryProps> = ({ activeCategory, galleryTitle, galleryImages = [] }) => {
  const { visibleItems, elementsRef } = useIntersectionObserver([galleryImages]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedArtwork = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, galleryImages.length]);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">{galleryTitle}</h1>

        <nav className="gallery-tabs" aria-label="Gallery categories">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/gallery/${cat}`}
              className={`gallery-tab ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => {
              elementsRef.current[index] = el;
            }}
            data-id={image.id}
            className={`gallery-item ${visibleItems.has(image.id) ? 'visible' : ''}`}
            onClick={() => setSelectedIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedIndex(index);
              }
            }}
          >
            <img
              src={image.thumbnailUrl}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="gallery-image"
              loading="lazy"
              decoding="async"
            />
            <div className="gallery-item-overlay">
              <span className="gallery-item-title">{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedArtwork && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedArtwork.title}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close preview"
            >
              &times;
            </button>

            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav lightbox-nav--prev"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
                    )
                  }
                  aria-label="Previous artwork"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  className="lightbox-nav lightbox-nav--next"
                  onClick={() =>
                    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
                  }
                  aria-label="Next artwork"
                >
                  &#8250;
                </button>
              </>
            )}

            <img
              src={selectedArtwork.fullUrl}
              alt={selectedArtwork.alt}
              className="lightbox-image"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <p className="lightbox-caption">{selectedArtwork.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;