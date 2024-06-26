import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../types/user';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles || [];

export const isUserAdmin = createSelector(getUserRoles, (roles) => roles.includes(UserRole.ADMIN));
export const isUserManager = createSelector(getUserRoles, (roles) => roles.includes(UserRole.MANAGER));

export const getUserMounted = (state: StateSchema) => state.user._mounted;

export const getUserAuthData = (state: StateSchema) => state.user.authData;
