import React, {memo, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {ArticleList} from 'entities/Article/ui/ArticleList/ArticleList';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader';
import {useDispatch, useSelector} from 'react-redux';
import {Page} from 'widgets/Page/ui/Page';
import {ArticleFilters} from 'entities/Article/ui/ArticleFilters/ArticleFilters';
import {articleFilterReducer} from 'entities/Article';
import {useSearchParams} from 'react-router-dom';
import {initArticleListPage} from 'pages/ArticleListPage/model/services/initArticleListPage/initArticleListPage';
import {fetchNextArticleListPage} from '../../model/services/fetchNextArticleListPage/fetchNextArticleListPage';
import {getArticleListPageIsLoading, getArticleListPageView,} from '../../model/selectors/articleListPageSelectors';
import cls from './ArticleListPage.module.scss';
import {articleListPageReducer, getArticles} from '../../model/slices/articleListPageSlice';

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

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticleListPageIsLoading);
    const view = useSelector(getArticleListPageView);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(initArticleListPage(searchParams));
    }, []);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticleListPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(className, {}, [cls.ArticleListPage])}>
                <ArticleFilters />
                <ArticleList articles={articles} view={view} isLoading={isLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleListPage);
