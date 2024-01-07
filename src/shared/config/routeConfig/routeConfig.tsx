import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import React from 'react';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';

export enum RoutePath {
    MAIN = '/',
    ABOUT = '/about'
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
        path: '*',
        element: <NotFoundPage />,
    },
];
