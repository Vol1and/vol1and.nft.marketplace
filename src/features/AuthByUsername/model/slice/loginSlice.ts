import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    password: '',
    username: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            // state.username = action.payload.username;
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.error = action.payload;

            state.isLoading = false;
        });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
