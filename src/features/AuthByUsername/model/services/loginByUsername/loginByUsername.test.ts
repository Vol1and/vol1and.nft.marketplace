import axios from 'axios';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const userMock = { username: '123', id: '1' };
describe('loginByUsername.test', () => {

    let thunk = new TestAsyncThunk(loginByUsername);
    test('should success login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userMock }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userMock));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userMock);
    });

    test('should work with 403 error', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Incorrect login');
    });
});
