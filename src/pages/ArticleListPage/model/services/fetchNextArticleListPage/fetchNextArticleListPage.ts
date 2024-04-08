import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { articleListPageActions } from '../../slices/articleListPageSlice';
import {
    getArticleListPageHasMore,
    getArticleListPageIsLoading,
    getArticleListPageNum,
} from '../../selectors/articleListPageSelectors';
import { fetchArticleList } from '../../services/fetchArticleList/fetchArticleList';

export const fetchNextArticleListPage = createAsyncThunk<void, void, ThunkConfig<string>>('/fetchNextArticleListPage', async (_, thunkAPI) => {
    const { dispatch, getState, rejectWithValue } = thunkAPI;
    const page = getArticleListPageNum(getState());
    const isLoading = getArticleListPageIsLoading(getState());
    const hasMore = getArticleListPageHasMore(getState());
    try {
        if (hasMore && !isLoading) {
            dispatch(fetchArticleList({
                page: page + 1,
            }));
            dispatch(articleListPageActions.setPage(page + 1));
        }
    } catch (e) {
        console.log(e);
        return rejectWithValue(i18n.t('Incorrect login'));
    }
});
