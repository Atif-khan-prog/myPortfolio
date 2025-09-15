import React, { useState } from 'react'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import location from '../assets/images/location.png'
import gmail from '../assets/images/gmail.png'
const Contact = () => {

  const [result, setResult] = useState('');

  const onSubmit= async (e) =>{
    e.preventDefault()
    setResult('Sending...')
    const formData = new FormData(e.target);
    formData.append('access_key', )

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    try{
      if(data.success){
      alert('Sent Successfully');
      setResult('Success');
      e.target.reset();
      console.log(formData)
    }
    
    }catch(err) {
      console.log(err);
    };

  }

    return (


        <div className="flex justify-center mt-8 text-white" id="contact">
            <div
                className="md:w-[80%] w-full min-h-screen rounded-2xl flex flex-col p-6 space-y-6"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
            >
                <h1 className="text-3xl  text-center tracking-widest my-4">
                    Let's Connect
                </h1>

                <div className="w-full h-full flex flex-col md:flex-row gap-6 mt-6 px-4">
  {/* Contact Info Section */}
  <div className="w-full md:w-1/2 max-h-full p-6 rounded-2xl border border-gray-700/40 shadow-md bg-gradient-to-br from-gray-900/70 to-gray-800/50">
    <h1 className="text-3xl text-white font-semibold mb-6 text-center">Contact Information</h1>

    <div className="space-y-6 w-full text-gray-300">
      <div className="flex items-center justify-between border-b border-gray-700/40 pb-2">
        <span className="font-medium"><img src={gmail} alt="" className='w-8 md:w-10' /></span>
        <span className="text-blue-400">muhammadatif6541</span>
      </div>

      <div className="flex items-center justify-between border-b border-gray-700/40 pb-2">
        <span className="font-sm"><img src={linkedin} alt="" className='w-8 md:w-10' /></span>
        <span className="text-blue-600 hover:text-blue-400"><a href="https://www.linkedin.com/in/muhammad-atif-69a4442b4" 
        target='_blank'
        rel='noreferrer'>Muhammad Atif</a></span>
      </div>    

     

      <div className="flex items-center justify-between border-b border-gray-700/40 pb-2">
        <span className="font-medium"><img src={github} alt="" className='w-8 md:w-10' /></span>
        <span className="text-blue-600 hover:text-blue-400"><a href="https://github.com/Atif-khan-prog" 
        target='_blank'
        rel='noreferrer'>Atif-khan-prog </a></span>
      </div>

       <div className="flex items-center justify-between border-b border-gray-700/40 pb-2">
        <span className="font-medium"><img src={location} alt="" className='w-8 md:w-10' /></span>
        <span className="text-blue-400">Peshawar</span>
      </div>
    </div>
  </div>

  {/* Message Form Section */}
  <div className="w-full md:w-1/2 h-full p-6 rounded-2xl border border-gray-700/40 shadow-md bg-gradient-to-br from-gray-900/70 to-gray-800/50">
    <h1 className="text-3xl text-white font-semibold mb-6 text-center">Send a Message</h1>

    <form className="space-y-6" onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          name='name'
          className="w-full p-3 rounded-lg bg-gray-800/40 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none transition"
          required
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Your Email"
          name='email'
          className="w-full p-3 rounded-lg bg-gray-800/40 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none transition"
          required
        />
      </div>

      <div>
        <textarea
          rows="4"
          placeholder="Your Message"
          name='message'
          className="w-full p-3 rounded-lg bg-gray-800/40 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none transition resize-none"
          required
        ></textarea>
      </div>

      <button
        className="w-full cursor-pointer py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
      >
        Send Message
      </button>
    </form>
  </div>
</div>


            </div>
        </div>
    )
}

export default Contact