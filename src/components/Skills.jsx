import React from 'react'

const skills = [
  { title: "Programming Languages", items: "JavaScript, TypeScript, Python, Java," },
  { title: "Web Technologies", items: "React, Node.js, Express, Redux" },
  { title: "Cloud & DevOps", items: "AWS, Docker, Kubernetes, GitHub" },
  { title: "Databases", items: "MongoDB, PostgreSQL, MySQL" },
  { title: "Tools & Platforms", items: "Git, VSCode, Postman, Linux, Windows" },
];

const cardClass = `w-full bg-white rounded-xl p-4 md:p-5 lg:p-7
  hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1
  hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transition-all duration-200
  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`;

const Skills = () => {
  return (
    <div className='py-6'>
      <h1 className='text-2xl md:text-3xl mx-auto w-[94%] md:w-[75%] lg:w-[58%] mb-5 mt-3 font-semibold text-blue-500'>
        SKILLS
      </h1>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-3 md:gap-4 w-[94%] md:w-[75%] lg:w-[58%]'>
          {skills.map((skill, i) => (
            <div key={i} className={cardClass}>
              <h1 className='text-base md:text-xl lg:text-2xl font-mono mb-1'>{skill.title}</h1>
              <h3 className='text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed'>{skill.items}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
