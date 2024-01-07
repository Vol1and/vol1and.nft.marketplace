import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>();

    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const items = [
        { link: RoutePath.MAIN, icon: <MainIcon />, label: t('main') },
        { link: RoutePath.ABOUT, icon: <AboutIcon />, label: t('aboutUs') },
    ];

    return (
        <div
            data-testid="sidebar"
            className={classNames(className, { [cls.collapsed]: collapsed }, [cls.Sidebar])}
        >
            <div className={cls.items}>
                {items.map((item) => (
                    <SidebarItem
                        key={item.label}
                        collapsed={collapsed}
                        link={item.link}
                        icon={item.icon}
                    >
                        {item.label}
                    </SidebarItem>
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <Button
                square
                size="lg"
                theme="bg-inverted"
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
};
export { Sidebar };
