import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MantineProvider
          theme={{
              // fontFamily: 'Limelight, cursive',
              // fontFamilyMonospace: 'Monaco, Courier, monospace',
              // headings: { fontFamily: 'Greycliff CF, sans-serif' },
              colors: {
                  'orange': ['#FFC76E', '#FFC76E', '#FFC76E', '#FFC76E', '#FFC76E', '#FFC76E', '#FFC76E', '#FFC76E', '#FFC76E', '#FFC76E'],
                  'pink': ['#FFB3BC', '#FFB3BC', '#FFB3BC', '#FFB3BC', '#FFB3BC', '#FFB3BC', '#FFB3BC', '#FFB3BC', '#FFB3BC', '#FFB3BC'],
              },
          }}
      >
          <App />
      </MantineProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
