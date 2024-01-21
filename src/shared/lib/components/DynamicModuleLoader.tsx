import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

type ReducerListEntry = [
    StateSchemaKey,
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
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove('login');
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, []);

    return <>{children}</>;
};
export { DynamicModuleLoader };
