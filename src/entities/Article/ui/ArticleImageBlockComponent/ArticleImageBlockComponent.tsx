import React from "react";
import cls from './ArticleImageBlockComponent.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface ArticleImageBlockComponentProps {
    className?: string
}

const ArticleImageBlockComponent = ({className}: ArticleImageBlockComponentProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(className, {}, [cls.ArticleImageBlockComponent])}>
        </div>
    );
}
export {ArticleImageBlockComponent}
