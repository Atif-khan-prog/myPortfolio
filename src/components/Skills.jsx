import React from 'react'
import HTML from '../assets/images/html-5.png'
import CSS from '../assets/images/css-3.png'
import JS from '../assets/images/js.png'
import react from '../assets/images/atom.png'
import node from '../assets/images/node-js.png'
import ex from '../assets/images/express.png'
import CPP from '../assets/images/c-.png'
import java from '../assets/images/java.png'
import mongo from '../assets/images/leaf.png'
import github from '../assets/images/github.png'
import { motion } from 'framer-motion'

const Skills = () => {
    const skills = [
        { name: 'HTML', image: HTML },
        { name: 'CSS', image: CSS },
        { name: 'JavaScript', image: JS },
        { name: 'React', image: react },
        { name: 'Node js', image: node },
        { name: 'Express', image: ex },
        { name: 'MongoDB', image: mongo },
        { name: 'C++', image: CPP },
        { name: 'Java', image: java },
        { name: 'Git & GitHub', image: github },

    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center text-white mx-3" id="skills">
            <div
                className="md:max-w-[80%] min-h-screen rounded-2xl mb-3 flex flex-col p-6"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
            >
                <h1 className="text-3xl  text-center tracking-widest  my-4">
                    My Toolkit
                </h1>

                <div className="md:mt-4 flex flex-wrap flex-row justify-center md:justify-center gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="h-36 w-28 p-4 m-2 flex flex-col items-center justify-center text-center rounded-2xl
                            bg-white/10 border border-white/20
                            shadow-lg shadow-black/50
                            hover:shadow-blue-500/40 hover:scale-105
                            transition-all duration-300 ease-in-out"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-10 h-10 object-contain mb-2"
                            />
                            <span
                                className="text-sm font-small inline-block transition-all duration-300"
                                style={{
                                    textShadow: "2 3 8px rgba(59, 130, 246, 0.7)", // blue glow
                                }}
                            >
                                {skill.name}
                            </span>
                        </div>

                    ))}
                    <br />
                    <span className='flex w-full  tracking-normal text-gray-400 space-x-5 justify-center text-[14px] mt-4'>
                        <a href='#projects'
                            className='decoration-1 text-blue-500
                         hover:text-blue-300 mr-2 underline
                         underline-offset-4 
                         transition-all duration-300 ease-in'>
                            projects</a> built By implementing these tecks</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
