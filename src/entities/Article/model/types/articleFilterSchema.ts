import { SortOrder } from '@/shared/types';

import { ArticleSortField, ArticleType } from '../consts/article';

export interface ArticleFilterSchema {
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType
}
