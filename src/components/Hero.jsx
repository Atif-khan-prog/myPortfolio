import React from 'react'
import heroBg from '../assets/images/heroBg.jpg'
import heroBg2 from '../assets/images/heroBg2.jpg'
import heroBg3 from '../assets/images/heroBg3.jpg'
import profile from '../assets/img.jpg'
const Hero = () => {
  return (
    <div className="relative h-screen w-full mb-4 overflow-hidden" id='home'>
      {/* Blurred background */}
      <div style={{
        
      }}>
        {/* Gradient background */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroBg3})`,
          // background: "linear-gradient(135deg, rgba(0,0,0,0.95) 70%, rgba(13,0,210,0.7) 100%)",
          filter: "blur(8px)",
          transform: "scale(1.1)",
        }} />

        {/* Stars layer */}
        <div className="stars">Aefjsodjfoisd</div>

      </div>


      {/* Content (stays sharp) */}
      <div className="relative z-10 text-white">
        {/* Navbar */}
        <nav className="fixed flex justify-between items-center w-full px-6 py-4">
          <div className="font-bold text-xl md:text-3xl cursor-pointer flex flex-col">Muhammad Atif
            <span className='text-[12px] text-gray-500 flex justify-center '>Full Stack | MERN & AI Enthusiast</span>
          </div>


          {/* Desktop Menu */}
          <ul className="flex gap-5 mt-4 flex-col md:flex-row space-x-8 text-base md:text-lg">
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#home'>Home</a>
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#skills'>Tech Stack</a>
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#projects'>Projects</a>
          </ul>
        </nav>

        {/* Hero section */}
        <div className="h-[80vh] pt-32 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24">
          {/* Profile Image */}
          <div className="flex items-center justify-center h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full border">
            <img src={profile} alt="" className='w-56 h-56 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full ' />
          </div>

          {/* Text + Buttons */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 lg:ml-12">
            <h1 className="text-3xl md:text-5xl font-bold">
              Welcome to My Portfolio
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="#contact">
                <button className="border cursor-pointer px-6 py-2 hover:bg-blue-800 transition-all duration-200 ease-in rounded">
                  Contact
                </button>
              </a>
              <a
                href="/docs/myCv.pdf"
                download="Muhammad-Atif-CV.pdf"
              >
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-800 px-6 py-2 text-white rounded">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
