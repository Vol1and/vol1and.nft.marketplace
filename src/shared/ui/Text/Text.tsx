import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY= 'primary',
    ERROR = 'error'
}
export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {

}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

const Text = (props: TextProps) => {
    const {
        className, text, title, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(className, {}, [cls.Text, cls[theme], cls[align]])}>
            <p className={cls.title}>{title}</p>
            <p className={cls.text}>{text}</p>
        </div>
    );
};
export { Text };
