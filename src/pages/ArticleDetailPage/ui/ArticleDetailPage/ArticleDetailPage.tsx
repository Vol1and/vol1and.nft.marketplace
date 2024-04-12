import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetail } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { Page } from 'widgets/Page/ui/Page';
import { ArticleRecommendationList } from 'features/articleRecommendationList';
import { ArticleCommentList } from 'features/ArticleCommentList';
import { articleDetailsPageRecommendationsReducer } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
};

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
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(className, {}, [cls.ArticleDetailPage])}>
                <ArticleDetailPageHeader />
                <ArticleDetail id={id} />
                <ArticleRecommendationList />
                <ArticleCommentList id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
