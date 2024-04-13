import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, getArticleFilterType } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';
import {
    getArticleFilterOrder,
    getArticleFilterSearch,
    getArticleFilterSortField,
} from 'entities/Article/model/selectors/articleFilterSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import { getArticleListPageLimit, getArticleListPageNum } from '../../selectors/articleListPageSelectors';
import {ArticleType} from "entities/Article/model/consts/article";

interface FetchArticleListProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>('/fetchArticleList', async (props, thunkAPI) => {
    const {
        extra, getState, rejectWithValue,
    } = thunkAPI;
    const limit = getArticleListPageLimit(getState());
    const search = getArticleFilterSearch(getState());
    const order = getArticleFilterOrder(getState());
    const sortField = getArticleFilterSortField(getState());
    const type = getArticleFilterType(getState());
    const page = getArticleListPageNum(getState());
    try {
        addQueryParams({
            sort: sortField, order, search, type,
        });

        const response = await extra.api.get('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _sort: sortField,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
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
