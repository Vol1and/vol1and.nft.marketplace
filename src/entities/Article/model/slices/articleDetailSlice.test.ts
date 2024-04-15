import { ArticleDetailSchema } from '../types/articleDetailSchema';
import { ArticleType } from '../consts/article';
import { Article } from '../types/article';
import { articleDetailReducer } from './articleDetailSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const mockData: Article = {
    blocks: [],
    subtitle: '',
    title: '',
    createdAt: '',
    user: {
        id: '',
        username: '',
        avatar: '',
        roles: [],
    },
    id: '',
    img: '',
    type: [ArticleType.ECONOMICS],
    views: 0,
};
describe('articleDetailSlice.test', () => {
    test('test update profile services pending', () => {
        const state: DeepPartial<ArticleDetailSchema> = { isLoading: false, error: 'ebao' };
        expect(articleDetailReducer(
            state as ArticleDetailSchema,
            fetchArticleById.pending,
        )).toEqual({ isLoading: true, error: undefined });
    });

    test('test update profile services rejected', () => {
        const state: DeepPartial<ArticleDetailSchema> = { isLoading: false, error: 'ebao' };
        expect(articleDetailReducer(
            state as ArticleDetailSchema,
            fetchArticleById.pending,
        )).toEqual({ isLoading: true, error: undefined });
    });

    test('test update profile services fulfilled', () => {
        const state: DeepPartial<ArticleDetailSchema> = { isLoading: true, data: undefined };
        expect(articleDetailReducer(
            state as ArticleDetailSchema,
            fetchArticleById.fulfilled(mockData, '', ''),
        )).toEqual({
            isLoading: false, data: mockData,
        });
    });
});
