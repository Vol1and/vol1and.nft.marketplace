import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from '../../assets/icons/theme-dark.svg';
import LightIcon from '../../assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const getThemeIcon = () => {
        // eslint-disable-next-line no-undef
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
};
export { ThemeSwitcher };
