import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import App from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

createRoot(document.getElementById('app')!).render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
)
