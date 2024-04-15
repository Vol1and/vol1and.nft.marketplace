import { ArticleDetailPageAsync } from './ui/ArticleDetailPage/ArticleDetailPage.async';

export {
    ArticleDetailPageAsync as ArticleDetailPage,
};
export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';

export { addCommentForArticle } from './model/services/addCommentForArticle/addCommentForArticle';
export { getArticleRecommendationsIsLoading, getArticleRecommendationsError } from './model/selectors/recommendations';
export { getArticleCommentsIsLoading, getArticleCommentsError } from './model/selectors/comments';
export { getCanEditArticle } from './model/selectors/article';
export { getArticleComments, articleDetailsCommentsReducer } from './model/slices/articleDetailsCommentsSlice';
export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
