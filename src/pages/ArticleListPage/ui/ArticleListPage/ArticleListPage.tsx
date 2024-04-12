import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useDispatch } from 'react-redux';
import { Page } from 'widgets/Page/ui/Page';
import { ArticleFilters } from 'entities/Article/ui/ArticleFilters/ArticleFilters';
import { articleFilterReducer } from 'entities/Article';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticleListPage } from '../../model/services/fetchNextArticleListPage/fetchNextArticleListPage';
import cls from './ArticleListPage.module.scss';
import { articleListPageReducer } from '../../model/slices/articleListPageSlice';

interface ArticleListPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleList: articleListPageReducer,
    articleFilter: articleFilterReducer,
};

const ArticleListPage = ({ className }: ArticleListPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticleListPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(className, {}, [cls.ArticleListPage])}>
                <ArticleFilters />
                <ArticleInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleListPage);
