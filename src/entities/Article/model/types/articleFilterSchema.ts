import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from '../types/article';

export interface ArticleFilterSchema {
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType
}
