
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
