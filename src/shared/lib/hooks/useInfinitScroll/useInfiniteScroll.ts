import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: UseInfiniteScrollProps) => {
    useEffect(() => {
        if (callback) {
            const triggerElement = triggerRef.current;
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerRef.current);

            return () => {
                if (observer && triggerElement) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(triggerElement);
                }
            };
        }
    });
};
export { useInfiniteScroll };
