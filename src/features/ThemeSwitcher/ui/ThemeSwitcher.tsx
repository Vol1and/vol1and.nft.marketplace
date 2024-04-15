import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const getThemeIcon = () => {
        const icons: Record<Theme, JSX.Element> = {
            [Theme.DARK]: <DarkIcon />,
            [Theme.LIGHT]: <LightIcon />,
        };
        return icons[theme];
    };

    return (
        <Button onClick={toggleTheme} className={classNames(className, {}, [cls.ThemeSwitcher])}>
            {getThemeIcon()}
        </Button>
    );
});
export { ThemeSwitcher };
