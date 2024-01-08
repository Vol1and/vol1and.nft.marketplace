import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(className, {}, [cls.Navbar])}>
            <div />
            <Button onClick={onToggleModal} theme="clear">{t('Login')}</Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                Lorem ipsum
            </Modal>
        </div>
    );
};
export { Navbar };
