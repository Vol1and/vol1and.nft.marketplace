import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { ArticleListPageSchema } from '@/pages/ArticleListPage';
import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from '@/pages/ArticleDetailPage';
import { PageSchema } from '@/widgets/Page';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/ProfileEditableCard';
import { ArticleDetailSchema, ArticleFilterSchema } from '@/entities/Article';

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    user: UserSchema

    // Async reducers
    login?: LoginSchema

    profile?: ProfileSchema
    articleDetail?: ArticleDetailSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema
    articleList?: ArticleListPageSchema
    articleFilter?: ArticleFilterSchema
    page: PageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
}

export interface StoreWithManager extends EnhancedStore {
    reducerManager: ReducerManager
}

export interface ThunkConfig<T> {
    extra: {
        api: AxiosInstance
    },
    state: StateSchema
    rejectValue: T
}
