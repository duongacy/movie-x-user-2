import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './i18n';
import { Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#2c2c2c',
            main: '#000000',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#7c7c7c',
            main: '#505050',
            dark: '#282828',
            contrastText: '#fff',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        warning: {
            light: '#ffb74d',
            main: '#ffa726',
            dark: '#f57c00',
            contrastText: '#fff',
        },
        info: {
            light: '#9d55ff',
            main: '#6220ee',
            dark: '#0a00ba',
            contrastText: '#fff',
        },
        success: {
            light: '#81c784',
            main: '#66bb6a',
            dark: '#388e3c',
            contrastText: '#fff',
        }
    },
});
ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading</div>}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Suspense>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
