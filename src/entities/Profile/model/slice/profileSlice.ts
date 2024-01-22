import {createSlice} from '@reduxjs/toolkit';
import {ProfileSchema} from 'entities/Profile';

const initialState: ProfileSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
    readonly: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
