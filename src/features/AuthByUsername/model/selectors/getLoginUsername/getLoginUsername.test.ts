import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
