import ReactDOM from 'react-dom';
import App from './App';
import "./normalize.css";
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './i18n';
import { Suspense } from 'react';

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading</div>}>
            <App />
        </Suspense>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
