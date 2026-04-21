import React from 'react'

const Resume = () => {
  return (
    <div className='flex justify-around mt-3 '>
        <div className='w-[58%]'>
            <button onClick={()=>window.open("/resume.pdf","_blank")}
             className='text-xl pl-10 pt-4 pb-4 pr-10 rounded-xl border-2
              border-blue-500 text-gray-600 tracking-wider hover
              hover:bg-blue-400 hover:text-white transition-all duration-300
               shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
              >RESUME</button>
        </div>
    </div>
  )
}

export default Resume