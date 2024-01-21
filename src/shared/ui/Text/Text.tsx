import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY= 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

const Text = (props: TextProps) => {
    const {
        className, text, title, theme = TextTheme.PRIMARY,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(className, {}, [cls.Text, cls[theme]])}>
            <p className={cls.title}>{title}</p>
            <p className={cls.text}>{text}</p>
        </div>
    );
};
export { Text };
