import React from "react";
import foodzoneImg from "../assets/foodzone.png";
import portfolio from "../assets/portfolio-img.png";
import note from "../assets/note-app.png"
import Quora from "../assets/Quora-posts.png"

const projects = [
  { title: "FoodZone", subtitle: "Food ordering website", image:foodzoneImg, tech: ["React", "JS", "CSS", "Tailwind" , "MongoDB",], link: "https://github.com/243abhishek/FoodZone" },
  { title: "Quora Post", subtitle: "Social website", image:Quora, tech: ["Express","MongoDB", "CSS", "JS"], link: "https://github.com/243abhishek/quora-posts" },
  { title: "Note-app", subtitle: "Jwt-integrated notes website", image:note, tech: ["Node.js", "Express.js", "JWT" , "Tailwind"], link: "https://github.com/243abhishek/note-auth-app" },
  { title: "Portfolio", subtitle: "Personal Portfolio", image:portfolio, tech: ["React", "Framer Motion", "Tailwind"] },
];

const Project = () => {
  return (
    // sm: full | md: 75% | lg: 58%
    <section className="py-10 lg:py-14 flex justify-center">
      <div className="w-[94%] md:w-[75%] lg:w-[58%]">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-500 mb-6 lg:mb-8">
          FEATURED PROJECTS
        </h2>

        {/* 1 col on xs | 2 cols from sm up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index}
              className="bg-white rounded-xl border p-3 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 hover:bg-gray-50"
            >
              <div className="rounded-xl overflow-hidden border mb-4">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title}
                      className="w-full h-[160px] sm:h-[180px] lg:h-[200px] object-cover hover:scale-[1.01] transition duration-300 cursor-pointer" />
                  </a>
                ) : (
                  <img src={project.image} alt={project.title}
                    className="w-full h-[160px] sm:h-[180px] lg:h-[200px] object-cover" />
                )}
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm mb-3">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-100 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;