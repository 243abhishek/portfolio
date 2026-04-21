import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { easeInOut, motion } from 'motion/react';
import { Copyright } from 'lucide-react';

const socials = [
  {
    icon: <AiOutlineHome />,
    href: "/"
  },
  {
    icon: <MdOutlineMailOutline />,
    href: "mailto:abhiprasad411@gmail.com"
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/abhishek243"
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/243abhishek"
  },
  {
    icon: <FaXTwitter />,
    href: "" // optional, keep empty or remove if not using
  }
];

const Social = () => {
  return (
    <div className='mt-8 md:mt-10 pb-6'>

      {/* Big heading — 3 tiers */}
      <div className='text-center px-4'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold selection:bg-amber-200 leading-tight'>
          Connect on
        </h1>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold selection:bg-amber-200 leading-tight mask-b-from-15%'>
          Socials
        </h1>
      </div>

      {/* Icons bar — full width on xs, shrinks up */}
      <div className='mt-6 md:mt-8 mb-5 flex justify-center'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className='flex justify-center gap-3 md:gap-4 px-5 md:px-8 lg:px-10 py-4 md:py-5 items-center rounded-xl
            shadow-[inset_-12px_-8px_40px_#46464620]
            w-[94%] sm:w-[70%] md:w-[50%] lg:w-[30%]'
        >
          {socials.map(({ icon, href }, i) => (
            <div key={i} className='hover:scale-[1.25] hover:bg-gray-100 p-2 rounded-3xl transition-transform duration-200'>
              <a href={href}><i className='text-xl md:text-2xl lg:text-3xl block'>{icon}</i></a>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center px-4">
        <div className="flex justify-center items-center p-3 md:p-4 w-[94%] md:w-[75%] lg:w-[58%] rounded-xl gap-3
          bg-gradient-to-r from-neutral-50 via-sky-50 to-neutral-50
          shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition-transform duration-300">
          <Copyright className="text-black shrink-0" size={18} />
          <p className="text-black text-xs md:text-sm lg:text-base text-center">
            2026 Abhishek Kumar. All rights reserved.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Social
