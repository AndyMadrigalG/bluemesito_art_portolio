export interface Artwork {
  id: number;
  source: string;
  alt: string; // Texto alternativo/descripción para accesibilidad
  title?: string;
}

export type CategoryType = 'illustrations' | 'pets' | 'fanarts' | 'sketches';

export interface GalleryCategory {
  title: string;
  images: Artwork[];
}
