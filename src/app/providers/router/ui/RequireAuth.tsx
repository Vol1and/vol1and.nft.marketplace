import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { UserRole } from 'entities/User/model/types/user';

interface RequireAuthProps {
    children: ReactNode;
    roles?: UserRole[]
}

const RequireAuth = ({ children, roles }: RequireAuthProps): JSX.Element => {
    const authData = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => userRoles.includes(role));
    }, [roles, userRoles]);

    if (!authData || !hasRequiredRoles) {
        return <Navigate to={RoutePath.MAIN} replace />;
    }

    return children as JSX.Element;
};
export { RequireAuth };
