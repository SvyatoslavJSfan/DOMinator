import 'app/styles/index.scss';
import { render } from 'react-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/themeProvider';

import App from './app/App';

import 'shared/config/i18n/i18n';




render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/> 
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>

    ,
    document.getElementById('root')
)