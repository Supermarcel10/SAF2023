import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Story from "./components/Story";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Story />
  </React.StrictMode>
);
