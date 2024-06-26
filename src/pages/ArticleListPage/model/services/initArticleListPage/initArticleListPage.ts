import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articleFilterActions, ArticleSortField, ArticleType } from '@/entities/Article';
import { articleListPageActions } from '../../slices/articleListPageSlice';
import { SortOrder } from '@/shared/types';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

interface FetchArticleListProps {
    replace?: boolean
}

export const initArticleListPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>('/initArticleListPage', (searchParams, thunkAPI) => {
    const { dispatch } = thunkAPI;

    const order = searchParams.get('order');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');
    const type = searchParams.get('type');
    dispatch(articleListPageActions.initState());
    dispatch(articleFilterActions.setSearch(search || ''));
    dispatch(articleFilterActions.setSort(sort as ArticleSortField || ArticleSortField.CREATED));
    dispatch(articleFilterActions.setOrder(order as SortOrder || 'asc'));
    dispatch(articleFilterActions.setType(type as ArticleType || ArticleType.ALL));
    dispatch(fetchArticleList({}));
});
