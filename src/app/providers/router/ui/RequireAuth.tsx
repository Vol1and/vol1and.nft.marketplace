import { JSX } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const authData = useSelector(getUserAuthData);
    if (!authData) {
        return <Navigate to={RoutePath.MAIN} replace />;
    }

    return children;
};
export { RequireAuth };
