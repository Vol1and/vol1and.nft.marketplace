import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailIsLoading, getArticleDetailData, getArticleDetailError } from './articleDetailSelectors';
import { ArticleType } from '../consts/article';
import { Article } from '../types/article';

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

describe('articleDetailSelectors.test', () => {
    it('getArticleDetailIsLoading should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                isLoading: true,
            },
        };
        expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(true);
    });

    it('getArticleDetailIsLoading should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(undefined);
    });

    it('getArticleDetailData should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                data: mockData,
            },
        };
        expect(getArticleDetailData(state as StateSchema)).toEqual(mockData);
    });

    it('getArticleDetailData should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailData(state as StateSchema)).toEqual(undefined);
    });

    it('getArticleDetailError should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                error: 'zalupa',
            },
        };
        expect(getArticleDetailError(state as StateSchema)).toEqual('zalupa');
    });

    it('getArticleDetailError should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailError(state as StateSchema)).toEqual(undefined);
    });
});
