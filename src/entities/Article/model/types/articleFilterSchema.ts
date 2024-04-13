import { SortOrder } from 'shared/types';

import {ArticleSortField, ArticleType} from "entities/Article/model/consts/article";

export interface ArticleFilterSchema {
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType
}
