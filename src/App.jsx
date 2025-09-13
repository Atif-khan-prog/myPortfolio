import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'

const App = () => {

  return (
    <>
    <div className='overflow-hidden'>  
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      </div>
    
    </>
  )
}

export default App