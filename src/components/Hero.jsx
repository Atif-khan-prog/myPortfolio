import React, { useState } from 'react'
import heroBg from '../assets/images/heroBg.jpg'
import heroBg2 from '../assets/images/heroBg2.jpg'
import heroBG3 from '../assets/images/heroBG3.jpg'
import profile from '../assets/img.jpg'
import {Download, BarChart2Icon} from 'lucide-react'
const Hero = () => {

  const[sideMenu, setSideMenu] = useState(true);
  return (
    <div className="relative h-screen w-full mb-4 overflow-hidden" id='home' >
      {/* Blurred background */}
      <div style={{
        
      }}>
        {/* Gradient background */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroBG3})`,
          // background: "linear-gradient(135deg, rgba(0,0,0,0.95) 70%, rgba(13,0,210,0.7) 100%)",
          filter: "blur(8px)",
          transform: "scale(1.1)",
        }} />

        {/* Stars layer */}
        <div className="stars"></div>

      </div>


      {/* Content (stays sharp) */}
      <div className="relative z-10 text-white">
         <div className={`w-full h-screen ${sideMenu && 'hidden'} md:hidden  bg-gray-900`}>
          <nav className=" flex  flex-col  w-full px-6 py-4">
         <div className='flex justify-between w-full'>
           <div className="font-bold text-xl md:text-4xl cursor-pointer justify-start flex flex-col">Muhammad Atif
            <span className='text-[12px] text-gray-500 flex justify-between '>
              Full Stack | MERN & AI Enthusiast
            
              </span>
            
          </div>
          <div className='mt-3'>
            <div className='rotate-270 md:hidden mb-12 text-white  ml-12' onClick={() => setSideMenu(true)}>
            <BarChart2Icon />
          </div>
          </div>
         </div>

        {/* sideMenue For Mobile */}
      
          <ul className="flex justify-center items-center h-screen  w-full space-y-4 mt-12 flex-col flex-1 ">
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#home'>Home</a>
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#skills'>Tech Stack</a>
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#projects'>Projects</a>
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#education'>Education</a>
          </ul>
        </nav>
        </div>
        {/* Navbar */}
        <nav className=" flex justify-between items-center w-full px-6 py-4">
          <div className="font-bold text-xl md:text-3xl cursor-pointer flex flex-col">Muhammad Atif
            <span className='text-[12px] text-gray-500 flex justify-center '>Full Stack | MERN & AI Enthusiast</span>
          </div>

        {/* sideMenue For Mobile */}
        

          {/* Desktop Menu */}

          {/* close preview of ICon */}
          <div className='rotate-270 md:hidden ml-12' onClick={() => setSideMenu(false)}>
            <BarChart2Icon />
          </div>
          <ul className="hidden md:flex justify-end ml-4 gap-5 mt-4  md:visible flex-col md:flex-row space-x-8 text-base md:text-lg">
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#home'>Home</a>
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#skills'>Tech Stack</a>
            <a className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-600 " href='#projects'>Projects</a>
          </ul>
        </nav>
       

        {/* Hero section */}
        <div className="h-[80vh] pt-32 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24">
          {/* Profile Image */}
          {/* <div className="flex items-center justify-center h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full border">
            <img alt="Profile Image" />
          </div> */}

          {/* Text + Buttons */}
          <div className="flex flex-col mb-8 items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 lg:ml-12">
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
                <button className="bg-blue-600 flex flex-row  cursor-pointer max-w-52 hover:bg-blue-800 px-6 py-2 text-white rounded">
                  Download CV <Download className='ml-2 pb-1' />
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
