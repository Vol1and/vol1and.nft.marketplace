import React, { memo, PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
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
