import React, { FC } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageA from "./PageA"
import PageB from "./PageB"
import Base from './Base';
import PageC from './PageC';


// ルーティングの実装
const TopPage: FC = () => {
  return (
    <BrowserRouter>
      <Base />
      <Routes>
        <Route path="/PageA" element={<PageA />} />
        <Route path="/PageB" element={<PageB />} />
        <Route path="/PageC" element={<PageC />} />
      </Routes>
    </BrowserRouter>
  )
}

export default TopPage