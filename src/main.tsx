import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from '@ui/theme/theme';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import './i18n';
import { CookiesProvider } from 'react-cookie';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <HelmetProvider>
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </CookiesProvider>
    </HelmetProvider>
  </ThemeProvider>
);
