import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import StoryBook from "./components/StoryBook";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/story" element={<StoryBook />} />
    </Routes>
  </BrowserRouter>
);
