import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(className, {}, [cls.Navbar])}>
            <div />
            <div className={cls.links}>
                <AppLink theme="secondary" to="/">{t('main')}</AppLink>
                <AppLink theme="secondary" to="/about">{t('aboutUs')}</AppLink>
            </div>
        </div>
    );
};
export { Navbar };
