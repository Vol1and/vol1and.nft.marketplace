import React, { memo, PropsWithChildren, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { IconItem } from '@storybook/blocks';
import cls from './SidebarItem.module.scss';

export interface SidebarItemProps {
    className?: string
    link: string
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
    collapsed?: boolean
}

const SidebarItem = memo((props: PropsWithChildren<SidebarItemProps>) => {
    const {
        className, icon, link, children, collapsed,
    } = props;
    return (
        <AppLink
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className])}
            theme="secondary"
            to={link}
        >
            <props.icon />
            <span>{children}</span>
        </AppLink>
    );
});
export { SidebarItem };
