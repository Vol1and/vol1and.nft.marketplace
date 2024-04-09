import React, {
    MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfinitScroll/useInfiniteScroll';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { pageActions } from 'widgets/Page/model/slices/pageSlice';
import { useSelector } from 'react-redux';
import { getPageScrollByPath } from 'widgets/Page/model/selectors/pageSelectors';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const location = useLocation();
    const dispatch = useAppDispatch();
    const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, location.pathname));

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition || 0;
    });

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(pageActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: location.pathname,
        }));
    }, 300);

    return (
        <section onScroll={onScroll} ref={wrapperRef} className={classNames(className, {}, [cls.Page])}>
            {children}
            {onScrollEnd && <div ref={triggerRef} />}
        </section>
    );
};
export { Page };
