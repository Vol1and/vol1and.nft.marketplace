import React, { type ButtonHTMLAttributes, type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR ='clear',
    OUTLINE = 'outline',
    BG = 'bg',
    BG_INVERTED = 'bg-inverted',
    OUTLINE_RED = 'outline-red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
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
        theme = ButtonTheme.CLEAR,
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
