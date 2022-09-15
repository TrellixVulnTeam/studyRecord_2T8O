import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home"
import Register from "./register"
import Login from "./login"
import UserPage from "./userpage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/register/`} element={<Register />} />
      <Route path={`/login/`} element={<Login />} />
      <Route path="/user/:userid" element={<UserPage />}/>
    </Routes>
  </BrowserRouter>
);