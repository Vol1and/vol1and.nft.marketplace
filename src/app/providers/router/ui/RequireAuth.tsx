import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const RequireAuth = ({ children }: {children: ReactNode}): JSX.Element => {
    const authData = useSelector(getUserAuthData);
    if (!authData) {
        return <Navigate to={RoutePath.MAIN} replace />;
    }

    return children as JSX.Element;
};
export { RequireAuth };
