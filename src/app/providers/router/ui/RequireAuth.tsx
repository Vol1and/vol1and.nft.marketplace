import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/types';

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
