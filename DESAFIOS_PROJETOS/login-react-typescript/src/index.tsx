import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Login';
import { GlobalStyle } from './global';

const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
