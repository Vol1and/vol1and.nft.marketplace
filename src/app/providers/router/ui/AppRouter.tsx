import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useCallback } from 'react';
import { routeConfig, RouteConfigElement } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

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
                {...routeConfig.map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export { AppRouter };
