import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const url = "http://127.0.0.1:8000";

const options: AxiosRequestConfig = {
  url: `${url}/articles`,
  method: "GET",
};

interface Data{
  first:string;
  last:string;
  born:number;
}

axios(options)
  .then((res: AxiosResponse<Data[]>) => {
    const { data, status } = res;
    console.log(data)
    console.log(status)
  })
  .catch((e: AxiosError<{ error: string }>) => {
    // エラー処理
    console.log(e.message);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
