import { useParams } from 'react-router-dom';
import { galleries } from '../Data/galleries';
import Gallery from './Gallery';
import NotFound from './NotFound';

const CategoryPage = () => {
    const { category = '' } = useParams();
    const data = galleries[category];
    if (!data) {
      return <NotFound />;
    }
    return <Gallery galleryTitle={data.title} galleryImages={data.images} />;
};

export default CategoryPage;