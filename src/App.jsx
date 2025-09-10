import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {

  return (
    <>
    <div className='overflow-hidden'>  
      <Hero />
      <Skills />
      <Projects />
      </div>
    
    </>
  )
}

export default App