import { StateSchema } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    it('should return data', () => {
        const data: Profile = {
            firstname: 'Vova',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
