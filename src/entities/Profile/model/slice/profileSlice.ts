import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

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
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;

            state.isLoading = false;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
