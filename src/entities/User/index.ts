import { type User, type UserSchema } from './model/types/user';

export { userReducer, userActions } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';

export { UserSchema, User };
