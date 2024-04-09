import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { ArticleDetailSchema } from 'entities/Article/model/types/articleDetailSchema';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticleListPageSchema } from 'pages/ArticleListPage';
import {ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema} from 'pages/ArticleDetailPage';
import { PageSchema } from 'widgets/Page';
import { ArticleFilterSchema } from 'entities/Article/model/types/articleFilterSchema';

export interface StateSchema {
    user: UserSchema

    // Async reducers
    login?: LoginSchema

    profile?: ProfileSchema
    articleDetail?: ArticleDetailSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema
    addCommentForm?: AddCommentFormSchema
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
