import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from "shared/config/i18n/i18n";
import {getUserAuthData} from "entities/User";
import {getArticleDetailData} from "entities/Article";
import {
    fetchCommentsByArticleId
} from "pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>('articleDetail/addCommentForArticle', async (text, thunkAPI) => {
    const { extra, dispatch, getState, rejectWithValue } = thunkAPI;
    try {

        const userData = getUserAuthData(getState())
        const article = getArticleDetailData(getState())

        const response = await extra.api.post<Comment>('/comments', {
            articleId: article?.id,
            userId: userData?.id,
            text
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article?.id))
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue(i18n.t('Incorrect login'));
    }
});
