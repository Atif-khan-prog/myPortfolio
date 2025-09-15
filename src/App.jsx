import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'
const App = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster position='top-right' reverseOrder={false} />
    </div>
  )
}

export default App
