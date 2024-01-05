import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(className, {}, [cls.Loader])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
export { Loader };
