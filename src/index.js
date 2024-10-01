import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This should be the second argument of ReactDOM.render
);
