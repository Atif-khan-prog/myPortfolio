import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ChromeIcon } from "lucide-react";
import lifeVault from '../assets/projectsIMG/lifeVault.png'
import promotium from '../assets/projectsIMG/promotium.png'
import todo from '../assets/projectsIMG/todo.png'
import estate from '../assets/projectsIMG/estate.png'
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const modelRef = useRef([]);

  const outsideClicked = (e) => {
    if (
      activeIndex !== null &&
      modelRef.current[activeIndex] &&
      !modelRef.current[activeIndex].contains(e.target)
    ) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      document.addEventListener("click", outsideClicked);
    }
    return () => document.removeEventListener("click", outsideClicked);
  }, [activeIndex]);

  const projects = [
    {
      name: "Promotium",
      images: [promotium], // replace with real screenshots
      description:
        "Promotium is a decentralized platform that connects promoters with advertisers, enabling seamless collaboration on blockchain. I primarily worked on the backend, building APIs  and ensuring secure data flow between users and services.",
      link: "https://dapp-promotium.netlify.app/",
      techs: [
        "HTML + CSS",
        "React.js",
        "Node + Express",
        "MongoDB",
        "Pinata",
        "ThirdWeb",
        "Solidity",
        "BlockChain",
      ],
    },
    {
      name: "Real Estate",
      images: [estate],
      description:
        "A modern real estate web application designed to showcase properties with a clean and responsive UI. The project focuses on smooth navigation, property listing management, and user-friendly forms for inquiries, making it easier for users to explore and connect with sellers.",
      link: "https://real-estate-rv.netlify.app/",
      techs: ["HTML", "Tailwind CSS", "React.js + Vite + JSX", "Web3 Forms"],
    },
    {
      name: "Todo List",
      images: [todo],
      description:
        "A productivity-focused application that allows users to manage their daily tasks with ease. It includes features like task creation, updates, and deletion with a persistent backend. Designed to be minimal yet effective, the app helps users stay organized and on top of their schedules.",
      link: "https://todo-list-fro.netlify.app/",
      techs: [
        "HTML",
        "Tailwind CSS",
        "React.js + Vite",
        "Node + Express",
        "MongoDB",
      ],
    },
    {
      name: "Daily Diary",
      images: [lifeVault],
      description:
        "Daily Diary is a full-stack application built to help users record personal experiences, manage finances, and store precious memories. It integrates multiple modules including a diary system, expense tracking, and memory management. The focus of this project was to combine practicality with simplicity in a single app.",
      link: "Not Hosted",
      techs: [
        "HTML + CSS",
        "JavaScript",
        "Node + Express",
        "EJS Templating",
        "MySQL",
      ],
    },
  ];

  return (
    <div className="flex justify-center mt-8 text-white" id="projects">
      <div
        className="md:w-[80%] w-full min-h-screen rounded-2xl flex flex-col p-6 space-y-6"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h1 className="text-3xl underline text-center tracking-widest underline-offset-8 decoration-blue-600 my-4">
          My Projects
        </h1>

        {projects.map((project, i) => (
          <div
            key={project.name}
            ref={(el) => (modelRef.current[i] = el)}
            className={`transition-all duration-100 ease-in overflow-hidden 
              rounded-2xl border border-gray-700/40 shadow-md bg-gradient-to-br 
              from-gray-900/70 to-gray-800/50 hover:shadow-lg 
              ${activeIndex === i ? "max-h-[1000px]" : "max-h-40"} 
              flex flex-col md:flex-row`}
          >
            {/* Project Image */}
            <div className={`md:w-1/3 ${activeIndex == i && 'md:w-2/3'} w-full transition-all duration-100 ease-in h-40 md:h-auto relative`}>
              <img
                src={project.images[0]}
                alt={project.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(i);
                }}
                className="object-cover w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            </div>

            {/* Project Details */}
            <div className={`md:w-2/3 w-full  transition-all duration-100 ease-in p-6 flex flex-col`}>
              <div className="flex items-center justify-between">
                <h2
                  className={`font-bold transition-all duration-200 ${
                    activeIndex === i ? "text-2xl text-blue-400" : "text-lg"
                  }`}
                >
                  {project.name}
                </h2>
                {activeIndex === i ? (
                  <span
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }}
                  >
                    <ChevronUp />
                  </span>
                ) : (
                  <span
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(i);
                    }}
                  >
                    <ChevronDown />
                  </span>
                )}
              </div>

              {/* Description + Techs (only visible when open) */}
              <div
                className={`transition-opacity duration-300 ease-in-out ${
                  activeIndex === i ? "opacity-100 mt-4" : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-300 border border-blue-600/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  className="inline-block mt-4 text-sm underline underline-offset-2 text-blue-400 hover:text-blue-300"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name === 'Daily Diary' ? <span className="decoration-0 cursor-default text-white" aria-disabled>Not Hosted</span> : 'Live Website'} 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
