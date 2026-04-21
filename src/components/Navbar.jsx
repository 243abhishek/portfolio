import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react'
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Projects", link: "projects" },
  { name: "Experience", link: "experience" },
  { name: "Education", link: "education" },
  { name: "Skills", link: "skills" },
  { name: "Socials", link: "socials" },
];

const float = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const text1 = "Abhishek";
  const text2 = "Developer";

  const { scrollY } = useScroll();
  const x1 = useTransform(scrollY, [0, 500], [0, 30]);
  const y1 = useTransform(scrollY, [0, 500], [0, -20]);
  const x2 = useTransform(scrollY, [0, 500], [0, -25]);
  const y2 = useTransform(scrollY, [0, 500], [0, 30]);
  const x3 = useTransform(scrollY, [0, 500], [0, 20]);
  const y3 = useTransform(scrollY, [0, 500], [0, 25]);
  const x4 = useTransform(scrollY, [0, 500], [0, -30]);
  const y4 = useTransform(scrollY, [0, 500], [0, -25]);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div>
      {/* ── NAVBAR ── */}
      <div className='flex justify-center'>
        {/* sm: full width pill | md: 75% | lg: 58% */}
        <div className='w-[94%] md:w-[75%] lg:w-[58%] bg-white rounded-xl mt-2 px-4 py-3'>

          {/* Desktop nav — show from md up, but compact on md */}
          <div className='hidden md:flex justify-evenly items-center flex-wrap gap-2'>
            {navItems.map((item, idx) => (
              <Link key={idx} to="#"
                onClick={(e) => { e.preventDefault(); handleScroll(item.link); }}
                className='relative cursor-pointer py-2 px-4 lg:px-8 rounded-xl text-center text-base lg:text-xl font-semibold text-white bg-neutral-800'
              >
                {item.name}
                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-10 lg:w-16 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent'></span>
              </Link>
            ))}
          </div>

          {/* Mobile top bar — only below md */}
          <div className='flex md:hidden justify-between items-center px-1'>
            <span className='text-lg font-bold text-gray-800'>Abhishek Kumar</span>
            <button onClick={() => setMenuOpen(!menuOpen)} className='text-gray-800 p-1'>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className='flex flex-col gap-2 mt-3 md:hidden'>
              {navItems.map((item, idx) => (
                <button key={idx} onClick={() => handleScroll(item.link)}
                  className='w-full text-left px-5 py-3 rounded-xl text-base font-semibold text-white bg-neutral-800'>
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── HERO — hidden on mobile only, visible md+ ── */}
      <div className='hidden md:flex justify-center mt-0.5'>
        {/* md: 75% wide, shorter | lg: 58%, full height */}
        <div className='relative w-[75%] lg:w-[58%] h-[380px] lg:h-[660px] bg-white px-8 lg:px-10
          flex flex-col justify-center items-center rounded-xl overflow-hidden'>

          {/* Floating tech boxes — pulled in closer on md */}
          <motion.div style={{ x: x1, y: y1 }} variants={float} animate="animate"
            className="absolute top-16 lg:top-30 left-10 lg:left-30">
            <motion.div className="p-2 lg:p-3 rounded-xl relative radial-gradient overflow-hidden"
              initial={{ "--x": "100%" }} animate={{ "--x": "-100%" }} whileTap={{ scale: 0.97 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}>
              <span className="relative z-10"><img src="https://i.pinimg.com/736x/91/82/fd/9182fd17b351aa8fdfbee441eff85f5d.jpg" className="w-8 h-7 lg:w-10 lg:h-9 rounded-[5px]" /></span>
              <span className="absolute inset-0 rounded-xl p-[2px] border-shine pointer-events-none"></span>
            </motion.div>
          </motion.div>

          <motion.div style={{ x: x2, y: y2 }} variants={float} animate="animate"
            className="absolute top-14 lg:top-25 right-10 lg:right-30">
            <motion.div className="p-2 lg:p-3 rounded-xl relative radial-gradient overflow-hidden"
              initial={{ "--x": "100%" }} animate={{ "--x": "-100%" }} whileTap={{ scale: 0.97 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}>
              <span className="relative z-10"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 lg:w-10 rounded-[5px]" /></span>
              <span className="absolute inset-0 rounded-xl p-[2px] border-shine pointer-events-none"></span>
            </motion.div>
          </motion.div>

          <motion.div style={{ x: x3, y: y3 }} variants={float} animate="animate"
            className="absolute bottom-14 lg:bottom-24 left-8 lg:left-20">
            <motion.div className="p-2 lg:p-3 rounded-xl relative radial-gradient overflow-hidden"
              initial={{ "--x": "100%" }} animate={{ "--x": "-100%" }} whileTap={{ scale: 0.97 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}>
              <span className="relative z-10"><img src="https://i.pinimg.com/736x/19/79/27/1979273a4e61355abaff6e10b5a8f4bb.jpg" className="w-8 h-7 lg:w-10 lg:h-9 rounded-[5px]" /></span>
              <span className="absolute inset-0 rounded-xl p-[2px] border-shine pointer-events-none"></span>
            </motion.div>
          </motion.div>

          <motion.div style={{ x: x4, y: y4 }} variants={float} animate="animate"
            className="absolute bottom-10 lg:bottom-18 right-8 lg:right-20">
            <motion.div className="p-2 lg:p-3 rounded-xl relative radial-gradient overflow-hidden"
              initial={{ "--x": "100%" }} animate={{ "--x": "-100%" }} whileTap={{ scale: 0.97 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}>
              <span className="relative z-10"><img src="https://i.pinimg.com/736x/14/a0/76/14a0769ec2f5941fd56f82cfb6d4242a.jpg" className="w-8 lg:w-10 rounded-[5px]" /></span>
              <span className="absolute inset-0 rounded-xl p-[2px] border-shine pointer-events-none"></span>
            </motion.div>
          </motion.div>

          {/* Name — scales: md=5xl, lg=7xl */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight text-center">
            <span className="text-blue-500">{text1}</span> Kumar,
          </h1>
          <h1 className="text-2xl lg:text-4xl font-medium text-gray-800 flex gap-2 mt-2 text-center">
            Full Stack <span className="text-blue-500">{text2}</span>
          </h1>
          <h3 className="text-sm lg:text-lg text-gray-600 mt-4 text-center">
            "Building simple, scalable, and user-friendly
          </h3>
          <h3 className="text-sm lg:text-lg text-center">
            <span className='text-blue-700'>web applications</span>."
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
