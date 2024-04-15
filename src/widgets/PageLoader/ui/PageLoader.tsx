import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(className, {}, [cls.PageLoader])}>
        <Loader />
    </div>
);
export { PageLoader };
