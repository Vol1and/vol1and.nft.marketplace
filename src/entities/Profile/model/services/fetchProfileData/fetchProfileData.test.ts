import { Profile } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const profileMock: Profile = {
    firstname: 'Vova',
    lastname: 'Bebor',
    country: Country.Canada,
    currency: Currency.EUR,
    username: 'vol1and',
    city: 'Donetsk',
    age: 22,
};
describe('fetchProfileData.test', () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    test('should success', async () => {
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileMock }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileMock);
    });

    test('should work with error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 500 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
