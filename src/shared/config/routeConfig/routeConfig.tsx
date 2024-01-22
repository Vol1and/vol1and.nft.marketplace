import React from 'react';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export enum RoutePath {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile'
}

export const routeConfig = [
    {
        path: RoutePath.MAIN,
        element: <MainPage />,
    },
    {
        path: RoutePath.ABOUT,
        element: <AboutPage />,
    },
    {
        path: RoutePath.PROFILE,
        element: <ProfilePage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
