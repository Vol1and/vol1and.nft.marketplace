import React, { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfinitScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    return (
        <section ref={wrapperRef} className={classNames(className, {}, [cls.Page])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
export { Page };
