import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (dependencies: unknown[]) => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleItems(new Set());
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute('data-id');
            if (itemId) {
              setVisibleItems((prev) => new Set(prev).add(itemId));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    const currentRefs = elementsRef.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, dependencies);

  return { visibleItems, elementsRef };
};
