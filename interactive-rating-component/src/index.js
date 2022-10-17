import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className={'bg-background flex items-center justify-center h-screen'}>
        <App />
      </div>
  </React.StrictMode>
);
