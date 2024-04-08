import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleView } from 'entities/Article';
import { ViewSelector, ViewSelectorElementType } from 'features/ViewSelector';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticleListPage } from '../../model/services/fetchNextArticleListPage/fetchNextArticleListPage';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import {
    getArticleListPageError,
    getArticleListPageIsLoading,
    getArticleListPageNum,
    getArticleListPageView,
} from '../../model/selectors/articleListPageSelectors';
import cls from './ArticleListPage.module.scss';
import { articleListPageActions, articleListPageReducer, getArticles } from '../../model/slices/articleListPageSlice';

interface ArticleListPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleList: articleListPageReducer,
};

const viewTypes: ViewSelectorElementType<ArticleView>[] = [
    { view: ArticleView.PLATE, icon: TiledIcon },
    { view: ArticleView.LIST, icon: ListIcon },
];

const ArticleListPage = ({ className }: ArticleListPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticleListPageIsLoading);
    const view = useSelector(getArticleListPageView);
    const error = useSelector(getArticleListPageError);
    const page = useSelector(getArticleListPageNum);

    useEffect(() => {
        dispatch(articleListPageActions.initState());
        dispatch(fetchArticleList({
            page,
        }));
    }, [dispatch, page]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticleListPage());
    }, [dispatch]);

    const onViewClick = (view: ArticleView) => {
        dispatch(articleListPageActions.setView(view));
    };
    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(className, {}, [cls.ArticleListPage])}>
                <ViewSelector viewTypes={viewTypes} view={view} onViewClick={onViewClick} />
                <ArticleList articles={articles} view={view} isLoading={isLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleListPage);
