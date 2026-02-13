import { useState } from 'react'
import Cart from './Component/Cart'
import './App.css'
import {Signin} from './pages/Signin';
import {Signup} from './pages/Signup';
import { Home } from './pages/Home';
import { Navbar } from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <Signup></Signup> */}
      {/* <Signin/>
      <Cart/> */}
      <Navbar></Navbar>

      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
