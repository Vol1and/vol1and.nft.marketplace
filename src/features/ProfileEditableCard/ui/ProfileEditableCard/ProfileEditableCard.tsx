import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from '@/entities/Profile';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { ProfileEditableCardHeader } from '../ProfileEditableCardHeader/ProfileEditableCardHeader';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import {
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
} from '../../model/selectors/getEditableProfileSelectors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';

interface ProfileEditableCardProps {
    className?: string
    id: string
}
const reducers: ReducerList = {
    profile: profileReducer,
};
export const ProfileEditableCard = memo((props: ProfileEditableCardProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: +value || 0 }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value || '' }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value || '' }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

            <ProfileEditableCardHeader id={id} />
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    );
});
