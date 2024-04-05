import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { ArticleDetailSchema } from 'entities/Article/model/types/articleDetailSchema';
import {ArticleDetailsCommentsSchema} from "pages/ArticleDetailPage/model/types/ArticleDetailsCommentsSchema";
import {AddCommentFormSchema} from "features/AddCommentForm";

export interface StateSchema {
    user: UserSchema

    // Async reducers
    login?: LoginSchema

    profile?: ProfileSchema
    articleDetail?: ArticleDetailSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
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
        navigate?: NavigateFunction
    },
    state: StateSchema
    rejectValue: T
}
