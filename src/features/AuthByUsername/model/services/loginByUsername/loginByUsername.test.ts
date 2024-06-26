import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';

const userMock = {
    username: '123', id: '1', avatar: 'Eblan', roles: [],
};
describe('loginByUsername.test', () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    test('should success login', async () => {
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userMock }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userMock));
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userMock);
    });

    test('should work with 403 error', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Incorrect login');
    });
});
