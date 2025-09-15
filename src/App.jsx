import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const images = Array.from(document.images)
    let loadedCount = 0

    if (images.length === 0) {
      setLoading(false)
      return
    }

    const checkAllLoaded = () => {
      loadedCount++
      if (loadedCount === images.length) {
        setLoading(false)
      }
    }

    images.forEach(img => {
      if (img.complete) {
        checkAllLoaded()
      } else {
        img.addEventListener('load', checkAllLoaded)
        img.addEventListener('error', checkAllLoaded)
      }
    })
  }, [])

  return (
    <div className='overflow-hidden'>
      {loading ? (
        <div className='w-full bg-black text-white font-bold h-screen flex justify-center items-center text-3xl'>
          Loading...
        </div>
      ) : (
        <div>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  )
}

export default App
