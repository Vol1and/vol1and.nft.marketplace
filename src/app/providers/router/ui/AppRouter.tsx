import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useCallback } from 'react';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from '../ui/RequireAuth';
import { routeConfig, RouteConfigElement } from '../config/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteConfigElement) => (
        <Route
            path={route.path}
            element={route.requireAuth
                ? (
                    <RequireAuth>
                        {route.element}
                    </RequireAuth>
                ) : route.element}
        />
    ), []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export { AppRouter };
