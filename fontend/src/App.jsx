import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './components/Products'

function App() {


  return (
    <>
     <Navbar />
     <Products />
     <Footer />
    </>
  )
}

export default App
