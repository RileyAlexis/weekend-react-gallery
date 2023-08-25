import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';
import { ThemeProvider, styled } from '@mui/material/styles';
import { lightTheme } from './lightTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
        <App />
        </ThemeProvider>
    </React.StrictMode>
);
