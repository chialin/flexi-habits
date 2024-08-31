import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bulma/css/bulma.min.css';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
