import React, { memo } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: 'primary' | 'secondary' | 'red'
}

const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, children, theme = 'primary', ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(className, {}, [cls.AppLink, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export { AppLink };
