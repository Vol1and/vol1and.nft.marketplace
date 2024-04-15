import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
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
        <aside
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
        </aside>
    );
});
export { Sidebar };
