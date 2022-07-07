import React from 'react';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from './Schedule';
import Top from './Top';
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path={`/schedule/`} element={<Schedule />} />
      </Routes>
      <footer>
        <Link to={"/"}>
          <div>
            <img src="./images/home.png" alt="" />
          </div>
        </Link>
        <Link to={"/schedule/"}>
          <div>
            <img src="./images/scheduleapp.png" alt="" />
          </div>
        </Link>
        <a href="https://lms.iwate-u.ac.jp/webclass/?acs_=01e4d674">
          <div>
            <img src="./images/webclass.png" alt="webclass-icon" />
          </div>
        </a>
        <a href="https://ia2.iwate-u.ac.jp/websyllabus/gakusei/slbsCtlDspGakusei.php?type=top">
          <div>
            <img src="./images/iassistant.jpeg" alt="iassistant-icon" />
          </div>
        </a>
      </footer>
    </BrowserRouter>
  );
}

export default App;
