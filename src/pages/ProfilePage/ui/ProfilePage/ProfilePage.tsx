import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ProfileEditableCard } from '@/features/ProfileEditableCard';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation();

    if (!id) {
        return (
            <div className={classNames(className, {}, [cls.ArticleDetailPage])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <Page className={classNames(className, {}, [cls.ProfilePage])}>
            <ProfileEditableCard id={id} />
        </Page>
    );
};

export default ProfilePage;
