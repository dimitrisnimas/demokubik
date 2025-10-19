
import { useEffect, useRef } from 'react';

export const useAnimateOnScroll = <T extends HTMLElement>() => {
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;
        
        element.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700', 'ease-out');

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.remove('opacity-0', 'translate-y-5');
                    element.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return elementRef;
};
