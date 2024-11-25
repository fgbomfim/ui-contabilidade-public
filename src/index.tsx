import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import reportWebVitals from './report-web-vitals';

const root = ReactDOM.createRoot(
  document.getElementById('portal-mf-bomfim-services-public') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
