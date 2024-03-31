import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface ProfileCardProps {
    className?: string
}

const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    return (
        <div className={classNames(className, {}, [cls.ProfileCard])}>
            <div />
        </div>
    );
};
export { ProfileCard };
