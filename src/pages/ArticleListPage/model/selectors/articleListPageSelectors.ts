import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

export const getArticleListPageIsLoading = (state: StateSchema) => state.articleList?.isLoading || false;
export const getArticleListPageError = (state: StateSchema) => state.articleList?.error || '';
export const getArticleListPageView = (state: StateSchema) => state.articleList?.view || ArticleView.PLATE;
export const getArticleListPageNum = (state: StateSchema) => state.articleList?.page || 1;
export const getArticleListPageLimit = (state: StateSchema) => state.articleList?.limit || 0;
export const getArticleListPageHasMore = (state: StateSchema) => state.articleList?.hasMore || false;
