import { useState } from 'react'
import Cart from './Component/Cart'
import './App.css'
import Signin from './Component/Signin'
import Signup from './Component/signup';

function App() {
  return (
    <>
      {/* <Signup></Signup> */}
      <Signin/>
      <Cart/>
    </>
  )
}

export default App
