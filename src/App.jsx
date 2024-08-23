// import Login from "./components/Login"
// import Criar from "./components/Criar"

// function App(){
//   return(
//     <>
//       <Login/>
//       <Criar/>
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Criar from './components/Criar/Criar'; 
import Inicial from './components/Inicial/Inicial';
import Usuario from './components/Usuario/Usuario';
import Favoritos from './components/Favoritos/Favoritos';
import Meuslivros from './components/Meuslivros/Meuslivros';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/criar" element={<Criar />} />
          <Route path="/Inicial" element={<Inicial />} />
          <Route path="/usuario" element={<Usuario/>} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/meuslivros" element={<Meuslivros/>} />



        </Routes>

    </BrowserRouter>
  );
}

export default App;
