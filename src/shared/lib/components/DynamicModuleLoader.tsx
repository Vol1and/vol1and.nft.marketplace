import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

type ReducerListEntry = [
    string,
    Reducer
]

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps{
    reducers: ReducerList
    removeAfterUnmount?: boolean
}

const DynamicModuleLoader = (props: PropsWithChildren<DynamicModuleLoaderProps>) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;

    const store = useStore() as StoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const myReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            if (!myReducers[name as StateSchemaKey]) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove('login');
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
export { DynamicModuleLoader };
