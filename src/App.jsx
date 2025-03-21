import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './routes/Error';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Produto" element={<Produto/>}/>
            <Route path="/Sobre" element={<Sobre/>}/> 
            <Route path="*" element={<Error/>}/> 
          </Routes>
        <Footer/> {/*footer fora do routes*/}
      </BrowserRouter>
    </>
  )
}

export default App
