import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: DeepPartial<ReactNode>
    initialState?: DeepPartial<StateSchema>
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const navigate = useNavigate();

    const store = createReduxStore(initialState as StateSchema, navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
export { StoreProvider };
