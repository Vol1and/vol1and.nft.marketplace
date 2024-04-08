import React, { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string
    children: ReactNode
}

const Card = ({ className, children, ...props }: CardProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(className, {}, [cls.Card])} {...props}>
            {children}
        </div>
    );
};
export { Card };
