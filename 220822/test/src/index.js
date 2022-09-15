import React from 'react';
import ReactDOM from 'react-dom/client';
import Base from './Base';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Features from "./Features"
import Pricing from "./Pricing"
import User from "./User"
import Login from "./Login"
import Already from "./Already"
import About from "./About"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Base />
  <div className='container pt-4'>
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/features/`} element={<Features />} />
      <Route path={`/pricing/`} element={<Pricing />} />
      <Route path={`/user/`} element={<User />} />
      <Route path={`/login/`} element={<Login />} />
      <Route path={`/login/already`} element={<Already />} />
      <Route path={"/about"} element={<About />} />
    </Routes>
  </div>
  </BrowserRouter>
);