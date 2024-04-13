import { StateSchema } from 'app/providers/StoreProvider';

import {ArticleType} from "entities/Article/model/consts/article";

export const getArticleFilterOrder = (state: StateSchema) => state.articleFilter?.order || 'desc';
export const getArticleFilterSearch = (state: StateSchema) => state.articleFilter?.search;
export const getArticleFilterSortField = (state: StateSchema) => state.articleFilter?.sort;
export const getArticleFilterType = (state: StateSchema) => state.articleFilter?.type || ArticleType.ALL;
