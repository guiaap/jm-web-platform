import { useEffect, useRef, useState } from "react";

export function useInView(options: IntersectionObserverInit = {}) {
  
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {

        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {

            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(element);
            }

        }, options);

        
        observer.observe(element);
        
        return () => observer.disconnect();
        
    }, [options]);

    return { ref, isVisible };
}