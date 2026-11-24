import { useEffect, useState } from 'react';
import { MEDIA_BASE_URL } from '../Data/galleries';
import { CatalogData } from '../Types';

let cachedCatalog: CatalogData | null = null;
let inflightRequest: Promise<CatalogData> | null = null;

async function fetchCatalog(): Promise<CatalogData> {
  if (cachedCatalog) return cachedCatalog;
  if (!inflightRequest) {
    inflightRequest = fetch(`${MEDIA_BASE_URL}/catalog.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load catalog (${res.status})`);
        return res.json() as Promise<CatalogData>;
      })
      .then((data) => {
        cachedCatalog = data;
        return data;
      })
      .finally(() => {
        inflightRequest = null;
      });
  }
  return inflightRequest;
}

export const useCatalog = () => {
  const [catalog, setCatalog] = useState<CatalogData | null>(cachedCatalog);
  const [isLoading, setIsLoading] = useState<boolean>(!cachedCatalog);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedCatalog) return;
    let isMounted = true;

    fetchCatalog()
      .then((data) => {
        if (isMounted) {
          setCatalog(data);
          setIsLoading(false);
        }
      })
      .catch((err: Error) => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { catalog, isLoading, error };
};