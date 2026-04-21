import React, { useState } from 'react'
import computer from '../assets/computer.avif';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const introText = "Hi, I am Abhishek Kumar. A Full Stack Web Developer focused on building clean and scalable web applications.";
const words = introText.split(" ");

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
};

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── MOBILE only: inline hero (< md) ── */}
      <div className='md:hidden mt-4 flex justify-center px-4'>
        <div className='w-full bg-white rounded-2xl p-6 shadow-sm'>
          <div className='flex items-center gap-4 mb-5'>
            <img src={computer} alt='Abhishek Kumar'
              className='h-20 w-20 rounded-2xl object-cover shadow-md shrink-0' />
            <div>
              <span className='text-3xl'>👋</span>
              <h1 className='text-xl font-bold text-gray-900 leading-tight mt-1'>Abhishek Kumar</h1>
              <p className='text-sm text-blue-500 font-medium'>Full Stack Developer</p>
            </div>
          </div>
          <motion.p className='text-base font-semibold text-gray-800 leading-snug mb-3'
            variants={containerVariants} initial="hidden" animate="visible">
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-[4px]">{word}</motion.span>
            ))}
          </motion.p>
          <p className='text-sm text-gray-500 leading-relaxed mb-3'>
            A passionate developer and problem-solver who thrives on turning ideas into practical solutions. Continuously learning and building.
          </p>
          <p className="text-sm text-gray-500">
            Connect on{" "}
            <a href="https://linkedin.com/in/abhishek243" target="_blank" rel="noreferrer"
              className="text-blue-500 underline font-medium">LinkedIn</a>{" "}or{" "}
            <a href="https://github.com/243abhishek" target="_blank" rel="noreferrer"
              className="text-blue-500 underline font-medium">GitHub</a>.
          </p>
        </div>
      </div>

      {/* ── MD + LG: button + modal ── */}
      <div className='hidden md:flex mt-8 justify-center items-center flex-col'>
        {/* md: 75% | lg: 58% */}
        <div className='w-[75%] lg:w-[58%] mb-4'>
          <button onClick={() => setOpen(true)}
            className='pl-6 pr-6 pt-3 pb-3 lg:pl-7 lg:pr-7 lg:pt-4 lg:pb-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-600 text-lg lg:text-xl rounded-xl hover:shadow-md transition-shadow'>
            ABOUT ME
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50 px-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className='w-full md:w-[75%] lg:w-[58%]'
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal box — stacks on md, row on lg */}
                <div className='bg-white rounded-2xl relative p-6 lg:p-8
                  flex flex-col md:flex-row gap-5 lg:gap-6
                  max-h-[90vh] overflow-y-auto shadow-2xl'>

                  <button onClick={() => setOpen(false)}
                    className='absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors border border-gray-200 rounded-lg p-1'>
                    <X size={18} />
                  </button>

                  {/* Photo */}
                  <div className='flex justify-center md:justify-start items-start shrink-0 md:py-8 lg:py-11'>
                    <img
                      className='h-[200px] w-full md:h-[260px] md:w-[180px] lg:h-[320px] lg:w-[200px] object-cover rounded-2xl shadow-md'
                      src={computer} alt='Abhishek Kumar'
                    />
                  </div>

                  {/* Text */}
                  <div className='flex flex-col justify-start gap-3 lg:gap-4 px-1 md:px-3 lg:px-4'>
                    <span className='text-3xl lg:text-4xl'>👋</span>
                    <motion.h2
                      className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug'
                      variants={containerVariants} initial="hidden" animate={open ? "visible" : "hidden"}
                    >
                      {words.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block mr-[5px]">{word}</motion.span>
                      ))}
                    </motion.h2>
                    <p className='text-sm md:text-base text-gray-500 leading-relaxed'>
                      A passionate developer and problem-solver who thrives on turning ideas into practical solutions. With curiosity and a drive to keep learning, I aim to build something meaningful in every project I take on.
                    </p>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                      Feel free to connect with me on{" "}
                      <a href="https://linkedin.com/in/abhishek243" target="_blank" rel="noreferrer"
                        className="text-blue-500 underline hover:text-blue-700 transition-colors font-medium">LinkedIn</a>{" "}or{" "}
                      <a href="https://github.com/243abhishek" target="_blank" rel="noreferrer"
                        className="text-blue-500 underline hover:text-blue-700 transition-colors font-medium">GitHub</a>
                      . I am always happy to help.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default About;
