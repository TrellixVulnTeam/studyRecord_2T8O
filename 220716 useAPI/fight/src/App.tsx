import {BrowserRouter, Routes, Route} from "react-router-dom"
import Articles from './Articles';
import Signup from './Signup';
import Signin from "./Signin";
import Base from "./Base ";

function App() {
  return (
    <BrowserRouter>
      <Base />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
