// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Adjust path as needed

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
