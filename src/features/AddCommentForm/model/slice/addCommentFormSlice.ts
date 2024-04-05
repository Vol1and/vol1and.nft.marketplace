import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from 'features/AddCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
    error: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(addCommentFormByUsername.pending, (state) => {
    //         state.error = undefined;
    //         state.isLoading = true;
    //     });
    //     builder.addCase(addCommentFormByUsername.fulfilled, (state, action) => {
    //         // state.username = action.payload.username;
    //         state.isLoading = false;
    //     });
    //     builder.addCase(addCommentFormByUsername.rejected, (state, action) => {
    //         state.error = action.payload;
    //
    //         state.isLoading = false;
    //     });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
