import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchArticleList } from 'pages/ArticleListPage/model/services/fetchArticleList/fetchArticleList';
import { ARTICLE_LIST_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticleListPageSchema } from '../types/articleListPageSchema';

const initialState: ArticleListPageSchema = {
    isLoading: false,
    error: undefined,
    view: ArticleView.PLATE,
    ids: [],
    entities: {},
    hasMore: true,
    limit: 20,
    page: 1,
};

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articleList || articlesAdapter.getInitialState(),
);

const articleListPageSlice = createSlice({
    name: 'articleListPage',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_LIST_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_LIST_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.PLATE ? 9 : 4;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                if (!action.payload?.length) {
                    state.hasMore = false;
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleListPageReducer, actions: articleListPageActions } = articleListPageSlice;
