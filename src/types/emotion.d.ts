import '@emotion/react';
import type theme from '../styles/theme';

declare module '@emotion/react' {
    type Theme = typeof theme;

    export interface ThemeProviderProps {
        theme?: Theme;
    }
}
