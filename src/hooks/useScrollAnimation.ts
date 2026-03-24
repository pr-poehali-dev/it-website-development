import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const el = ref.current;
    if (el) {
      const elements = el.querySelectorAll(
        '.animate-in-view, .animate-in-view-left, .animate-in-view-right, .animate-scale-in-view'
      );
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useScrollAnimation;
