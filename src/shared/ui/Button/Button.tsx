import React, { type ButtonHTMLAttributes, type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: 'clear' | 'outline' | 'bg' | 'bg-inverted'
    square?: boolean
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
}

const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        size = 'md',
        square = false,
        theme = 'clear',
        disabled = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(className, {}, [cls.Button, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
export { Button };
