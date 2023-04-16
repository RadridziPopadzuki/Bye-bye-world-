import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';



let navItem = { home: '/index', about: '/about/About', contacts: '/contacts/Contacts' };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title="Hello blya" navItem={navItem} />
  </React.StrictMode>
);

reportWebVitals();
