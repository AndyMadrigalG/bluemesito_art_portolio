export interface Artwork {
  id: number;
  source: string;
  alt: string; // Texto alternativo/descripción para accesibilidad
  title?: string;
}