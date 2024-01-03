import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import React from 'react';

export const routeConfig = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
];
