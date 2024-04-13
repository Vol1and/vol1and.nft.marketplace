import { ArticleListPageAsync } from 'pages/ArticleListPage/ui/ArticleListPage/ArticleListPage.async';

export {
    ArticleListPageAsync as ArticleListPage,
};

export type { ArticleListPageSchema } from './model/types/articleListPageSchema';
export { articleListPageReducer, articleListPageActions } from './model/slices/articleListPageSlice';
export { getArticleListPageView } from './model/selectors/articleListPageSelectors';
