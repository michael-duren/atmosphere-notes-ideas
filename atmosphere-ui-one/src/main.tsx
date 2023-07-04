import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { musicStore } from './stores/music/music.ts';
import { appStore } from './stores/app/app.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Provider store={musicStore}>
        <App />
      </Provider>
    </Provider>
  </React.StrictMode>
);
