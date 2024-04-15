import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { updateProfileData } from './updateProfileData';

const profileMock = {
    firstname: 'Vova',
    lastname: 'Bebor',
    country: Country.Canada,
    currency: Currency.EUR,
    username: 'vol1and',
    city: 'Donetsk',
    age: 22,
};
describe('updateProfileData.test', () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
            form: profileMock,
        },
    });
    test('should success', async () => {
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileMock }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileMock);
    });

    test('should work with error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileMock,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 500 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
