import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getProfileError.test', () => {
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
