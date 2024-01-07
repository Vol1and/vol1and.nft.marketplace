import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: 'clear' | 'outline' | 'bg' | 'bg-inverted'
    square?: boolean
    size?: 'sm' | 'md' | 'lg'
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        size = 'md',
        square = false,
        theme = 'clear',
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(className, {}, [cls.Button, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
export { Button };
