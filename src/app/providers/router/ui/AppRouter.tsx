import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {...routeConfig.map((route) => (
                <Route
                    path={route.path}
                    element={(
                        <div className="page-wrapper">
                            {route.element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);

export { AppRouter };
