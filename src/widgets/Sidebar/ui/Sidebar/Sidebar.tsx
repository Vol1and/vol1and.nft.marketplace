import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string
}

const Sidebar = (({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>();

    const items = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <menu
            data-testid="sidebar"
            className={classNames(className, { [cls.collapsed]: collapsed }, [cls.Sidebar])}
        >
            <div className={cls.items}>
                {items.map((item) => (
                    <SidebarItem
                        key={item.link}
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
                theme={ButtonTheme.BG_INVERTED}
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
        </menu>
    );
});
export { Sidebar };
