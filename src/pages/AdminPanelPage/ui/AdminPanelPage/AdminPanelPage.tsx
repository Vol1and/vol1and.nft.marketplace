import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.AdminPanelPage, {}, [className])} />
    );
});
