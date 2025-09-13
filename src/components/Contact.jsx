import React from 'react'

const Contact = () => {

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
                    Let's Connect
                </h1>

                <div className='w-full h-full flex justify-center flex-col md:flex-row  mt-4'>
                    <div className='w-full md:w-1/2 h-full  p-4'>
                        <h1 className='text-3xl text-white font-semibold w-full flex justify-center'>Contacts</h1>

                        <div className='border  font-sans rounded-2xl gap-6 justify-between  h-11/12 mt-2 pt-8 space-y-4 border-gray-700/40 shadow-md bg-gradient-to-br 
              from-gray-900/70 to-gray-800/50'>

                            <div className='h-11/12'>
                                <div>Email <span>muhammadatif6541@gmail.com</span></div>
                                <div>LinkdIn <span>Muhammad Atif</span></div>
                                <div>Address <span>Peshawar</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 h-11/12 mt-4'>
                        <h1 className='text-3xl text-white font-semibold w-full flex justify-center'>Details</h1>

                        <div className='border font-sans rounded-2xl gap-6 justify-between  h-11/12 mt-2 pt-8 space-y-4 border-gray-700/40 shadow-md bg-gradient-to-br 
              from-gray-900/70 to-gray-800/50'>
                            <form action="submit" className='px-6  h-full space-y-'>
                                <input type="text" placeholder='Name'
                                    className='border-b-2 border-blue-300 focus:border-blue-600 p-2 w-full
                            outline-none'
                                    name="" id="" required />
                                <input type="email" placeholder='Email'
                                    className='border-b-2 border-blue-300 focus:border-blue-600 p-2 w-full
                            outline-none'
                                    name="" id="" required />
                                <button className='p-2 mt-12 flex justify-center bg-blue-600 rounded'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact