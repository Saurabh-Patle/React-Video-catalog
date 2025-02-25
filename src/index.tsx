import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './Components/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
