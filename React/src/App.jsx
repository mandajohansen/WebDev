import React from 'react';
import Navbar from "./components/Navbar";
import Projects from './components/Banner/Projects';
import Home from './components/Banner/Home';
import About from './components/Banner/About';
import Resume from './components/Banner/Resume';
import Footer from './components/Banner/Footer';
import { Route, Routes } from "react-router-dom";

function App(){
  return (
    
    <div className='w-full h-auto px-4'>
      <Navbar />
      <div className='max-w-screen-2xl mx-auto px-16'>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Footer />
     
    </div>
    </div>
  )
}

export default App;