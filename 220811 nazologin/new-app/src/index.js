import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Base from "./Base"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Base />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </>
);