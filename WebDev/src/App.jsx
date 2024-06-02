import React from 'react';
import Navbar from "./components/Navbar";
import Projects from './components/Banner/Projects';
import Home from './components/Banner/Home';
import About from './components/Banner/About';
import Skills from './components/Banner/Skills';
import Contact from './components/Banner/Contact';
import Footer from './components/Banner/Footer';

function App(){
  return (
    
    <div className='w-full h-auto px-4'>
      <Navbar />
      <div className='max-w-screen-2xl mx-auto px-16'>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
     
    </div>
    </div>
  )
}

export default App;