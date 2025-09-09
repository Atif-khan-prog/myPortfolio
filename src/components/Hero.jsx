import React from 'react'
import heroBg from '../assets/images/heroBg.jpg'

const Hero = () => {
  return (
    <div className="relative h-screen w-full mb-4 overflow-hidden" id='home'>
      {/* Blurred background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
          transform: "scale(1.1)", // removes white edges
        }}
      ></div>

      {/* Content (stays sharp) */}
      <div className="relative z-10 text-white">
        {/* Navbar */}
        <nav className="fixed flex justify-between items-center w-full px-6 py-4">
          <div className="font-bold text-xl md:text-3xl cursor-pointer flex flex-col">Muhammad Atif
            <span className='text-[12px] text-gray-500 flex justify-center '>Full Stack | MERN & AI Enthusiast</span>
            </div>
          

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-base md:text-lg">
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#home'>Home</a>
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#skills'>Tech Stack</a>
            <a  className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#projects'>Projects</a>
          </ul>
        </nav>

        {/* Hero section */}
        <div className="h-[80vh] pt-32 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24">
          {/* Profile Image */}
          <div className="flex items-center justify-center h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full border">
            profile image
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
