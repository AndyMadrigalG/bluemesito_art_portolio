import React from 'react';
import { useParams } from 'react-router-dom';
import { galleries } from '../Data/galleries';
import { CategoryType } from '../Types';
import Gallery from './Gallery';
import NotFound from './NotFound';

const CategoryPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    
    // Type Guard para seguridad estricta
    const isValidCategory = (cat: string | undefined): cat is CategoryType => {
        return !!cat && Object.keys(galleries).includes(cat as CategoryType);
    };

    if (!isValidCategory(category)) {
      return <NotFound />;
    }

    const data = galleries[category];
    return <Gallery galleryTitle={data.title} galleryImages={data.images} />;
};

export default CategoryPage;