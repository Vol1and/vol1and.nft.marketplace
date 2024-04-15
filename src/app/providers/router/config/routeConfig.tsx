import React, { ReactNode } from 'react';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ArticleListPage } from '@/pages/ArticleListPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/types';

export interface RouteConfigElement {
    path: RoutePath,
    element: ReactNode,
    requireAuth?: boolean
    roles?: UserRole[]
}

export const routeConfig: RouteConfigElement[] = [
    {
        path: RoutePath.MAIN,
        element: <MainPage />,

    },
    {
        path: RoutePath.ARTICLES,
        element: <ArticleListPage />,
        requireAuth: true,

    },
    {
        path: RoutePath.ARTICLE_DETAIL,
        element: <ArticleDetailPage />,
        requireAuth: true,
    },
    {
        path: RoutePath.ARTICLE_CREATE,
        element: <ArticleEditPage />,
    },
    {
        path: RoutePath.ARTICLE_EDIT,
        element: <ArticleEditPage />,
    },
    {
        path: RoutePath.ABOUT,
        element: <AboutPage />,
    },
    {
        path: RoutePath.PROFILE_DETAIL,
        element: <ProfilePage />,
        requireAuth: true,
    },
    {
        path: RoutePath.ADMIN_PANEL,
        element: <AdminPanelPage />,
        requireAuth: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage />,
    },
];
