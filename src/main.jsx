import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AnimeProvider from './context/AnimeProvider.jsx';
import './styles.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <AnimeProvider>
          <App />
        </AnimeProvider>
      </BrowserRouter>
    </StrictMode>,
  );

