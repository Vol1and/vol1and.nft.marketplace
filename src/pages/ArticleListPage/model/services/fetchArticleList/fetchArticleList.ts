import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';
import { getArticleListPageLimit } from '../../selectors/articleListPageSelectors';

interface FetchArticleListProps {
    page: number
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>('/fetchArticleList', async (props, thunkAPI) => {
    const {
        extra, dispatch, getState, rejectWithValue,
    } = thunkAPI;
    const { page = 1 } = props;
    const limit = getArticleListPageLimit(getState());
    try {
        const response = await extra.api.get('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
            },
        });

        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue(i18n.t('Incorrect login'));
    }
});
