import { StateSchema } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    it('should return form', () => {
        const form: Profile = {
            firstname: 'Vova',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
