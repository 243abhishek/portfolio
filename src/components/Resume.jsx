import React from 'react'

const Resume = () => {
  return (
    <div className="mt-3 w-[75%] lg:w-[58%] mx-auto">
      
      <div className="flex justify-center md:justify-start">
        
        <button
          onClick={() => window.open("/resume.pdf", "_blank")}
         className="text-lg sm:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4
rounded-xl border-2 border-blue-500 text-gray-600 tracking-wider
hover:bg-blue-400 hover:text-white hover:scale-105 active:scale-95
transition-all duration-300
shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-blue-400/40"
        >
          VIEW MY RESUME
        </button>

      </div>
    </div>
  )
}

export default Resume