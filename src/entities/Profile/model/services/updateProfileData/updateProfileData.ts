import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile';
import { type Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>('profile/updateProfileData', async (profileId, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    try {
        const formData = getProfileForm(getState());

        const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue(i18n.t('error'));
    }
});
