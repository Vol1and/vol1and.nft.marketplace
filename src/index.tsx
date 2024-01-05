import { render } from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <Suspense fallback="">
                    <App />
                </Suspense>
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('app'),
);
