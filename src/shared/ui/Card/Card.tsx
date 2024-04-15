import React, { HTMLAttributes, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string
    children: ReactNode
    theme?: CardTheme
}

const Card = ({
    className, children, theme = CardTheme.NORMAL, ...props
}: CardProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(className, {}, [cls.Card, cls[theme]])} {...props}>
            {children}
        </div>
    );
};
export { Card };
