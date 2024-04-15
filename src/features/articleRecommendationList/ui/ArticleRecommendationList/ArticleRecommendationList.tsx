import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleList, ArticleView } from '@/entities/Article';
import cls from './ArticleRecommendationList.module.scss';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading } = useArticleRecommendationsList(4);

    if (isLoading) {
        return <div>Загружаем....</div>;
    }

    return (
        <div className={classNames(cls.ArticleRecommendationList, {}, [className])}>
            <Text className={cls.commentTitle} title={t('Рекомендуем')} />
            <ArticleList articles={articles} view={ArticleView.PLATE} />
        </div>
    );
});
