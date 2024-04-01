import React, { ReactNode } from 'react';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticleDetailPage } from 'pages/ArticleDetailPage';
import { ArticleListPage } from 'pages/ArticleListPage';

export enum RoutePath {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    ARTICLES = '/articles',
    ARTICLE_DETAIL = '/articles/:id',
    NOT_FOUND = '*'
}

export interface RouteConfigElement {
    path: RoutePath,
    element: ReactNode,
    requireAuth?: boolean
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
        path: RoutePath.ABOUT,
        element: <AboutPage />,
    },
    {
        path: RoutePath.PROFILE,
        element: <ProfilePage />,
        requireAuth: true,
    },
    {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage />,
    },
];
