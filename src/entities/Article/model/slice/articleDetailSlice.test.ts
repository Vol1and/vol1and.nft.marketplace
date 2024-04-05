import { Article, articleDetailReducer, fetchArticleById } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleDetailSchema } from '../types/articleDetailSchema';

const mockData: Article = {
    blocks: [],
    subtitle: '',
    title: '',
    createdAt: '',
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
