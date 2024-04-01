import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetail } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('article');

    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(className, {}, [cls.ArticleDetailPage])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(className, {}, [cls.ArticleDetailPage])}>
            <ArticleDetail id={id} />
        </div>
    );
};
export default memo(ArticleDetailPage);
