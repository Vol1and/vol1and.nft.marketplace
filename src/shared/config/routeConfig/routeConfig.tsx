import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import React from 'react';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';

export const routeConfig = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
