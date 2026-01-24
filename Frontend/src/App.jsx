import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import './index.css'; 
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
function App() {

  return (
    <>
    <div>
      {/* all components */}
      <ToastContainer />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
        <Footer/>
     </div>
    
    </>
  )
}

export default App
