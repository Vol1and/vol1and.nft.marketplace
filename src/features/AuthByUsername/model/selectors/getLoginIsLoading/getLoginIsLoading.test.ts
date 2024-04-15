import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getProfileIsLoading.test', () => {
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
