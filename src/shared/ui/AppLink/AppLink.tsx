import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: 'primary' | 'secondary' | 'red'
}

function AppLink(props: AppLinkProps) {
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
}

export { AppLink };
