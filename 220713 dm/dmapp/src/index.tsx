import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './Top';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from "./Signup"
import Base from './Base';
import Welcome from './Welcome';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <Base /> */}
    <Route path="/"><Top /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path='/welcome'><Welcome/></Route>
  </BrowserRouter>
);