import { useEffect, useRef } from 'react';
import { Movie } from '../types';

export const useLazyLoad = (items: Movie[], rootMargin = '-150px') => {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]); 

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!; 
          observer.unobserve(img); 
        }
      });
    }, { rootMargin });

    imgRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => {
      observer.disconnect(); 
    };
  }, [items, rootMargin]);

  return imgRefs; 
};
