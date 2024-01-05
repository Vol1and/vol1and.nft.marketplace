import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: 'clear' | 'outline'
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme = 'clear', ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(className, {}, [cls.Button, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
export { Button };
