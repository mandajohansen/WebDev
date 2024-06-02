import React from 'react';
import Navbar from "./components/Navbar";
import Projects from './components/Banner/Projects';
import Home from './components/Banner/Home';
import About from './components/Banner/About';
import Skills from './components/Banner/Skills';
import Contact from './components/Banner/Contact';

function App(){
  return (
    
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;