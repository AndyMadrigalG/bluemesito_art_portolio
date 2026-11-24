
import { CategoryMeta, CategoryType } from '../Types';

export const MEDIA_BASE_URL = process.env.REACT_APP_MEDIA_BASE_URL

// Imágenes generales del sitio (alojadas en R2)
export const image_main_logo = `${MEDIA_BASE_URL}/logos/main_logo-full.webp`;
export const image_about_mei_mei = `${MEDIA_BASE_URL}/pets/mei_mei-full.webp`;
export const image_contact = `${MEDIA_BASE_URL}/illustrations/starmachine_transparent-full.webp`;

// Metadatos y portadas de cada categoría (para HeroSection y pestañas)
export const categoryMeta: Record<CategoryType, CategoryMeta> = {
  illustrations: {
    title: 'Original Illustrations',
    coverUrl: `${MEDIA_BASE_URL}/illustrations/Girl-thumbnail.webp`,
  },
  pets: {
    title: 'Pets',
    coverUrl: `${MEDIA_BASE_URL}/pets/exotic_ajolote-thumbnail.webp`,
  },
  fanarts: {
    title: 'Fanarts',
    coverUrl: `${MEDIA_BASE_URL}/fanarts/jirachi_high-thumbnail.webp`,
  },
  sketches: {
    title: 'Sketches',
    coverUrl: `${MEDIA_BASE_URL}/sketches/two_demons-thumbnail.webp`,
  },
};