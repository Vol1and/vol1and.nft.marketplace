import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from '../../types/article';

// eslint-disable-next-line max-len
export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>('profile/fetchArticleById', async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<Article>(`/articles/${id}`, {
            params: {
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue(i18n.t('error'));
    }
});
