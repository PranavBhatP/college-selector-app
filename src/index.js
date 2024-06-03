import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <Router>
        <Routes>
          <Route path = "/*" element = {<App/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);


