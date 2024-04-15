import { ArticleListPageAsync } from './ui/ArticleListPage/ArticleListPage.async';

export { fetchArticleList } from './model/services/fetchArticleList/fetchArticleList';

export {
    ArticleListPageAsync as ArticleListPage,
};

export type { ArticleListPageSchema } from './model/types/articleListPageSchema';
export { articleListPageReducer, articleListPageActions } from './model/slices/articleListPageSlice';
export { getArticleListPageView } from './model/selectors/articleListPageSelectors';
