export { ArticleDetail } from './ui/ArticleDetail/ArticleDetail';
export { Article, ArticleView } from './model/types/article';

export { articleDetailReducer, articleDetailActions } from './model/slice/articleDetailSlice';

export { getArticleDetailData, getArticleDetailIsLoading, getArticleDetailError } from './model/selectors/articleDetailSelectors';
export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
