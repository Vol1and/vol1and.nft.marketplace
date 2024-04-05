import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileCanEdit = (state: StateSchema) => state.user.authData?.id === state.profile?.data?.id;
