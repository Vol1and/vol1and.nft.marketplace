import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetailSchema } from '../types/articleDetailSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const articleDetailSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            }).addCase(fetchArticleById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articleDetailActions } = articleDetailSlice;
export const { reducer: articleDetailReducer } = articleDetailSlice;
