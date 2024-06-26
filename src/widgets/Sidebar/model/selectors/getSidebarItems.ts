import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main-20-20.svg?react';
import i18n from '@/shared/config/i18n/i18n';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg?react';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg?react';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/types';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData): SidebarItemType[] => {
        const items: SidebarItemType[] = [
            { link: RoutePath.MAIN, icon: MainIcon, label: i18n.t('main') },
            { link: RoutePath.ABOUT, icon: AboutIcon, label: i18n.t('aboutUs') },
        ];

        if (userData) {
            items.push(
                { link: `${RoutePath.PROFILE}/${userData?.id}`, icon: ProfileIcon, label: i18n.t('profile') },
                { link: RoutePath.ARTICLES, icon: ArticleIcon, label: i18n.t('articles') },
            );
        }

        return items;
    },
);
