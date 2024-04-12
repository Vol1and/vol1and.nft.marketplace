import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticleDetailPage/model/selectors/article';
import { getArticleDetailData } from 'entities/Article';
import cls from './ArticleDetailPageHeader.module.scss';

interface ArticleDetailPageHeaderProps {
    className?: string
}

const ArticleDetailPageHeader = ({ className }: ArticleDetailPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailData);

    const backToList = () => {
        navigate(RoutePath.ARTICLES);
    };

    const onEditArticle = useCallback(() => {
        navigate(RoutePath.ARTICLE_EDIT.replace(':id', article?.id || ''));
    }, [article?.id, navigate]);
    return (
        <div className={classNames(className, {}, [cls.ArticleDetailPageHeader])}>

            <Button theme={ButtonTheme.OUTLINE} onClick={backToList}>{t('Назад к списку')}</Button>

            {canEdit && <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>{t('Редактировать')}</Button>}
        </div>
    );
};
export { ArticleDetailPageHeader };