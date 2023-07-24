import React from 'react';
import ReactDOM from 'react-dom/client';
// import dotenv from 'dotenv';
import './index.css';

import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { AuthContextProvider } from './context/AuthContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();