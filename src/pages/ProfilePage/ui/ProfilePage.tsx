import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePage.module.scss';
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(className, {}, [cls.ProfilePage])}/>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
