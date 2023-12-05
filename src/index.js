import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
 //import App from './App';
import MainMenu from './components/MainMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainMenu/>
  </React.StrictMode>
);
