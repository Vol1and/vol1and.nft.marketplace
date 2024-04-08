import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { articleListPageActions } from 'pages/ArticleListPage/model/slices/articleListPageSlice';
import { fetchArticleList } from 'pages/ArticleListPage/model/services/fetchArticleList/fetchArticleList';
import { fetchNextArticleListPage } from './fetchNextArticleListPage';

const mockState = {
    entities: {},
    page: 1,
    ids: [],
    hasMore: true,
    isLoading: false,
};

jest.mock('../fetchArticleList/fetchArticleList');
describe('fetchNextArticleListPage.test', () => {
    test('should work correctly', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticleListPage, {
            articleList: {
                ...mockState,
            },
        });
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(thunk.dispatch).toHaveBeenCalledWith(articleListPageActions.setPage(2));
        expect(fetchArticleList).toHaveBeenCalledWith({ page: 2 });
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    test('should not call if isLoading is true', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticleListPage, {
            articleList: {
                ...mockState,
                isLoading: true,
            },
        });
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.dispatch).not.toHaveBeenCalledWith(articleListPageActions.setPage(2));
        expect(fetchArticleList).not.toHaveBeenCalledWith({ page: 2 });
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    test('should not call if hasMore is false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticleListPage, {
            articleList: {
                ...mockState,
                hasMore: false,
            },
        });
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.dispatch).not.toHaveBeenCalledWith(articleListPageActions.setPage(2));
        expect(fetchArticleList).not.toHaveBeenCalledWith({ page: 2 });
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
