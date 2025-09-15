import React, { useState } from 'react'
import heroBG3 from '../assets/images/heroBG3.jpg'
import { Download, BarChart2Icon } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [sideMenu, setSideMenu] = useState(true)

  return (
    <div className="relative h-screen w-full mb-4 overflow-hidden" id="home">
      {/* Blurred background */}
      <div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroBG3})`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Mobile Nav (unchanged) */}
        <div className={`w-full h-screen ${sideMenu && 'hidden'} md:hidden bg-gray-900`}>
          <nav className="flex flex-col w-full px-6 py-4">
            <div className="flex justify-between w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-bold text-xl md:text-4xl cursor-pointer justify-start flex flex-col"
              >
                Muhammad Atif
                <span className="text-[12px] text-gray-500">
                  Full Stack | MERN & AI Enthusiast
                </span>
              </motion.div>
              <div className="mt-3">
                <div
                  className="rotate-270 md:hidden mb-12 text-white ml-12 cursor-pointer"
                  onClick={() => setSideMenu(true)}
                >
                  <BarChart2Icon />
                </div>
              </div>
            </div>

            <ul className="flex justify-center items-center h-screen w-full space-y-4 mt-12 flex-col flex-1">
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer hover:underline hover:decoration-blue-600"
                href="#home"
              >
                Home
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer hover:underline hover:decoration-blue-600"
                href="#skills"
              >
                Tech Stack
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer hover:underline hover:decoration-blue-600"
                href="#projects"
              >
                Projects
              </motion.a>
            </ul>
          </nav>
        </div>

        {/* Navbar */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-center w-full px-6 py-4"
        >
          <div className="font-bold text-xl md:text-3xl cursor-pointer flex flex-col">
            Muhammad Atif
            <span className="text-[12px] text-gray-500 flex justify-center">
              Full Stack | MERN & AI Enthusiast
            </span>
          </div>

          <div className="rotate-270 md:hidden ml-12 cursor-pointer" onClick={() => setSideMenu(false)}>
            <BarChart2Icon />
          </div>

          <ul className="hidden md:flex justify-end ml-4 gap-5 mt-4 md:visible flex-col md:flex-row space-x-8 text-base md:text-lg">
            <motion.a whileHover={{ scale: 1.1 }} href="#home">
              Home
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#skills">
              Tech Stack
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#projects">
              Projects
            </motion.a>
          </ul>
        </motion.nav>

        {/* Hero section */}
        <div className="h-[80vh] pt-32 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col mb-8 items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 lg:ml-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold">Welcome to My Portfolio</h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.a whileHover={{ scale: 1.05 }} href="#contact">
                <button className="border px-6 py-2 hover:bg-blue-800 transition-all duration-200 ease-in rounded">
                  Contact
                </button>
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="/docs/myCv.pdf" download="Muhammad-Atif-CV.pdf">
                <button className="bg-blue-600 flex flex-row cursor-pointer max-w-52 hover:bg-blue-800 px-6 py-2 text-white rounded">
                  Download CV <Download className="ml-2 pb-1" />
                </button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
