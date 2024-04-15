import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ProfileSchema } from '../types/ProfileEditableCardSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    isLoading: false,
    data: undefined,
    form: undefined,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (state, action: PayloadAction<Partial<Profile>>) => {
            state.form = {
                ...state.data,
                ...action.payload,
            };
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.form = action.payload;
                state.isLoading = false;
            }).addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;

                state.isLoading = false;
            }).addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.isLoading = false;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
