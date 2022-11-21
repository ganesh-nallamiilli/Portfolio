import React from 'react'
import About from '../components/About';
import HireMe from '../components/HireMe';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Team from '../components/Team';
import Work from '../components/Work';

function Home() {
  return (
    <div>
       
        <Navbar />
        <About />
        <Work />
        <Skills />
        <Team />
        <HireMe />
    </div>
  )
}

export default Home;