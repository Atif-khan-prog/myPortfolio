import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPage = () => setLoading(true);

    if(document.readyState === 'complete'){
      setLoading(false)
    }
    document.addEventListener('load', loadPage)

    return () => document.removeEventListener('load', loadPage)
  },[])
  return (
    <>
    <div className='overflow-hidden'>  
     {loading ? <div className='w-full font-bold h-screen flex justify-center items-center text-3xl'>
      Loading... </div> :
      <div>
         <Hero />
      <Skills />
      <Projects />
      <Contact />
        </div>}
      </div>
    
    </>
  )
}

export default App