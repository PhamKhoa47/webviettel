
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Detect môi trường (GitHub Pages vs domain riêng)
const isGitHubPages = window.location.hostname.includes('github.io');

// Nếu dùng domain riêng → BrowserRouter
// Nếu dùng GitHub Pages mặc định → HashRouter
const Router = isGitHubPages ? HashRouter : BrowserRouter;

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </StrictMode>
);
