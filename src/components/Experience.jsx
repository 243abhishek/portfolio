import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    role: "MERN Stack Developer (Fresher)",
    company: "Self / Projects",
    duration: "2025 - Present",
    badge: "Active",
    description: [
      "Built full-stack web applications using MongoDB, Express, React, and Node.js.",
      "Implemented authentication and authorization using JWT.",
      "Developed responsive UI using Tailwind CSS.",
      "Created REST APIs and handled CRUD operations."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    duration: "2024 - 2025",
    badge: null,
    description: [
      "Designed and developed responsive user interfaces using React.",
      "Worked with Tailwind CSS and modern UI practices.",
      "Built projects like FoodZone and Portfolio.",
      "Focused on performance and clean UI design."
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  })
};

const bulletVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.08, duration: 0.3, ease: "easeOut" }
  })
};

const Experience = () => {
  return (
    <section className="py-10 lg:py-14 flex justify-center">
      <div className="w-[94%] md:w-[75%] lg:w-[58%]">

        {/* Section heading — largest, bold, blue */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-500 mb-8 lg:mb-10 tracking-tight"
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3, boxShadow: "0 12px 35px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 lg:p-8 shadow-sm"
            >
              {/* Role + duration row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Role — primary, largest in card */}
                  <h3 className="font-mono text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                    {exp.role}
                  </h3>
                  {exp.badge && (
                    <span className="text-xs px-2.5 py-0.5 bg-green-50 text-green-600 border border-green-200 rounded-full font-semibold shrink-0">
                      {exp.badge}
                    </span>
                  )}
                </div>
                {/* Duration — small, muted, right */}
                <span className="font-mono text-sm md:text-base text-gray-400 shrink-0 mt-0.5">
                  {exp.duration}
                </span>
              </div>

              {/* Company — secondary, blue, medium */}
              <p className="font-mono text-base md:text-lg text-blue-500 font-medium mb-5">
                {exp.company}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-5" />

              {/* Bullets — body text, readable size */}
              <ul className="space-y-3">
                {exp.description.map((point, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={bulletVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-600 text-sm md:text-base lg:text-base leading-relaxed"
                  >
                    <span className="text-blue-400 mt-1 shrink-0">▸</span>
                    {point}
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;