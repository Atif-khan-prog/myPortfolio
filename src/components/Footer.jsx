import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-md text-white mt-12 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div
  className="text-2xl tracking-wide"
  style={{ fontFamily: "'Montserrat', sans-serif" }}
>
  M. Atif
</div>


        {/* Education */}
        <div className="text-sm text-gray-300 text-center md:text-left leading-relaxed">
           BS Software Engineering (2023 – Ongoing) <br />
          <span className="text-gray-400">
            Institute of Management Sciences, Peshawar
          </span>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Muhammad Atif | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
