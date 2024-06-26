import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities/User';
import { NotificationButton } from '@/features/NotificationButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(className, {}, [cls.Navbar])}>
                <div />

                <div className={cls.links}>
                    <NotificationButton />
                    <Button onClick={onLogout} theme={ButtonTheme.CLEAR}>{t('logOut')}</Button>
                </div>
            </div>
        );
    }
    return (
        <header className={classNames(className, {}, [cls.Navbar])}>
            <div />
            <div>
                <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR}>{t('logIn')}</Button>
            </div>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onToggleModal}
                />
            )}
        </header>
    );
});
export { Navbar };
