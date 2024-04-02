import { Profile, updateProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const profileMock: Profile = {
    firstname: 'Vova',
    lastname: 'Bebor',
    country: Country.Canada,
    currency: Currency.EUR,
    username: 'vol1and',
    city: 'Donetsk',
    age: 22,
};

describe('profileSlice.test', () => {
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: { firstname: 'Vova' },
            data: { firstname: 'Bebra' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({ readonly: true, form: { firstname: 'Bebra' }, data: { firstname: 'Bebra' } });
    });

    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, error: 'ebao' };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({ isLoading: true, error: undefined });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true, data: undefined, form: undefined };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(profileMock, ''),
        )).toEqual({
            isLoading: false, data: profileMock, form: profileMock, readonly: true,
        });
    });

    // test('test update profile service error', () => {
    //     const state: DeepPartial<ProfileSchema> = { isLoading: true, error: undefined };
    //     expect(profileReducer(
    //         state as ProfileSchema,
    //         updateProfileData.rejected(new Error('pidor'), ''),
    //     )).toEqual({
    //         isLoading: false, error: 'pidor',
    //     });
    // });
});
