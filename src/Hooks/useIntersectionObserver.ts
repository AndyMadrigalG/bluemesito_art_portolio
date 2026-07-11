import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (dependencies: any[]) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleItems(new Set());
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = Number(entry.target.getAttribute('data-id'));
            setVisibleItems((prev) => new Set(prev).add(itemId));
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
