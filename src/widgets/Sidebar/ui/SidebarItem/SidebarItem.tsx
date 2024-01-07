import React, { PropsWithChildren, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string
    link: RoutePath
    icon: ReactNode
    collapsed: boolean
}

const SidebarItem = (props: PropsWithChildren<SidebarItemProps>) => {
    const {
        className, icon, link, children, collapsed,
    } = props;
    return (
        <AppLink
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className])}
            theme="secondary"
            to={link}
        >
            {icon}
            <span>{children}</span>
        </AppLink>
    );
};
export { SidebarItem };
