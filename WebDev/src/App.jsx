import React from 'react'
import Navbar from "./components/Navbar";
import Projects from './components/Banner/Projects';
import About from './components/Banner/About';
import Skills from './components/Banner/Skills';
import Contact from './components/Banner/Contact';

function App(){
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;