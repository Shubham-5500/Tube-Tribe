import { useEffect, useRef, useState, RefObject } from "react";

type UseInViewOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px",
  once = false,
}: UseInViewOptions = {}): {
  ref: RefObject<T>;
  inView: boolean;
} {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setInView(isVisible);
        
        if (isVisible && once && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin, once]);
  
  return { ref, inView };
}
