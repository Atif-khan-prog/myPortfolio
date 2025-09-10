import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/* Simple Modal that portals to document.body */
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // prevent background scroll
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-[90%] md:w-2/3 lg:w-1/2 h-[80vh] bg-stone-700 rounded-2xl p-6 overflow-auto shadow-lg"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

const Projects = () => {
  const [showProjectCard, setShowProjectCard] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { name: "Promotium", images: ["Image1", "Image2"], description: "meets promoter with advertiser", link: "somewhere" },
    { name: "nothing", images: ["Image1", "Image2"], description: "meets promoter with advertiser", link: "somewhere" },
    { name: "something", images: ["Image1", "Image2"], description: "meets promoter with advertiser", link: "somewhere" },
    { name: "everything", images: ["Image1", "Image2"], description: "meets promoter with advertiser", link: "somewhere" },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setShowProjectCard(true);
  };

  const closeProject = () => {
    setShowProjectCard(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="w-screen mt-4 flex justify-center items-center text-white mx-3">
      <div
        className="md:max-w-[80%] min-h-screen rounded-2xl mb-3 flex flex-wrap justify-center p-6"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div>
          <h1 className="text-center text-4xl tracking-widest underline underline-offset-8 decoration-blue-600">
            Projects <span className="text-2xl">({projects.length})</span>
          </h1>

        
        </div>
      </div>
    </div>
  );
};

export default Projects;
