import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
);