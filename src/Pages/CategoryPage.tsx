import React from 'react';
import { useParams } from 'react-router-dom';
import { categoryMeta } from '../Data/galleries';
import { useCatalog } from '../Hooks/useCatalog';
import { CategoryType } from '../Types';
import Gallery from './Gallery';
import NotFound from './NotFound';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { catalog, isLoading, error } = useCatalog();

  const isValidCategory = (cat: string | undefined): cat is CategoryType => {
    return !!cat && Object.prototype.hasOwnProperty.call(categoryMeta, cat);
  };

  if (!isValidCategory(category)) {
    return <NotFound />;
  }

  if (isLoading) {
    return <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>Loading gallery...</div>;
  }

  if (error || !catalog) {
    return <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>Unable to load artworks right now.</div>;
  }

  return (
    <Gallery
      key={category}
      activeCategory={category}
      galleryTitle={categoryMeta[category].title}
      galleryImages={catalog[category] || []}
    />
  );
};

export default CategoryPage;