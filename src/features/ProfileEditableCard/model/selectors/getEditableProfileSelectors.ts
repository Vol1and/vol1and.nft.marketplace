import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly || false;
export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading || false;
export const getProfileForm = (state: StateSchema) => state?.profile?.form;
export const getProfileError = (state: StateSchema) => state?.profile?.error;
export const getProfileData = (state: StateSchema) => state?.profile?.data;
export const getProfileCanEdit = (state: StateSchema) => state.user.authData?.id === state.profile?.data?.id;
