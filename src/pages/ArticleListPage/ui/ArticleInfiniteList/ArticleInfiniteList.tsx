import { useTranslation } from 'react-i18next';
import React, { memo, useEffect } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { useDispatch, useSelector } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import { initArticleListPage } from '../../model/services/initArticleListPage/initArticleListPage';
import { getArticles } from '../../model/slices/articleListPageSlice';
import {
    getArticleListPageIsLoading,
    getArticleListPageView,
} from '../../model/selectors/articleListPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(initArticleListPage(searchParams));
    }, [dispatch, searchParams]);

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticleListPageIsLoading);
    const view = useSelector(getArticleListPageView);

    return (
        <ArticleList className={className} articles={articles} view={view} isLoading={isLoading} />
    );
});
