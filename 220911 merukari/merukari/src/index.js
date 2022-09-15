import React from 'react';
import ReactDOM from 'react-dom/client';
import Admin from './Admin';
import User from './User';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Bottoms from "./Bottoms"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<User />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
    <Bottoms />
  </BrowserRouter>
);