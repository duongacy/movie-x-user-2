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
            light: '#5c5b5e',
            main: '#343336',
            dark: '#242325',
            contrastText: '#fff',
        },
        secondary: {
            light: '#d64f39',
            main: '#CC2408',
            dark: '#8e1905',
            contrastText: '#000',
        },
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
