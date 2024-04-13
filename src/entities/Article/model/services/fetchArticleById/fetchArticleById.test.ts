import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { Article } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';
import {ArticleType} from "entities/Article/model/consts/article";

const mockData: Article = {
    blocks: [],
    subtitle: '',
    title: '',
    createdAt: '',
    user: {
        avatar: '',
        username: '',
        id: '',
        roles: [],
    },
    id: '',
    img: '',
    type: [ArticleType.ECONOMICS],
    views: 0,
};

describe('fetchArticleById.test', () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    test('should success', async () => {
        thunk.api.get.mockReturnValue(Promise.resolve({ data: mockData }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockData);
    });

    test('should work with error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 500 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
