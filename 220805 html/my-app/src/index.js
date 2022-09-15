import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Base from './Base';
import Buy from "/Buy";
import Sell from "./Sell"


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Base />
    <Buy />
    <Sell />
    {/* <App /> */}
  </React.StrictMode>
);