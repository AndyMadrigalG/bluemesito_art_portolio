
export interface Artwork {
  id: string;
  title: string;
  alt: string;
  thumbnailUrl: string;
  fullUrl: string;
  width: number;
  height: number;
}

export type CategoryType = 'illustrations' | 'pets' | 'fanarts' | 'sketches';
export type CatalogData = Record<CategoryType, Artwork[]>;

export interface CategoryMeta {
  title: string;
  coverUrl: string;
}
