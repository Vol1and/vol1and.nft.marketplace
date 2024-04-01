import {StateSchema} from "app/providers/StoreProvider";

export const getArticleDetailIsLoading = (state: StateSchema) => state.articleDetail?.isLoading;
export const getArticleDetailData = (state: StateSchema) => state.articleDetail?.data;
export const getArticleDetailError = (state: StateSchema) => state.articleDetail?.error;
