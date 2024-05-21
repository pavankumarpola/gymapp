import React, { useState } from 'react';
import './App.css';
import App2 from './App2';
import Body from './Bodyparts';
import Equi from './Equipment';
import { Exercise as Exer } from './Exercise';
import Navbar from './Navbar';
import Login from './login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {

  const [y, z] = useState("cardio");
  const [i, j] = useState(15);


  const Data = (value) => {
    z(value);
  }



  return (
    <div>


      <BrowserRouter>
      <Navbar part={Data} />
        <Routes>

          <Route path='/'       element={<App2 h={y}  n={i} />}> </Route>
          <Route path='/b-list' element={<Body />}>  </Route>
          <Route path='/e-list' element={<Equi />}>  </Route>
          <Route path='/exer'   element={<Exer  r={i} />}>  </Route>
          <Route path='/login' element={<Login />}>  </Route>
          


        </Routes>
      </BrowserRouter>






    </div>
  );
}

export default App;
