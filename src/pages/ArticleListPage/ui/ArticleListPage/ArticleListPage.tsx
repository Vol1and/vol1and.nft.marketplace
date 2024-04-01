import React, {memo} from "react";
import cls from './ArticleListPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface ArticleListPageProps {
    className?: string
}

const ArticleListPage = ({className}: ArticleListPageProps) => {
    const {t} = useTranslation('article');
    return (
        <div className={classNames(className, {}, [cls.ArticleListPage])}>
        </div>
    );
}
export default memo(ArticleListPage)
