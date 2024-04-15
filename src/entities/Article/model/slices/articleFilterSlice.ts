import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder } from '@/shared/types';
import { ArticleFilterSchema } from '../types/articleFilterSchema';
import { ArticleSortField, ArticleType } from '../consts/article';

const initialState: ArticleFilterSchema = {
    order: 'desc',
    search: '',
    sort: ArticleSortField.CREATED,
    type: ArticleType.ALL,
};

export const articleFilterSlice = createSlice({
    name: 'articleFilter',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
    },
});

export const { actions: articleFilterActions } = articleFilterSlice;
export const { reducer: articleFilterReducer } = articleFilterSlice;
