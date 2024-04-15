import React, { PropsWithChildren, useMemo, useState } from 'react';
import {Theme} from "@/shared/const/theme";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localstorage";
import { ThemeContext } from '@/shared/context/theme';

interface ThemeProviderProps {
    initialTheme?: Theme
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider = ({ children, initialTheme }: PropsWithChildren<ThemeProviderProps>) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
